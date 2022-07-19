//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@shambadynamic/contracts/contracts/ShambaGeoConsumer.sol";

contract OracleFacingGeoConsumer is ShambaGeoConsumer {
    constructor(uint256 _operatorNumber) ShambaGeoConsumer(_operatorNumber) {}
}
