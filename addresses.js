const ETHAddress = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";

/****************** SEPOLIA TESTNET **********************/

// npx hardhat run scripts/deploy-sepolia.js --network sepolia
const DAITokenAddress = "0xF2e2C8A502657c37ad4d37F2BefaBEb308315152";
const LINKTokenAddress = "0x05332eF900c3B926ED013F66b64A85646Fd82092";
const USDCTokenAddress = "0x9603ed1F72C87d33d48a5e3A4A0915235BA46cFe";
const AddressToTokenMapAddress = "0x9Db7F3e9aeee7577a9CBb32378d28eB19347D50E";
const LendingConfigAddress = "0xDcd209294e7605D3123C3C2A5Da58Ce525C0E3DC";
const LendingHelperAddress = "0x5620bE39D5B89C5D8Ece7E1509B5eC5B6927Da98";
const LendingPoolAddress = "0xF5D9C5C8073D700696773bE0cD67FDfAaA9A8bD0";
const BTCTokenAddress = "0x516a289d80a592b2f968c8d361d533d261d0137c";

/********* PRICE FEED ADDRESSES ***********/
// Sepolia PF addresses
// https://docs.chain.link/data-feeds/price-feeds/addresses/#Sepolia%20Testnet
const ETH_USD_PF_ADDRESS = "0x694AA1769357215DE4FAC081bf1f309aDC325306";
const DAI_USD_PF_ADDRESS = "0x14866185B1962B63C3Ea9E03Bc1da838bab34C19";
const USDC_USD_PF_ADDRESS = "0xA2F78ab2355fe2f984D808B5CeE7FD0A93D5270E";
const LINK_USD_PF_ADDRESS = "0xc59E3633BAAC79493d908e63626716e204A45EdF";
const BTC_USD_PF_ADDRESS = "0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43";

const account1 = "0x1c485a04648a101882b6a4473E31A786f8Ad7BFb";
const account2 = "0x021edEFA528293eB8ad9A2d9e0d71011f6297601";
const account3 = "0xc1f33e8c427fd4126A23A4a9B721BD97Fb11dDe6";

const account4 = "0x315F60449DaB3D321aF75821b576E7F436308635";
const account5 = "0x4B40f99E93A8814be7fDe5F6AaFA5e9823E13728";
const account6 = "0x3f39Ae58Cb1148ec1Ad903648319359Cfdc34a02";

module.exports = {
  ETHAddress,
  DAITokenAddress,
  LINKTokenAddress,
  USDCTokenAddress,
  BTCTokenAddress,
  AddressToTokenMapAddress,
  LendingConfigAddress,
  LendingHelperAddress,
  LendingPoolAddress,
  ETH_USD_PF_ADDRESS,
  DAI_USD_PF_ADDRESS,
  USDC_USD_PF_ADDRESS,
  LINK_USD_PF_ADDRESS,
  BTC_USD_PF_ADDRESS,
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
};
