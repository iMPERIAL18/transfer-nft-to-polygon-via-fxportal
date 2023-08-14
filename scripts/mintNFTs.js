const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
    const network = "https://ethereum-goerli.publicnode.com";

    const provider = new ethers.providers.JsonRpcProvider(network);

    const signer = new ethers.Wallet(process.env.PRIVATE_KEY,provider);

    const techCityContarct = await ethers.getContractFactory("TechCityCycle",signer);

    const contract = await techCityContarct.attach(process.env.CONTARCT_ADD);

    await contract.safeMint();

    console.log("Done");

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });