// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/TechCityCycle.sol/TechCityCycle.json");

const contractAddress = "0x4554bd89DCC0A28C47Fc61848E735a7CD457C8Cd";
const contractABI = contractJSON.abi;
const walletAddress = "0x0058863155a5ac9e12671e17d587ec6a33120dc6";

async function main() {

    const contract = await hre.ethers.getContractAt(contractABI, contractAddress);

    console.log(`you have: ${await contract.balanceOf(walletAddress)} NFTs`);

  }
  
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});