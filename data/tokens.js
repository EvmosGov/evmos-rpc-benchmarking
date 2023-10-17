const tokenList = [
  {
    "chainId": 9001,
    "address": "0xD4949664cD82660AaE99bEdc034a0deA8A0bd517",
    "symbol": "WEVMOS",
    "name": "WEVMOS",
    "decimals": 18
  },
  {
    "chainId": 9001,
    "address": "0x15C3Eb3B621d1Bff62CbA1c9536B7c1AE9149b57",
    "symbol": "axlUSDC",
    "name": "USD Coin by Axelar",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0xC5e00D3b04563950941f7137B5AfA3a534F0D6d6",
    "symbol": "ATOM",
    "name": "Cosmos Hub",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0x94c23eE865E3c963A56263d0ce2CBF5C6cE7ce2d",
    "symbol": "AXL",
    "name": "Axelar",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0x4A2a90D444DbB7163B5861b772f882BbA394Ca67",
    "symbol": "axlDAI",
    "name": "DAI by Axelar",
    "decimals": 18
  },
  {
    "chainId": 9001,
    "address": "0xc76A204AEA61a68a3B1f97B8E70286CD42B020D2",
    "symbol": "axlPEPE",
    "name": "Pepe by Axelar",
    "decimals": 18
  },
  {
    "chainId": 9001,
    "address": "0xE60CE2dfa6D4Ad37Ade1dcB7aC4D6C3A093b3A7E",
    "symbol": "axlRETH",
    "name": "Rocket Pool staked ETH by Axelar",
    "decimals": 18
  },
  {
    "chainId": 9001,
    "address": "0xe01C6D4987Fc8dCE22988DADa92d56dA701d0Fe0",
    "symbol": "axlUSDT",
    "name": "USDT by Axelar",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0xF5b24c0093b65408ACE53df7ce86a02448d53b25",
    "symbol": "axlWBTC",
    "name": "Wrapped Bitcoin on Axelar",
    "decimals": 8
  },
  {
    "chainId": 9001,
    "address": "0x50dE24B3f0B3136C50FA8A3B8ebc8BD80a269ce5",
    "symbol": "axlWETH",
    "name": "Wrapped Ether on Axelar",
    "decimals": 18
  },
  {
    "chainId": 9001,
    "address": "0xA2A4B12EF81E7A26C5a1E0be9340b1972F85E44A",
    "symbol": "axlWSTETH",
    "name": "Lido staked ETH by Axelar",
    "decimals": 18
  },
  {
    "chainId": 9001,
    "address": "0xF0965c8f0755CF080a61C91EDd6707F0532c8fE7",
    "symbol": "CMDX",
    "name": "Comdex",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0x9d6F2a9fDB32708e1AC07788cc29D6125ac73027",
    "symbol": "CMST",
    "name": "CMST Stablecoin of Harbor protocol",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0x628A41754edfAFB491FEe6a1F397590B9013E01B",
    "symbol": "CRE",
    "name": "Crescent Network",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0x5db67696C3c088DfBf588d3dd849f44266ff0ffa",
    "symbol": "EEUR",
    "name": "e-Money EUR",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0xd567B3d7B8FE3C79a1AD8dA978812cfC4Fa05e75",
    "symbol": "gDAI",
    "name": "Dai Stablecoin",
    "decimals": 18
  },
  {
    "chainId": 9001,
    "address": "0x80b5a32E4F032B2a058b4F29EC95EEfEEB87aDcd",
    "symbol": "GRAV",
    "name": "Graviton",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0xecEEEfCEE421D8062EF8d6b4D814efe4dc898265",
    "symbol": "gUSDT",
    "name": "Tether USD",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0x1D54EcB8583Ca25895c512A8308389fFD581F9c9",
    "symbol": "gWBTC",
    "name": "Wrapped Bitcoin",
    "decimals": 8
  },
  {
    "chainId": 9001,
    "address": "0xc03345448969Dd8C00e9E4A85d2d9722d093aF8E",
    "symbol": "gWETH",
    "name": "Wrapped Ether",
    "decimals": 18
  },
  {
    "chainId": 9001,
    "address": "0x3515F25AB7637adcF1b69F4D384ed5936B83431F",
    "symbol": "INJ",
    "name": "Injective",
    "decimals": 18
  },
  {
    "chainId": 9001,
    "address": "0x3452e23F9c4cC62c70B7ADAd699B264AF3549C19",
    "symbol": "JUNO",
    "name": "Juno",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0x655ecB57432CC1370f65e5dc2309588b71b473A9",
    "symbol": "NEOK",
    "name": "NEOKingdom DAO",
    "decimals": 18
  },
  {
    "chainId": 9001,
    "address": "0xFA3C22C069B9556A4B2f7EcE1Ee3B467909f4864",
    "symbol": "OSMO",
    "name": "Osmosis",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0x4ad26064831ECE180B179a4C02Dc97940AA77B17",
    "symbol": "qATOM",
    "name": "Quicksilver Liquid Staked ATOM",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0xf55454383cEEFB1B5e889E59542352B1b928707d",
    "symbol": "QCK",
    "name": "Quicksilver",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0x616E00909730f7dE9Afd97Dc71981f6d28e2B0ca",
    "symbol": "qOSMO",
    "name": "Quicksilver Liquid Staked OSMO",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0x0CE35b0D42608Ca54Eb7bcc8044f7087C18E7717",
    "symbol": "REGEN",
    "name": "Regen Network",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0x5aD523d94Efb56C400941eb6F34393b84c75ba39",
    "symbol": "STARS",
    "name": "Stargaze",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0xB5124FA2b2cF92B2D469b249433BA1c96BDF536D",
    "symbol": "stATOM",
    "name": "Stride Staked Atom",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0x2C68D1d6aB986Ff4640b51e1F14C716a076E44C4",
    "symbol": "stEVMOS",
    "name": "Stride Staked Evmos",
    "decimals": 18
  },
  {
    "chainId": 9001,
    "address": "0x786744d8B40ee154FA4a74153c4d33dF09aBf015",
    "symbol": "stINJ",
    "name": "Stride Staked Inj",
    "decimals": 18
  },
  {
    "chainId": 9001,
    "address": "0xc71aAf8e486e3F33841BB56Ca3FD2aC3fa8D29a8",
    "symbol": "stJUNO",
    "name": "Stride Staked Juno",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0xD32eB974468ed767338533842D2D4Cc90B9BAb46",
    "symbol": "stOSMO",
    "name": "Stride Staked Osmo",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0x8FA78CEB7F04118Ec6d06AaC37Ca854691d8e963",
    "symbol": "STRD",
    "name": "Stride",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0xc7e56EEc629D3728fE41baCa2f6BFc502096f94E",
    "symbol": "stSTARS",
    "name": "Stride Staked Stars",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0x98fAFD9F714CE0B4bB2870527076F2F314aAed82",
    "symbol": "TASHI",
    "name": "Tashi",
    "decimals": 18
  },
  {
    "chainId": 9001,
    "address": "0x205CF44075E77A3543abC690437F3b2819bc450a",
    "symbol": "TORI",
    "name": "Teritori",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0x5FD55A1B9FC24967C4dB09C513C3BA0DFa7FF687",
    "symbol": "USDC.grv",
    "name": "USD Coin",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0xB8f812B5943ab3BF941D5D4F1de90A4b326c5d8f",
    "symbol": "USDT",
    "name": "USDT on Kava",
    "decimals": 6
  },
  {
    "chainId": 9001,
    "address": "0x13974cf36984216C90D1F4FC815C156092feA396",
    "symbol": "USK",
    "name": "USK Stablecoin of Kujira",
    "decimals": 6
  }
]
export { tokenList };
