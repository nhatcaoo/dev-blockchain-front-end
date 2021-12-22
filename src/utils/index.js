import Web3Modal from 'web3modal'

export const connectWallet = async () => {
    const web3Modal = new Web3Modal()
    await web3Modal.connect()
  }