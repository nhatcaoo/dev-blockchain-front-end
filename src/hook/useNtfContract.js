import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ABI, NFT_ADDRESS } from '../constants'

const useNtfContract = () => {
  const [nftContract, setNftContract] = useState()
  const provider = window.providerEth
  const chainId = useSelector((state) => state.provider.chainId)
  const account = useSelector((state) => state.provider.account)

  useEffect(() => {
    ;(async () => {
      try {
        if (provider && chainId && NFT_ADDRESS[chainId] && ABI['ntf']) {
          const currentSigner = await provider.getSigner()
          const contract = new ethers.Contract(NFT_ADDRESS[chainId], ABI['ntf'], provider)
          if (account) {
            setNftContract(contract.connect(currentSigner))
          } else {
            setNftContract(contract)
          }
        }
      } catch (error) {
        console.error('error', error)
      }
    })()
  }, [account, chainId, provider])

  return nftContract
}

export default useNtfContract
