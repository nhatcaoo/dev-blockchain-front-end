import { useCallback } from 'react'
import useNtfContract from './useNtfContract'
import useNtfMarketContract from './useNtfMarketContract'
import { useSelector } from 'react-redux'
import { LISTING_PRICE, NFT_ADDRESS, NFT_MARKET_ADDRESS } from '../constants'
import { ethers } from 'ethers'

const useCancel = () => {
  const nftContract = useNtfContract()
  const marketContract = useNtfMarketContract()
  const chainId = useSelector((state) => state.provider.chainId)
  return useCallback(
    async (id) => {
      try {
        const borrowTx = await marketContract.cancelMartketItem(
          id
        )
        return true
      } catch (e) {
        console.error(e)
        return false
      }
    },
    [chainId, nftContract],
  )
}

export default useCancel
