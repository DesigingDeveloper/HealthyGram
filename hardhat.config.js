require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.9", 
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    hardhat:{
      chainId: 1337,
    }, 
    localhost: {
      url: "http://localhost:8545", // the URL of the local node
      chainId: 1337 // the chain ID of the local network
    }
  },
  paths:{
    artifacts: "./src/artifacts"
  },
  mocha: {
    timeout: 40000
  }
};