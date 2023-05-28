//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@shambadynamic/contracts/contracts/ShambaFireConsumer.sol";

contract OracleFacingFireConsumer is ShambaFireConsumer {
    constructor(uint64 _chainId) ShambaFireConsumer(_chainId) {}
}
