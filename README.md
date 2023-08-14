# Transferring NFTs to the Polygon Network via the FxPortal

## Description

This guide outlines the steps to transfer NFTs from one network (Goerli) to the Polygon network using the FxPortal. It covers deploying an NFT contract, minting NFTs, mapping tokens on the Polygon network, and transferring NFTs between networks.

## Getting Started

To get started with the NFT transfer process, follow the instructions below:

### Prerequisites

- Make sure you have Node.js and npm installed on your machine.
- Set up a wallet for the Goerli network.

### Executing Program

Follow the steps below to execute the NFT transfer:

1. Deploy the NFT contract to the Goerli network using the command:
   &emsp;`npx hardhat run scripts/deploy.js --network goerli --show-stack-traces`
2. Rename `.env.example` to `.env` and note the NFT contract address and add it to your `.env` file and add your private key.
3. Mint NFTs on the Goerli network using the command:
   &emsp;`npx hardhat run scripts/mintNFTs.js --network goerli --show-stack-trace`
4. Map the NFT tokens to the Polygon network using the [Polygon Token Mapper](https://mapper.polygon.technology/map).
5. Approve the deposit of NFTs on the Goerli network using the command:
   &emsp;`npx hardhat run scripts/approveDeposit.js --network goerli --show-stack-traces`
6. Modify the wallet address and contract address in the `getBalance.js` script.
7. Check the NFT balance on the Polygon network using the command:
   &emsp;`npx hardhat run scripts/getBalance.js --network mumbai`

## Authors

- Hemin Patel
- GitHub: [https://github.com/iMPERIAL18](https://github.com/iMPERIAL18)
