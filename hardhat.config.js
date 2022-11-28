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
        testnet: {
            url: process.env.QUICKNODE_BNB_TESTNET_URL,
            accounts: [process.env.ACCOUNT_PRIVATE_KEY],
            chainId: 97,
        },
        moonbase: {
            url: process.env.MOONBASE_RPC_URL,
            accounts: [process.env.ACCOUNT_PRIVATE_KEY],
            chainId: 1287,
        },
        "heco-testnet": {
            url: process.env.HECO_TESTNET_RPC_URL,
            accounts: [process.env.ACCOUNT_PRIVATE_KEY],
            chainId: 256,
        },
        "optimistic-goerli": {
            url: process.env.OPTIMISM_GOERLI_RPC_URL,
            accounts: [process.env.ACCOUNT_PRIVATE_KEY],
            chainId: 420,
        }
    },

    etherscan: {
        apiKey: {
            polygonMumbai: process.env.POLYGONSCAN_API_KEY
       }
        
    }
    
    // etherscan: {
    //     apiKey: process.env.POLYGONSCAN_API_KEY_NEW
        
    // }
};