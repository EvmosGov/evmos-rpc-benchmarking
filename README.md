# Evmos JSON-RPC Benchmarking

[<img src="https://camo.githubusercontent.com/26d13d81a05e37974313ed3a612ae9d43b8c443f0930906748e51bf2d2abe885/68747470733a2f2f776562636f6e7461696e6572732e696f2f696d672f7468656d652f776562636f6e7461696e65725f6170692d6c6f676f2d6461726b2d626c61636b77686974652e737667" height="30px" style="inline; margin-right:4px; background:#333333;" />](https://webcontainers.io/) 
[<img src="https://camo.githubusercontent.com/5d03c86f6a75f7cbe80d135d9162fbf6dc46a31253cf30a8e9bb8279b4d574d3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547769747465722d3144413146323f7374796c653d666f722d7468652d6261646765266c6f676f3d74776974746572266c6f676f436f6c6f723d7768697465" height="28" style="inline; margin-right:4px" />](https://twitter.com/lpx_404) [<img src="https://img.shields.io/badge/Evmos-DAO-orange?style=for-the-badge&labelColor=%23333333&color=%23ed4e33" height="28" style="inline; margin-right:4px" />](https://evmosdao.org) [<img src="https://img.shields.io/badge/Shame_On-You_BD-blue?style=for-the-badge&labelColor=%23666666" height="28" style="inline; margin-right:4px" />](https://www.youtube.com/watch?v=dQw4w9WgXcQ)


This project was created in part to allow developers to see which endpoints lack support / struggle in certain areas, and to recognize the nodes that are providing superb service.

Because response times aren't everything when it comes to RPC endpoints, as you'll see in the preliminary tests 😉

The following essential functions to the EVM and Solidity-based development are rigorously tested to give a clearer picture:

- Bulk account querying
- Smart contract read ops
- Current and old indexed logs reading
- Bulk token querying / multicall capabilities


### 🌋 Lava Public Endpoints

The decentralized public endpoints by Lava have been performing incredibly well, especially for lighter loads. Lava is going places! Absolutely excited to see what the future holds for Lava - this is game-changing not only for Evmos but for the Web3 space in general. 

---

<p align="center" style="font-weight:bold;margin-top:2rem;margin-bottom:2rem;"> 
  <samp>
    「 Providers and Validators 」
    <br></samp>
    <a href="https://github.com/LPX55/evmos-rpc-benchmarking/blob/master/data/rpcs.json">
    <img src="https://img.shields.io/badge/ADD_YOUR_-ENDPOINT-red?style=for-the-badge&logo=AddThis&color=%23ed4e33"></a>
</p>

---
## Prelimary Benchmark Results

### 1. Ultralight Load

```
🌐 Geolocation Telemetry 
---------------------------

country: South Korea
regionName: Seoul
city: Seoul
timezone: Asia/Seoul

⚡ Benchmark Parameters 
---------------------------

limit: 5
blocks: 1000
```

```
✅ Benchmarked `eth_getBalance` with 5 Addresses 
╔══════╤══════════════╤══════════════╤══════════════╤══════════════╗
║ Rank │     Name     │  Success %   │  Total Time  │   Avg/Req    ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #1  │   BlastAPI   │   100.00%    │      3s      │   743.20ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #2  │ Lava Public  │   100.00%    │      3s      │   746.60ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #3  │ Lava Proxy 2 │   100.00%    │      4s      │   807.80ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #4  │  PublicNode  │   100.00%    │      4s      │   808.60ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #5  │ Lava Proxy 3 │   100.00%    │      4s      │   825.40ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #6  │  NodeStake   │   100.00%    │      4s      │   913.80ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #7  │  OnFinality  │   100.00%    │      5s      │  1198.80ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #8  │ Silknodes.io │   100.00%    │      7s      │  1419.80ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #9  │   Notional   │    0.00%     │      3s      │   787.40ms   ║
╚══════╧══════════════╧══════════════╧══════════════╧══════════════╝


✅ Benchmarked `eth_call` with 5 Addresses 
╔══════╤══════════════╤══════════════╤══════════════╤══════════════╗
║ Rank │     Name     │  Success %   │  Total Time  │   Avg/Req    ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #1  │  PublicNode  │   100.00%    │      2s      │   533.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #2  │   BlastAPI   │   100.00%    │      3s      │   623.20ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #3  │ Lava Public  │   100.00%    │      3s      │   735.80ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #4  │ Lava Proxy 3 │   100.00%    │      4s      │   802.60ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #5  │  OnFinality  │   100.00%    │      4s      │   855.60ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #6  │ Lava Proxy 2 │   100.00%    │      4s      │   870.60ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #7  │ Silknodes.io │   100.00%    │      4s      │   870.60ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #8  │  NodeStake   │   100.00%    │      4s      │   972.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #9  │   Notional   │    0.00%     │      3s      │   782.80ms   ║
╚══════╧══════════════╧══════════════╧══════════════╧══════════════╝


✅ Benchmarked 'eth_getLogs' with a look-back of 1000 blocks 
╔══════╤══════════════╤══════════════╤══════════════╤══════════════╗
║ Rank │     Name     │  Success %   │  Total Time  │   Avg/Req    ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #1  │ Lava Proxy 2 │   100.00%    │      1s      │  1838.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #2  │ Lava Public  │   100.00%    │      1s      │  1851.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #3  │ Lava Proxy 3 │   100.00%    │      1s      │  1948.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #4  │  OnFinality  │   100.00%    │      1s      │  1971.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #5  │  NodeStake   │   100.00%    │      2s      │  2172.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #6  │ Silknodes.io │   100.00%    │      2s      │  2981.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #7  │  PublicNode  │    0.00%     │      0s      │   914.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #8  │   BlastAPI   │    0.00%     │      1s      │  1033.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #9  │   Notional   │    0.00%     │      1s      │  1545.00ms   ║
╚══════╧══════════════╧══════════════╧══════════════╧══════════════╝


✅ Benchmarked 'multicall' with 41 Tokens 
╔══════╤══════════════╤══════════════╤══════════════╤══════════════╗
║ Rank │     Name     │  Success %   │  Total Time  │   Avg/Req    ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #1  │  PublicNode  │   100.00%    │     13s      │  2661.20ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #2  │   BlastAPI   │   100.00%    │     18s      │  3617.80ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #3  │ Lava Proxy 2 │   100.00%    │     19s      │  3904.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #4  │ Lava Public  │   100.00%    │     20s      │  4140.80ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #5  │ Lava Proxy 3 │   100.00%    │     21s      │  4209.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #6  │  NodeStake   │   100.00%    │     21s      │  4345.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #7  │  OnFinality  │   100.00%    │     22s      │  4557.40ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #8  │ Silknodes.io │   100.00%    │     37s      │  7429.80ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #9  │   Notional   │    0.00%     │     15s      │  3126.80ms   ║
╚══════╧══════════════╧══════════════╧══════════════╧══════════════╝
```

### II. Light Load

```
🌐 Geolocation Telemetry 
---------------------------

country: United States
regionName: Virginia
city: Boydton
timezone: America/New_York
isp: Microsoft

⚡ Benchmark Parameters 
---------------------------

limit: 150
blocks: 10000
```

```
✅ Benchmarked `eth_getBalance` with 150 Addresses 
╔══════╤══════════════╤══════════════╤══════════════╤══════════════╗
║ Rank │     Name     │  Success %   │  Total Time  │   Avg/Req    ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #1  │  PublicNode  │   100.00%    │     13s      │   92.08ms    ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #2  │   BlastAPI   │   100.00%    │     21s      │   145.62ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #3  │ Lava Public  │   100.00%    │     30s      │   204.38ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #4  │ Silknodes.io │   100.00%    │     35s      │   235.37ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #5  │  NodeStake   │   100.00%    │     50s      │   334.97ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #6  │   Notional   │   100.00%    │     57s      │   383.96ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #7  │  OnFinality  │   100.00%    │    1m 2s     │   418.51ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #8  │ Lava Proxy 2 │   100.00%    │    1m 49s    │   731.27ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #9  │ Lava Proxy 3 │   100.00%    │    1m 59s    │   795.14ms   ║
╚══════╧══════════════╧══════════════╧══════════════╧══════════════╝

✅ Benchmarked `eth_call` with 150 Addresses 
╔══════╤══════════════╤══════════════╤══════════════╤══════════════╗
║ Rank │     Name     │  Success %   │  Total Time  │   Avg/Req    ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #1  │  PublicNode  │   100.00%    │     16s      │   107.30ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #2  │   BlastAPI   │   100.00%    │     20s      │   138.79ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #3  │ Lava Public  │   100.00%    │     30s      │   200.05ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #4  │ Silknodes.io │   100.00%    │     35s      │   239.25ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #5  │  NodeStake   │   100.00%    │     43s      │   289.04ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #6  │   Notional   │    75.33%    │     52s      │   352.71ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #7  │  OnFinality  │   100.00%    │     53s      │   356.36ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #8  │ Lava Proxy 2 │   100.00%    │    1m 42s    │   685.21ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #9  │ Lava Proxy 3 │   100.00%    │    1m 57s    │   784.74ms   ║
╚══════╧══════════════╧══════════════╧══════════════╧══════════════╝

✅ Benchmarked 'eth_getLogs' with a look-back of 10000 blocks 
╔══════╤══════════════╤══════════════╤══════════════╤══════════════╗
║ Rank │     Name     │  Success %   │  Total Time  │   Avg/Req    ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #1  │ Lava Public  │   100.00%    │      5s      │  5024.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #2  │ Lava Proxy 2 │   100.00%    │      5s      │  5190.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #3  │ Lava Proxy 3 │   100.00%    │      5s      │  5212.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #4  │  NodeStake   │   100.00%    │      9s      │  9322.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #5  │ Silknodes.io │   100.00%    │     21s      │  21734.00ms  ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #6  │  PublicNode  │    0.00%     │      0s      │   188.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #7  │   BlastAPI   │    0.00%     │      0s      │   203.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #8  │   Notional   │    0.00%     │      0s      │   702.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #9  │  OnFinality  │    0.00%     │      5s      │  5623.00ms   ║
╚══════╧══════════════╧══════════════╧══════════════╧══════════════╝

✅ Benchmarked 'multicall' with 41 Tokens 
╔══════╤══════════════╤══════════════╤══════════════╤══════════════╗
║ Rank │     Name     │  Success %   │  Total Time  │   Avg/Req    ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #1  │  PublicNode  │   100.00%    │    1m 48s    │   722.05ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #2  │   BlastAPI   │   100.00%    │    2m 56s    │  1173.41ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #3  │ Lava Public  │   100.00%    │    3m 9s     │  1262.22ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #4  │ Silknodes.io │   100.00%    │    4m 20s    │  1735.52ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #5  │  NodeStake   │   100.00%    │    4m 38s    │  1856.20ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #6  │  OnFinality  │   100.00%    │    5m 22s    │  2150.05ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #7  │   Notional   │   100.00%    │    7m 24s    │  2963.06ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #8  │ Lava Proxy 2 │   100.00%    │   10m 47s    │  4315.30ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #9  │ Lava Proxy 3 │   100.00%    │   11m 10s    │  4470.06ms   ║
╚══════╧══════════════╧══════════════╧══════════════╧══════════════╝
```

### III. Normal Loads


```
🌐 Geolocation Telemetry 
---------------------------

country: Japan
regionName: Tokyo
city: Tokyo
timezone: Asia/Tokyo
isp: Akamai Technologies

⚡ Benchmark Parameters 
---------------------------

limit: 300
blocks: 15000
```

```
✅ Benchmarked `eth_getBalance` with 300 Addresses 
╔══════╤══════════════╤══════════════╤══════════════╤══════════════╗
║ Rank │     Name     │  Success %   │  Total Time  │   Avg/Req    ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #1  │   BlastAPI   │   100.00%    │    2m 33s    │   511.62ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #2  │  PublicNode  │   100.00%    │    2m 39s    │   532.66ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #3  │ Lava Public  │   100.00%    │    3m 53s    │   779.17ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #4  │ Lava Proxy 2 │   100.00%    │    4m 30s    │   900.12ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #5  │  OnFinality  │   100.00%    │    4m 34s    │   914.10ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #6  │ Lava Proxy 3 │   100.00%    │    4m 47s    │   959.80ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #7  │  NodeStake   │   100.00%    │    5m 1s     │  1004.87ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #8  │ Silknodes.io │   100.00%    │    5m 39s    │  1132.97ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #9  │   Notional   │    0.00%     │    4m 56s    │   989.75ms   ║
╚══════╧══════════════╧══════════════╧══════════════╧══════════════╝

✅ Benchmarked `eth_call` with 300 Addresses 
╔══════╤══════════════╤══════════════╤══════════════╤══════════════╗
║ Rank │     Name     │  Success %   │  Total Time  │   Avg/Req    ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #1  │  PublicNode  │   100.00%    │    1m 43s    │   345.55ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #2  │   BlastAPI   │   100.00%    │    2m 33s    │   510.71ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #3  │ Lava Proxy 2 │   100.00%    │    4m 14s    │   848.78ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #4  │  OnFinality  │   100.00%    │    4m 20s    │   869.12ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #5  │ Lava Public  │   100.00%    │    4m 23s    │   877.10ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #6  │ Lava Proxy 3 │   100.00%    │    4m 51s    │   971.52ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #7  │  NodeStake   │   100.00%    │    5m 3s     │  1012.94ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #8  │ Silknodes.io │   100.00%    │    5m 30s    │  1103.15ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #9  │   Notional   │    0.00%     │    4m 54s    │   980.11ms   ║
╚══════╧══════════════╧══════════════╧══════════════╧══════════════╝

✅ Benchmarked 'eth_getLogs' with a look-back of 15000 blocks 
╔══════╤══════════════╤══════════════╤══════════════╤══════════════╗
║ Rank │     Name     │  Success %   │  Total Time  │   Avg/Req    ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #1  │  PublicNode  │    0.00%     │      0s      │   671.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #2  │   BlastAPI   │    0.00%     │      1s      │  1254.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #3  │ Lava Public  │    0.00%     │      1s      │  1569.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #4  │ Silknodes.io │    0.00%     │      1s      │  1632.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #5  │   Notional   │    0.00%     │      1s      │  1959.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #6  │  OnFinality  │    0.00%     │      2s      │  2042.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #7  │ Lava Proxy 2 │    0.00%     │      2s      │  2099.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #8  │ Lava Proxy 3 │    0.00%     │      2s      │  2113.00ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #9  │  NodeStake   │    0.00%     │      2s      │  2137.00ms   ║
╚══════╧══════════════╧══════════════╧══════════════╧══════════════╝

✅ Benchmarked 'multicall' with 41 Tokens 
╔══════╤══════════════╤══════════════╤══════════════╤══════════════╗
║ Rank │     Name     │  Success %   │  Total Time  │   Avg/Req    ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #1  │  PublicNode  │   100.00%    │   10m 15s    │  2050.33ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #2  │   BlastAPI   │   100.00%    │   14m 36s    │  2922.54ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #3  │ Lava Public  │   100.00%    │   23m 19s    │  4664.69ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #4  │  OnFinality  │   100.00%    │   24m 21s    │  4872.05ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #5  │   Notional   │    83.67%    │   25m 21s    │  5071.10ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #6  │ Lava Proxy 2 │   100.00%    │   25m 37s    │  5124.38ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #7  │ Lava Proxy 3 │   100.00%    │   25m 37s    │  5124.43ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #8  │  NodeStake   │   100.00%    │   27m 14s    │  5447.58ms   ║
╟──────┼──────────────┼──────────────┼──────────────┼──────────────╢
║  #9  │ Silknodes.io │   100.00%    │   31m 25s    │  6284.81ms   ║
╚══════╧══════════════╧══════════════╧══════════════╧══════════════╝
```

## Key-Takeaways

- Response times are not always the best metric to measure RPC performance; also need a bigger sample size for public view, though I have personally conducted hundreds in the past 24 hours.
- Some endpoints appears to have sacrified key RPC functions for a boost in speed (unsure if causation or coincidence)
- Certain endpoints are clearly better for developers while others may suit regular end-users just fine
- All endpoints are struggling with older blocks, likely because of the last upgrade. Seeing the most inconsistency in this area.
- Notional was the only endpoint that ended up rate-limiting me (which I don't blame honestly)
- Lava decentralized nodes took 3x my abuse yet managed to remain arguably the most consistent and reliable. Power in numbers!
- In hindsight, I should have been keeping averages of all the benchmarks while developing.

**tl;dr** - just use Lava if you want a smooth experience. I swear I am not on their payroll. But if they want to pay me, they know where to find me 😉  Keep in mind that the network is still very young -- it can either improve tremendously, or deterioriate into BD / run into potential problems in the future.

- I would have given Blast API a huge shoutout... but where my logs man?
- PublicNode was underperforming the entire night but suddenly decided to show up for the benchmark that was going public 🤷‍♂️ Make of that what you will.

---

## Running a Benchmark Locally

1. git clone repo > cd to folder
2. `yarn install` or just `yarn`
3. `yarn benchmark`

Alternatively:

- `yarn benchmark:debug` (quick 15 sec run)
- `yarn benchmark:fast`
- `yarn benchmark:full` (warning: takes a while)

---

## CLI Args

- ~~`mode` (`-m`): This argument sets the benchmark mode~~
  - ~~`sequential`: This is the default mode.~~
  - ~~`parallel`~~
  - ~~`proxy`~~

(Refactor in progress)

- `rpc` (`-r`): This argument specifies the RPC List File. The default value is `./data/rpcs.json`. Currently contains some proxy servers that will most likely not be up for much longer. 

- `size` (`-s`): This argument sets the benchmark test size. The following options are available as default:
  - `debug`
  - `fast`: (default)
  - `normal`
  - `full`

Fully customizeable in the main file.

- `data` (`-d`): This argument specifies the address list data file - scraped through Forge, Diffusion, and related subgraphs to hit actual Evmos addresses. The default value is `./data/testdata.json`.

- `limit` (`-l`): Allows you to override the address check limit. (int)

- `blocks` (`-b`): Allows you to override the number of blocks to look back. (int)

- ~~`telemetry` (`-t`): This argument controls the reporting of location and benchmark data. It can be one of the following:~~
  - ~~`on`: This is the default value.~~
  - ~~`off`~~
  - ~~`nolocation`~~
  - ~~`manual`~~

Anonymized geo-location data is supported but not yet implemented. A database / repository of benchmarks will be launched for record-keeping and performance tracking *soon*™️.

## Benchmark From Your Browser

No technical knowledge necessary, just run in your *modern* web browser. [WebContainer](https://webcontainers.io/) API now supports npm and yarn (plus more 👀) natively in your browser. Warning: do not attempt on a potato pc or low RAM.

[<img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" height="28" style="inline; margin-right:4px" />](https://stackblitz.com/~/github.com/EvmosGov/evmos-rpc-benchmarking) 


---

## Contributing

- **Add your JSONRPC Endpoint** - Edit the .json file in `/data/rpcs.json` and create a pull request. Once github actions are set up it should trigger a fresh benchmark.
- **Submit your benchmarks** - User contribution for benchmark data is highly appreciated! Simply take the files from the `log` folder and drop it in this repository; lastly, make a pull request.
- **Code** - Yes please. We need.

---

## License - MIT
