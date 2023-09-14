//SPDX-License-Identifier:MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BTCToken is ERC20{
    constructor() ERC20("BTC Token","BTC"){
        _mint(msg.sender,1000000*10**18);
    }
}