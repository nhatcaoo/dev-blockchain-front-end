import { useCallback } from 'react'
import useStakeContract from './useStakeContract'
import { useSelector } from 'react-redux'
import { LISTING_PRICE, STAKING_ADDRESS } from '../constants'
import { ethers } from 'ethers'

const useListStake = () => {
  const stakeContract = useStakeContract()
  const chainId = useSelector((state) => state.provider.chainId)
  const [list, setList] = useState([])
  const fetchUserNft = async () => {
    const res = await stakeContract.getMyStakeInfo()
    const data = res.data.nfts.map(itemRes => {
      let item = {
      }
      return item
    })
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
  }, [account, stakeContract])
  return list
}

export default useListStake
