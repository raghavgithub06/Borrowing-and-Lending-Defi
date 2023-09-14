# Asset Borrowing and Lending Defi

## Introduction
This DeFi Lending & Borrowing decentralized application (DApp) operates on **Ethereum's Sepolia Testnet**. 


## Technology Stack

- Built on Ethereum Blockchain
- Solidity
- Javascript
- Typescript
- Chainlink Price Oracles
- Openzeppelin (ERC20 Tokens, Ownable, Reentrancy Guards)
- Hardhat
- Etherjs
- Metamask
- Infura Web3API
- Next JS
- Tailwind CSS
- HTML

## Project Layout

### Top Level folders

1. /components - contains the front-end application
2. /context - contains the front-end application wrapper javascript
3. /contracts - contains the solidity contract
4. /pages - Next Js Main rendering pages and components


### Important Files

1. package.json - node modules to be installed, etc.
2. .env - To store Infura/Alchemy API keys and your private key

## Using & Testing DApp on Sepolia

1. Metamask : Install Metamask wallet extension

2. Add Sepolia Testnet to MetaMask


## Cloning and Deploying the Dapp on Sepolia Testnet

1. Clone this repo :

```
git clone https://github.com/raghavgithub06/Asset-Borrowing-and-Lending-Defi.git
```

2. Go to the root directory and install all node packages

```
cd Asset-Borrowing-and-Lending-Defi
npm install
```

3. Please Create a new Infura API key

4. Now copy Metamask wallet private key

5. Create a new .env file in the root directory

   **_Paste the Infura Sepolia API key and your metmask accounts private key into .env file_**
    INFURA_SEPOLIA_API_URL=""

    MAIN_ACCOUNT = ""
   

6. Start NextJs Node Server

```
npm run dev
```
