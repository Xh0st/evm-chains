import * as evmChains from '../src';

describe('evm-chains', () => {
  it('getChain', () => {
    const chain = evmChains.getChain(1);
    expect(chain.name).toEqual('Ethereum Mainnet');
    expect(chain.chainId).toEqual(1);
    expect(chain.nativeCurrency.name).toEqual('Ether');
    expect(chain.nativeCurrency.symbol).toEqual('ETH');
    expect(chain.nativeCurrency.decimals).toEqual(18);
  });
});
