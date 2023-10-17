/* eslint-disable no-undef */
import fs, { readFileSync } from 'fs';
import path from 'path';
import ethers from 'ethers';
import { table } from 'table';
import { getBalancesForEthereumAddress } from 'ethereum-erc20-token-balances-multicall';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { tokenList } from './data/tokens.js';
import fetch from 'node-fetch';
import { countdown, mergeLogFiles, mergeMetaFiles } from './utils.js';
import { tableHeader, tableConfig } from './tableCfg.js';

async function getLocationData() {
  let data = await fetch('http://ip-api.com/json/').then((e) => e.json());
  return data;
}

// runners 

async function testRunner(name, addresses, fn, rpc) {
  let total = addresses.length;
  let success = 0;
  let startTime = Date.now();

  for (let i = 0; i < addresses.length; i++) {
    const add = addresses[i];
    let resp = await fn.apply(this, [rpc, add]);

    if (resp) {
      success += 1;
    }
  }

  let endTime = Date.now();

  let retData = {
    name,
    success,
    startTime,
    endTime,
    total,
    avgTime: (endTime - startTime) / total,
  };

  let successRate = (success / total) * 100;
  let circle;

  if (successRate >= 90) {
    circle = '🟢'; // Green circle for success rate >= 75%
  } else if (successRate >= 70) {
    circle = '🟠'; // Orange circle for success rate >= 50% and < 75%
  } else {
    circle = '🔴'; // Red circle for success rate < 50%
  }

  console.log(`${circle} ${name}/${fn?.name} Complete.`, retData?.avgTime);

  return retData;
}

async function testRunner2(name, fn, rpc, blocks) {
  let total = 1;
  let success = 0;
  let startTime = Date.now();

  let resp = await fn.apply(this, [rpc, blocks]);

  if (resp) {
    success += 1;
  }

  let endTime = Date.now();

  let retData = {
    name,
    success,
    startTime,
    endTime,
    total,
    avgTime: (endTime - startTime) / total,
  };

  let successRate = (success / total) * 100;
  let circle;

  if (successRate >= 90) {
    circle = '🟢'; // Green circle for success rate >= 75%
  } else if (successRate >= 70) {
    circle = '🟠'; // Orange circle for success rate >= 50% and < 75%
  } else {
    circle = '🔴'; // Red circle for success rate < 50%
  }

  console.log(`${circle} ${name}/${fn?.name} Complete.`, retData?.avgTime);

  return retData;
}

function randomPriceFeedContract() {
  let arr = [
    '0x637d98d08331af95df392cc035629e64987e9ae3', // Oracle Aggregator stEVMOS 30m TWA
    '0x33f1211d64af54a6cb04ef1c8460e914f62c5065', // Forge Oracle stEVMOS 30m TWA
    '0x771D04e14eD5Ba9De8d1561a020907Ef3378cd8F', // Oracle Aggregator WEVMOS 30m TWA
    '0xd928f1e44c1c4a0a4668fe3d61558f6162b99499' //Forge Oracle WEVMOS 30m TWA
  ];

  return arr[Math.floor(Math.random() * arr.length)];
}

function parseTestData(testData) {
  let cleanedRes = [];

  for (let i = 0; i < testData.length; i++) {
    const { name, success, startTime, endTime, total } = testData[i];
    const successRate = ((success / total) * 100).toFixed(2);

    cleanedRes.push([
      name,
      successRate + '%',
      countdown(Math.floor((endTime - startTime) / 1000)),
      (endTime - startTime) / total,
      successRate
    ]);
  }

  return cleanedRes
    .sort((a, b) => {
      // If success rate of both is less than 50%, sort by time
      if (a[4] < 50 && b[4] < 50) {
        return a[3] - b[3];
      }
      // If success rate of a is less than 50%, a should be ranked lower
      if (a[4] < 50) {
        return 1;
      }
      // If success rate of b is less than 50%, b should be ranked lower
      if (b[4] < 50) {
        return -1;
      }
      // If both success rates are above 50%, sort by time
      return a[3] - b[3];
    })
    .map((e, ind) => {
      let arr = e;
      arr[3] = arr[3].toFixed(2) + 'ms';
      return [`#${ind + 1}`].concat(arr.slice(0, 4)); // Exclude successRate from final array
    });
}

// Test Functions
async function getLatestBlockNumber(rpcUrl) {
  try {
    let headers = {
      accept: '*/*',
      'content-type': 'application/json',
    };

    if (rpcUrl.includes('@')) {
      let rUrl = new URL(rpcUrl);
      rpcUrl = rUrl.origin + rUrl.pathname;
      headers['Authorization'] = `Basic ${btoa(
        rUrl.username + ':' + rUrl.password
      )}`;
    }

    let blockNumber = await fetch(rpcUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        id: 44,
        jsonrpc: '2.0',
        method: 'eth_blockNumber',
        params: [],
      }),
    })
      .then((e) => e.json())
      .then((e) => parseInt(e.result, 16)); // Convert hex to decimal

    return blockNumber;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getBalance(rpcUrl, userAddress) {
  try {
    let headers = {
      accept: '*/*',
      'content-type': 'application/json',
    };
    if (rpcUrl.includes('@')) {
      let rUrl = new URL(rpcUrl);
      rpcUrl = rUrl.origin + rUrl.pathname;
      headers['Authorization'] = `Basic ${btoa(
        rUrl.username + ':' + rUrl.password
      )}`;
    }

    let balance = await fetch(rpcUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        id: 44,
        jsonrpc: '2.0',
        method: 'eth_getBalance',
        params: [userAddress, 'latest'],
      }),
    })
      .then((e) => e.json())
      .then((e) => parseFloat(ethers.utils.formatEther(e.result)));

    return balance >= 0;
  } catch (error) {
    return false;
  }
}

// eslint-disable-next-line no-unused-vars
async function getContractValue(rpcUrl, add) {
  try {
    let headers = {
      accept: '*/*',
      'content-type': 'application/json',
    };

    if (rpcUrl.includes('@')) {
      let rUrl = new URL(rpcUrl);
      rpcUrl = rUrl.origin + rUrl.pathname;
      headers['Authorization'] = `Basic ${btoa(
        rUrl.username + ':' + rUrl.password
      )}`;
    }

    let data = await fetch(rpcUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        id: 44,
        jsonrpc: '2.0',
        method: 'eth_call',
        params: [
          {
            data: '0xf368c043000000000000000000000000b5124fa2b2cf92b2d469b249433ba1c96bdf536d',
            to: randomPriceFeedContract(),
          },
          'latest',
        ],
      }),
    })
      .then((e) => e.json())
      .then((e) => e.result);

    return Boolean(data);
  } catch (error) {
    console.log(error)
    return false;
  }
}

async function runMulticall(rpcUrl, add) {
  try {
    let provider = new ethers.providers.JsonRpcProvider(rpcUrl);

    const balances = await getBalancesForEthereumAddress({
      contractAddresses: tokenList.map((e) => e.address),
      ethereumAddress: add,
      formatBalances: true,
      providerOptions: {
        ethersProvider: provider,
      },
    });

    return balances;
  } catch (error) {
    return false;
  }
}


async function testGetLogs(rpcUrl, blocks) {
  try {
    let headers = {
      accept: '*/*',
      'content-type': 'application/json',
    };

    if (rpcUrl.includes('@')) {
      let rUrl = new URL(rpcUrl);
      rpcUrl = rUrl.origin + rUrl.pathname;
      headers['Authorization'] = `Basic ${btoa(
        rUrl.username + ':' + rUrl.password
      )}`;
    }

    let latestBlockNumber = await getLatestBlockNumber(rpcUrl);
    let fromBlock = latestBlockNumber - blocks; 

    let data = await fetch(rpcUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        id: 44,
        jsonrpc: '2.0',
        method: 'eth_getLogs',
        params: [
          {
            topics: [
              '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
            ],
            fromBlock: '0x' + fromBlock.toString(16), // Convert decimal to hex
            toBlock: 'latest',
            address: '0xd4949664cd82660aae99bedc034a0dea8a0bd517',
          },
        ],
      }),
    }).then((e) => e.json());

    if (data?.result) {
      return data?.result.length > 0;
    } else {
      console.log('error', rpcUrl, data?.error?.message);
      return false;
    }
  } catch (error) {
    return false;
  }
}

async function run(args) {
  const date = new Date();
  const dirName = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}_${date.getHours()}-${date.getMinutes()}`;
  const logsPath = path.join(process.cwd(), 'logs');
  const dirPath = path.join(logsPath, dirName);
  let data = '';
  let testInfo = '';
  let fileName = '';
  fs.mkdirSync(dirPath, { recursive: true });

  if (args.telemetry == 'on') {
    try {
      let locData = await getLocationData();
      if (locData.status === 'success') {
        let geo = {
          country: locData.country,
          regionName: locData.regionName,
          city: locData.city,
          timezone: locData.timezone,
          isp: locData.isp,
        };
        console.log(geo);

        testInfo = `🌐 Geolocation Telemetry \n`
        testInfo += `---------------------------\n\n`
        fileName = 'metadata.1.txt'; 
        let filePath = path.join(dirPath, fileName);
        data = testInfo;

        for (let key in geo) {
          data += `${key}: ${geo[key]}\n`;
        }

        fs.writeFileSync(filePath, data);

      } else {
        console.log('⚠️ Error: Failed to get location data');
      }
    } catch (error) {
      console.log('⚠️ Error: Failed to get location data');
      console.log('[Debug] ', error);
    }
  } else if (args.telemetry == 'nolocation') {
    console.log('🚫 No geo-location data.');
  } else {
    console.log('No telemetry - running in private mode.');
  }

  if (args.mode == 'sequential') {

    // TO-DO: fix the ugly 
    let benchInfo = 'Running in Sequential Mode \n';
    console.log(benchInfo);
    
    const testConfigs = {
      debug: {
        limit: 5,
        blocks: 1000,
      },
      fast: {
        limit: 150,
        blocks: 10000,
      },
      normal: {
        limit: 300,
        blocks: 15000,
      },
      full: {
        limit: 500,
        blocks: 30000,
      },
    };
    
    const testConfig = testConfigs[args.size];
    
    if (args.blocks !== undefined) {
      testConfig.blocks = args.blocks;
    }
    if (args.limit !== undefined) {
      testConfig.limit = args.limit;
    }

    console.log(`Running ${args.size} test with limit ${testConfig.limit} and blocks ${testConfig.blocks}`);

    let metaFileName = 'metadata.2.txt'; 
    let metaFilePath = path.join(dirPath, metaFileName);
    testInfo = '⚡ Benchmark Parameters \n'
    testInfo += `---------------------------\n\n`
    data = testInfo;

    for (let key in testConfig) {
      data += `${key}: ${testConfig[key]}\n`;
    }

    // TO-DO: refactor file R/W abomination
    fs.writeFileSync(metaFilePath, data);

    let rpcs = readFileSync(args.rpc, { encoding: 'utf8', flag: 'r' });
    rpcs = JSON.parse(rpcs);

    let testdata = readFileSync(args.data, { encoding: 'utf8', flag: 'r' });
    testdata = JSON.parse(testdata);
    testdata = testdata.map((e) => e?.address);

    if (testConfig.limit < testdata.length) {
      testdata = testdata.slice(0, testConfig.limit);
    }

    let promiseArray = [];

    for (let rpcName in rpcs) {
      const rpcUrl = rpcs[rpcName];
      promiseArray.push(testRunner(rpcName, testdata, getBalance, rpcUrl));
    }

    let results = await Promise.allSettled(promiseArray);
    results = results.map((e) => e?.value);
    results = parseTestData(results);
    // console.log(results); to-do: store results in db

    testInfo = `\n\n✅ Benchmarked \`eth_getBalance\` with ${testdata.length} Addresses \n`
    let fileName = 'eth_getBalance.1.txt';
    let filePath = path.join(dirPath, fileName);
    data = testInfo;
    data += table([tableHeader].concat(results), tableConfig);
    // console.log(results); to-do: store results in db
    fs.writeFileSync(filePath, data);

    console.log(data);

    promiseArray = [];

    for (let rpcName in rpcs) {
      const rpcUrl = rpcs[rpcName];
      promiseArray.push(
        testRunner(rpcName, testdata, getContractValue, rpcUrl)
      );
    }

    results = await Promise.allSettled(promiseArray);
    results = results.map((e) => e?.value);
    results = parseTestData(results);

    fileName = 'eth_call.2.txt';
    filePath = path.join(dirPath, fileName);
    testInfo = `\n\n✅ Benchmarked \`eth_call\` with ${testdata.length} Addresses \n`;
    data = testInfo;
    data += table([tableHeader].concat(results), tableConfig);

    fs.writeFileSync(filePath, data);

    console.log(data);

    promiseArray = [];
    for (let rpcName in rpcs) {
      const rpcUrl = rpcs[rpcName];
      promiseArray.push(testRunner2(rpcName, testGetLogs, rpcUrl, testConfig.blocks));
  }

    results = await Promise.allSettled(promiseArray);
    results = results.map((e) => e?.value);
    results = parseTestData(results);
    // console.log(results) to-do: store results in db
    fileName = 'eth_getLogs.3.txt';
    filePath = path.join(dirPath, fileName);
    testInfo = `\n\n✅ Benchmarked 'eth_getLogs' with a look-back of ${testConfig.blocks} blocks \n`
    data = testInfo
    data += table([tableHeader].concat(results), tableConfig);

    fs.writeFileSync(filePath, data);

    console.log(data);

    promiseArray = [];

    for (let rpcName in rpcs) {
      const rpcUrl = rpcs[rpcName];
      promiseArray.push(testRunner(rpcName, testdata, runMulticall, rpcUrl));
    }

    results = await Promise.allSettled(promiseArray);
    results = results.map((e) => e?.value);
    results = parseTestData(results);

    fileName = 'eth__multicall.4.txt'; 
    filePath = path.join(dirPath, fileName);

    testInfo = `\n\n✅ Benchmarked 'multicall' with ${tokenList.length} Tokens \n`
    data = testInfo;
    data += table([tableHeader].concat(results), tableConfig);
    fs.writeFileSync(filePath, data);

    console.log(data);

    mergeLogFiles(dirPath, 'benchmark_results.txt');
    mergeMetaFiles(dirPath, 'benchmark_data.txt', 'benchmark_results.txt');


  } else if (args.mode == 'parallel' || args.mode == 'proxy') {
    // TO-DO: js-workers or multithreads?
  }
}

yargs(hideBin(process.argv))
  .scriptName('benchmark')
  .usage('$0 <cmd> [args]')
  .command(
    'run',
    'Evmos RPC Benchmark',
    (yargs) => {
      yargs.positional('mode', {
        alias: 'm',
        describe: 'Test Mode - Refactor in Progress',
        choices: ['sequential', 'parallel', 'proxy'],
        default: 'sequential',
      });
      yargs.positional('rpc', {
        alias: 'r',
        type: 'string',
        default: './data/rpcs.json',
        describe: 'RPC List File',
      });
      yargs.positional('size', {
        alias: 's',
        describe: 'Benchmark Test Size',
        choices: ['debug', 'fast', 'normal', 'full'],
        default: 'fast',
      });
      yargs.positional('data', {
        alias: 'd',
        type: 'string',
        default: './data/testdata.json',
        describe: 'Addresses Test Data',
      });
      yargs.positional('limit', {
        alias: 'l',
        type: 'number',
        describe: 'Override: address check limit',
      });      
      yargs.positional('blocks', {
        alias: 'b',
        type: 'number',
        describe: 'Override: blocks to look back',
      });
      yargs.positional('telemetry', {
        alias: 't',
        choices: ['on', 'off', 'nolocation', 'manual'],
        default: 'on',
        describe: 'Report geo-location and share benchmark data',
      });
    },
    function (argv) {
      if (argv._[0] === 'run') run(argv);
    }
  )
  .help().argv;
