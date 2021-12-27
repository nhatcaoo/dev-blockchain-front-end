import { useCallback } from 'react'
import useStakeContract from './useStakeContract'
import { useSelector } from 'react-redux'
import { LISTING_PRICE, STAKING_ADDRESS } from '../constants'
import { ethers } from 'ethers'

const useStakeToken = () => {
  const stakeContract = useStakeContract()
  const chainId = useSelector((state) => state.provider.chainId)
  return useCallback(
    async (tokenId) => {
      try {
        const borrowTx = await stakeContract.stake(
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

export default useStakeToken
