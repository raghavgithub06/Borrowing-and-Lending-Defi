require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: true,
    },

    sepolia: {
      url: process.env.INFURA_SEPOLIA_API_URL,
      accounts: [process.env.MAIN_ACCOUNT],
      chainId: 11155111,
    },
  },
};
