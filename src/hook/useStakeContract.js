import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ABI, NFT_ADDRESS } from '../constants'

const useStakeContract = () => {
  const [stakeContract, setStakeContract] = useState()
  const provider = window.providerEth
  const chainId = useSelector((state) => state.provider.chainId)
  const account = useSelector((state) => state.provider.account)

  useEffect(() => {
    ;(async () => {
      try {
        if (provider && chainId && NFT_ADDRESS[chainId] && ABI['staking']) {
          const currentSigner = await provider.getSigner()
          const contract = new ethers.Contract(NFT_ADDRESS[chainId], ABI['staking'], provider)
          if (account) {
            setStakeContract(contract.connect(currentSigner))
          } else {
            setStakeContract(contract)
          }
        }
      } catch (error) {
        console.error('error', error)
      }
    })()
  }, [account, chainId, provider])

  return stakeContract
}

export default useStakeContract
