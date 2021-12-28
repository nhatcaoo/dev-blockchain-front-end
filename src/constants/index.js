import NFT_ABI from './abis/NFT.json'
import NFT_MARKET_ABI from './abis/NFT_Market.json'
import STAKING from './abis/Staking.json'

export const ChainId = {
  MAINNET: 1,
  ROPSTEN: 3,
  RINKEBY: 4,
  BSCTESTNET: 97,
}

export const ABI = {
  ntf: NFT_ABI,
  ntfMarket: NFT_MARKET_ABI,
  staking: STAKING,
}

export const NFT_ADDRESS = {
  [ChainId.MAINNET]: undefined,
  [ChainId.ROPSTEN]: undefined,
  [ChainId.RINKEBY]: undefined,
  [ChainId.BSCTESTNET]: '0x1970c7cF311F22F9d90e15CdEaf2E6Fd0536CACC',
}
export const NFT_MARKET_ADDRESS = {
  [ChainId.MAINNET]: undefined,
  [ChainId.ROPSTEN]: undefined,
  [ChainId.RINKEBY]: undefined,
  [ChainId.BSCTESTNET]: '0x6DDc4fC8658AC441Ea57fBE8A5c063f11976B5ff',
}
export const STAKING_ADDRESS = {
  [ChainId.MAINNET]: undefined,
  [ChainId.ROPSTEN]: undefined,
  [ChainId.RINKEBY]: undefined,
  [ChainId.BSCTESTNET]: '0xD7c180dC1A2b828B3fFC3C22F1F0f43D77438BbD',
}

export const LISTING_PRICE = 0.00001 // Ether

export const ITEMS_PER_PAGE = 8

export const BLOCK_NUM_FOR_BUY = 5300000
