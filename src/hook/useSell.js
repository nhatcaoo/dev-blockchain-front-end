import { useCallback } from 'react'
import useNtfContract from './useNtfContract'
import useNtfMarketContract from './useNtfMarketContract'
import { useSelector } from 'react-redux'
import { LISTING_PRICE, NFT_ADDRESS, NFT_MARKET_ADDRESS } from '../constants'
import { ethers } from 'ethers'

const useSellToken = () => {
  const marketContract = useNtfMarketContract()
  const chainId = useSelector((state) => state.provider.chainId)
  return useCallback(
    async (id, price) => {
      try {
        const borrowTx = await marketContract.createMarketItem(
          NFT_ADDRESS[chainId],
          id,
          ethers.utils.parseUnits(price.toString(), 'ether').toString(),
        )
        return true
      } catch (e) {
        console.error(e)
        return false
      }
    },
    [chainId, marketContract],
  )
}

export default useSellToken
