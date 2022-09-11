export interface IChainData {
  name: string;
  chain: string;
  icon: string;
  rpc: string[];
  faucets: string[];
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  infoURL: string;
  shortName: string;
  chainId: number;
  networkId: number;
  ens: {
    registry: string;
  };
  explorers: {
    name: string;
    url: string;
    standard: string;
  };
}
