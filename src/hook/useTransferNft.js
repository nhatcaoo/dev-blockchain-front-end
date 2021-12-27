import { useCallback } from 'react'
import useNtfContract from './useNtfContract'
import { useSelector } from 'react-redux'
import { LISTING_PRICE, NFT_ADDRESS } from '../constants'
import { ethers } from 'ethers'
//  const account = useSelector((state) => state.provider.account)
const useTransferToken = (to, tokenId, from) => {
  const nftContract = useNtfContract()
  const chainId = useSelector((state) => state.provider.chainId)
  return useCallback(
    async (to, tokenId) => {
      try {
        const borrowTx = await nftContract.transferFrom(
          from,
          to,
          tokenId
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

export default useCreateToken
