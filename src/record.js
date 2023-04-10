import { ethers } from 'hardhat'; 
import Record from './artifacts/contracts/Record.sol/Record.json'; 
const instance = new ethers.Contract( 
  '0xe1CCF6820BC6dc60CFe4D016861F2Ede327c9ACf', // Replace with your deployed contract address 
  Record.abi, 
  ethers.provider 
); 
export default instance; 
//Whenever there is a change in Solidity code, use this few commands 
//step 1: npx hardhat compile 
//Step 3: npx hardhat run scripts/deploy.js 
//Step 4: Paste the contract deployed address above