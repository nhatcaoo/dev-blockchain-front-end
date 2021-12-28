import useStakeContract from './useStakeContract'
import useNtfMarketContract from './useNtfMarketContract'
import useNtfContract from './useNtfContract'
import { useSelector } from 'react-redux'
import { LISTING_PRICE, STAKING_ADDRESS, NFT_ADDRESS } from '../constants'
import { ethers } from 'ethers'
import { useCallback, useEffect, useState } from 'react'

const useListMyNft = () => {
  const nftContract = useNtfContract()
  const chainId = useSelector((state) => state.provider.chainId)
  const account = useSelector((state) => state.provider.account)
  const [list, setList] = useState([])

  const fetchUserNft = async () => {
    const res = await nftContract.getTokensOnSell()
    const data = await Promise.all(res.map(async itemRes => {
      if(await nftContract.ownerOf(itemRes.tokenId) != account) return
      let tokenURI = await nftContract.tokenURI(itemRes.tokenId)
      let item = {
        tokenId: itemRes.tokenId.toString(),
        price: ethers.utils.formatUnits(itemRes.price.toString() , 'ether')  ,
        uri: tokenURI
      }
      return item
    }))
    console.log('is Sold: ', data)

    setList(data)
  }
  useEffect(() => {
    ; (async () => {
      if (nftContract && account) {
        await fetchUserNft()
        return true
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, nftContract])
  return list
}

export default useListMyNft
