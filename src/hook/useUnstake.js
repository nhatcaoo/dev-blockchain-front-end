import { useCallback } from 'react'
import useStakeContract from './useStakeContract'
import { useSelector } from 'react-redux'
import { LISTING_PRICE, STAKING_ADDRESS } from '../constants'
import { ethers } from 'ethers'

const useUnstakeToken = () => {
  const stakeContract = useStakeContract()
  const chainId = useSelector((state) => state.provider.chainId)
  return useCallback(
    async (itemId) => {
      try {
        const borrowTx = await stakeContract.unStake(
          itemId
        )
        return true
      } catch (e) {
        console.error(e)
        return false
      }
    },
    [chainId, stakeContract],
  )
}

export default useUnstakeToken
