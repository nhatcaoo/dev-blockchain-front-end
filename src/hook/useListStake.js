import useStakeContract from './useStakeContract'
import { useSelector } from 'react-redux'
import { ethers } from 'ethers'
import { useCallback, useEffect, useState } from 'react'
import useNtfContract from './useNtfContract'
const useListStake = () => {
  const stakeContract = useStakeContract()
  const nftContract = useNtfContract()

  const account = useSelector((state) => state.provider.account)
  const chainId = useSelector((state) => state.provider.chainId)
  const [list, setList] = useState([])
  const fetchUserNft = async () => {
    const res = await stakeContract.getMyStakeInfo()
    const data = await Promise.all( res.map(async itemRes => {
      if(!itemRes.isValid) return
      let tokenURI = await nftContract.tokenURI(itemRes.tokenId)
      let item = {
        uri: tokenURI,
        tokenId : itemRes.tokenId.toString(),
        itemId: itemRes.itemId.toString(),
        startBlock: itemRes.startBlock.toString()
      }
      return item
    }))
    setList(data)
  }
  useEffect(() => {
    ; (async () => {
      if (stakeContract && account) {
        await fetchUserNft()
        return true
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, stakeContract, nftContract])
  return list
}

export default useListStake
