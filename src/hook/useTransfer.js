import { useCallback } from 'react'
import useNtfContract from './useNtfContract'
import useNtfMarketContract from './useNtfMarketContract'
import { useSelector } from 'react-redux'
import { LISTING_PRICE, NFT_ADDRESS, NFT_MARKET_ADDRESS } from '../constants'
import { ethers } from 'ethers'

const useTransfer = () => {
  const nftContract = useNtfContract()
  const chainId = useSelector((state) => state.provider.chainId)
  const account = useSelector((state) => state.provider.account)

  return useCallback(
    async (id, to) => {
      try {
        const borrowTx = await nftContract.transferFrom(
          account,
          to,
          id,
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

export default useTransfer
