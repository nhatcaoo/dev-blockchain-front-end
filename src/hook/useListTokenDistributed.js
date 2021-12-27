import { useCallback } from 'react'
import useStakeContract from './useStakeContract'
import useNtfMarketContract from './useNtfMarketContract'
import useNtfContract from './useNtfContract'
import { useSelector } from 'react-redux'
import { LISTING_PRICE, STAKING_ADDRESS, NFT_ADDRESS } from '../constants'
import { ethers } from 'ethers'

const useListTokenDistributed = () => {
  const nftContract = useNtfContract()
  const chainId = useSelector((state) => state.provider.chainId)
  const [list, setList] = useState([])
  const fetchUserNft = async () => {
    const res = await nftContract.getTokensOnSell()
    const data = res.data.nfts.map(itemRes => {
      let item = {
      }
      return item
    })
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

export default useListTokenDistributed
