require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("./tasks");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [{
                version: "0.8.7"
            },
            {
                version: "0.4.11"
            },
            {
                version: "0.4.24"
            }
        ]
    },
    defaultNetwork: "mumbai",
    networks: {
        mumbai: {
            url: process.env.ALCHEMY_POLYGON_URL,
            accounts: [process.env.ACCOUNT_PRIVATE_KEY],
            chainId: 80001,
        }
    },
    etherscan: {
        apiKey: process.env.POLYGONSCAN_API_KEY
    }
};