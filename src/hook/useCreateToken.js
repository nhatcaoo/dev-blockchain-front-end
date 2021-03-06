import { useCallback } from 'react'
import useNtfContract from './useNtfContract'
import { useSelector } from 'react-redux'
import { LISTING_PRICE, NFT_ADDRESS } from '../constants'
import { ethers } from 'ethers'

const useCreateToken = () => {
  const nftContract = useNtfContract()
  const chainId = useSelector((state) => state.provider.chainId)
  return useCallback(
    async (uri, price) => {
      try {
        const borrowTx = await nftContract.distributeToken(
          uri,
          ethers.utils.parseUnits(price, 'ether'),
         
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
