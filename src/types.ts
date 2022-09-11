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
}
