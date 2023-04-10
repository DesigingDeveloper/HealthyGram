const hre = require("hardhat"); 
const fs = require("fs-extra"); 
async function main() { 
  // Load the compiled contract's bytecode and ABI 
  const recordArtifact = await hre.artifacts.readArtifact("Record"); 
  // Deploy the contract 
  const Record = await hre.ethers.getContractFactory("Record"); 
  const record = await Record.deploy(); 
  // Wait for the contract to be mined 
  await record.deployed(); 
  console.log("Contract deployed to:", record.address); 
  // Write the contract's address to a JSON file 
  const data = { 
    address: record.address, 
  }; 
  fs.writeFileSync("contract-address.json", JSON.stringify(data)); 
} 
main() 
  .then(() => process.exit(0)) 
  .catch(error => { 
    console.error(error); 
    process.exit(1); 
  });