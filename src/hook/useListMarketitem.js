import useStakeContract from './useStakeContract'
import useNtfMarketContract from './useNtfMarketContract'
import { useSelector } from 'react-redux'
import { LISTING_PRICE, STAKING_ADDRESS } from '../constants'
import { ethers } from 'ethers'
import useNtfContract from './useNtfContract'
import { useCallback, useEffect, useState } from 'react'

const useListMarketItem = () => {
  const nftContract = useNtfContract()
  const account = useSelector((state) => state.provider.account)

  const marketContract = useNtfMarketContract()
  const chainId = useSelector((state) => state.provider.chainId)
  const [list, setList] = useState([])
  const fetchUserNft = async () => {
    const res = await marketContract.getMarketItems()
    const data = await Promise.all(res.map(async itemRes => {
      if(itemRes.isSold || itemRes.isCanceled) return;
      let tokenURI = await nftContract.tokenURI(itemRes.tokenId)
      let item = {
        itemId : itemRes.itemId.toString(),
        seller: itemRes.seller,
        tokenId: itemRes.tokenId.toString(),
        price: ethers.utils.formatUnits(itemRes.price.toString(), 'ether'),
        uri: tokenURI
      }
      return item
    }))
    setList(data)
  }
  useEffect(() => {
    ; (async () => {
      if (marketContract && account) {
        await fetchUserNft()
        return true
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, marketContract])
  return list
}

export default useListMarketItem
