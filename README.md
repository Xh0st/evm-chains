# updated

Updated with the latest chain data from [ethereum-lists/chains](https://github.com/ethereum-lists/chains)

# evm-chains

Package to query chain data from [ethereum-lists/chains](https://github.com/ethereum-lists/chains)

## Install

```sh
npm i @zh0st/evm-chains

#or

yarn add evm-chains
```

## JS 

```javascript
const evmChains = window.evmChains;
const chainData = evmChains.getChain(1);
const chainName = chainData.name;
const chainRPC = chainData.rpc;
const chainSymbol = chainData.nativeCurrency.symbol;
```

## API

```typescript
function getAllChains(): IChainData[];
function getChain(chainId: number): IChainData;
function getChainByChainId(chainId: number): IChainData;
function getChainByKeyValue(key: string, value: any): IChainData;
function getChainByNetworkId(networkId: number): number;
function convertNetworkIdToChainId(networkId: number): number;
function convertChainIdToNetworkId(chainId: number): number;
```

## Types

```typescript
export interface IChainData {
  name: string;
  chain: string;
  icon?: string;
  rpc: string[];
  faucets?: string[];
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  infoURL: string;
  shortName: string;
  chainId: number;
  networkId: number;
  slip44?: number;
  ens?: {
    registry: string;
  };
  explorers?: {
    name?: string;
    url?: string;
    standard?: string;
    icon?: string;
  };
  title?: string;
  status?: string;
  redFlags?: string[];
}

```

## Data Source

[https://github.com/ethereum-lists/chains](https://github.com/ethereum-lists/chains)
