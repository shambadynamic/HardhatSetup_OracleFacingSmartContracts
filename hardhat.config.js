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
        },
        goerli: {
            url: process.env.ALCHEMY_GOERLI_URL,
            accounts: [process.env.ACCOUNT_PRIVATE_KEY],
            chainId: 5,
        },
        rinkeby: {
            url: process.env.INFURA_RINKEBY_URL,
            accounts: [process.env.ACCOUNT_PRIVATE_KEY],
            chainId: 4,
        },
        fuji: {
            url: process.env.ALCHEMY_AVALANCHE_FUJI_URL,
            accounts: [process.env.ACCOUNT_PRIVATE_KEY],
            chainId: 43113,
        },
        arbitrum: {
            url: process.env.ALCHEMY_ARBITRUM_RINKEBY_URL,
            accounts: [process.env.ACCOUNT_PRIVATE_KEY],
            chainId: 421611,
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY
    }
};