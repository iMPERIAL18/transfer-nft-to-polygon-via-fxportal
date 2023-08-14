const hre = require("hardhat");
const { ethers } = hre;
const { FXRootContractAbi } = require("../artifacts/FXRootContractAbi.js");
require("dotenv").config();

async function main() {
    const network = "https://ethereum-goerli.publicnode.com";
    const privateKey = process.env.PRIVATE_KEY;
    const provider = new ethers.providers.JsonRpcProvider(network);
    const wallet = new ethers.Wallet(privateKey, provider);
    const [signer] = await ethers.getSigners();

    const techCityContarct = await ethers.getContractFactory("TechCityCycle");
    const techCity = await techCityContarct.attach("0xa3aFB3113f66FD2968eAA3860834F4D36d6546B2");

    const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
    const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);


    for (let i = 0; i < 5; i++) {
        
        const approveTx = await techCity.connect(signer).approve(fxRootAddress, i);
        await approveTx.wait();
        console.log(`NFT no.${i} approved for transfer`);
      }


    console.log(`all NFTs approved for transfer.`);

    for (let i = 0; i < 5; i++) {
        const gasPrice = ethers.utils.parseUnits("50", "gwei");
        const depositTx = await fxRoot.connect(signer).deposit(process.env.CONTARCT_ADD, wallet.address, i, "0x6770",{ gasPrice });
    
        await depositTx.wait();
        console.log(`NFT with Token ID ${i} Deposited`);
      }

    console.log("Deposited all NFTs");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });