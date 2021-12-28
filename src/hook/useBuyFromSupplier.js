import { useCallback } from 'react'
import useNtfContract from './useNtfContract'
import useNtfMarketContract from './useNtfMarketContract'
import { useSelector } from 'react-redux'
import { LISTING_PRICE, NFT_ADDRESS, NFT_MARKET_ADDRESS } from '../constants'
import { ethers } from 'ethers'

const useBuyFromSupplier = () => {
  const nftContract = useNtfContract()
  const chainId = useSelector((state) => state.provider.chainId)
  return useCallback(
    async (id, price) => {
      try {
        const borrowTx = await nftContract.buyToken(
          id,
          {
            value: ethers.utils.parseUnits(price.toString(), 'ether'),
          },
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

export default useBuyFromSupplier
