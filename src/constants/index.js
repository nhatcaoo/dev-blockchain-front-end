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
export const SECOND_PER_BLOCK = {
  [ChainId.MAINNET]: undefined,
  [ChainId.ROPSTEN]: undefined,
  [ChainId.RINKEBY]: 14,
  [ChainId.BSCTESTNET]: 14,
}

export const OWNER_NFT = {
  [ChainId.MAINNET]: undefined,
  [ChainId.ROPSTEN]: undefined,
  [ChainId.RINKEBY]: undefined,
  [ChainId.BSCTESTNET]: '0x090030D40A193a5966014c2D0B014F21459cb33e',
}

export const OWNER_NFT_MARKET = {
  [ChainId.MAINNET]: undefined,
  [ChainId.ROPSTEN]: undefined,
  [ChainId.RINKEBY]: undefined,
  [ChainId.BSCTESTNET]: '0x090030D40A193a5966014c2D0B014F21459cb33e',
}
export const EXPLORER_TX = {
  [ChainId.MAINNET]: undefined,
  [ChainId.ROPSTEN]: undefined,
  [ChainId.RINKEBY]: 'https://rinkeby.etherscan.io/tx/',
}
export const BLOCK_COUNT_DOWN = {
  [ChainId.MAINNET]: undefined,
  [ChainId.ROPSTEN]: undefined,
  [ChainId.RINKEBY]: 'https://rinkeby.etherscan.io/block/countdown/',
}



export const SECONDS_TIME_MAX_SELL = 3600 * 24 * 7 * 2 // 2 weeks

export const LISTING_PRICE = 0.00001 // Ether

export const ITEMS_PER_PAGE = 8

export const BLOCK_NUM_FOR_BUY = 5300000
