import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NFT_MARKET_ADDRESS , STAKING_ADDRESS} from '../constants'
import useNtfContract from './useNtfContract'


const useApproveAll = () => {
  const nftContract = useNtfContract()
  const chainId = useSelector((state) => state.provider.chainId)
  const account = useSelector((state) => state.provider.account)

  return useCallback(
    async () => {
      try {
        if (nftContract && chainId && account) {
          const approveTx = await nftContract.setApprovalForAll(NFT_MARKET_ADDRESS[chainId], true)
          approveTx.wait()
          await nftContract.setApprovalForAll(STAKING_ADDRESS[chainId], true)
        }
        return true
      } catch (e) {
        console.error(e)
        return false
      }
    },
    [nftContract, chainId, account],
  )

}

export default useApproveAll
