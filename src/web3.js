import { ethers } from 'hardhat';

let web3;

async function connectToWeb3() {
  if (typeof window !== 'undefined' && window.ethereum !== undefined) {
    // We are in the browser and MetaMask is running
    web3 = new ethers.providers.Web3Provider(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  } else {
    // We are on the server or the user is not running MetaMask
    const provider = new ethers.providers.JsonRpcProvider(
      'https://eth-sepolia.g.alchemy.com/v2/w_zy4gogteiu1xyKsw9eTWGqeIDyqujq'
    );
    web3 = new ethers.providers.Web3Provider(provider);
  }
}

// Call connectToWeb3 function to connect to the appropriate Web3 provider
connectToWeb3().then(() => {
  // use web3 here after it's been initialized
});

export default web3;
