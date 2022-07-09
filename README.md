# Hardhat Setup for interacting with Oracle Facing Smart Contracts

This project demonstrates a basic Hardhat setup for interaction with the Shamba Geospatial Oracle using the Oracle Facing Smart Contracts inheriting the Shamba Smart-Contract-Kit. 


### First install the required dependencies mentioned in package.json:

```
npm install
```

### Configure the environment variables including ALCHEMY_POLYGON_URL, ACCOUNT_PRIVATE_KEY and POLYGONSCAN_API_KEY by creating a .env file:

> ALCHEMY_POLYGON_URL="Login into Alchemy and create an app using https://dashboard.alchemyapi.io/apps/ and copy the HTTPS url from the 'View Key' option"<br /><br />
> ACCOUNT_PRIVATE_KEY="Export your Metamask Wallet private key"<br /><br />
> POLYGONSCAN_API_KEY="Login into https://polygonscan.com/login and generate API key"<br /><br />


### Deploy the contract by running the deploy.js script:

```
npx hardhat run scripts/deploy.js
```

### Verify and publish the contract on https://mumbai.polygonscan.com/:

```
npx hardhat verify DEPLOYED_CONTRACT_ADDRESS --contract contracts/OracleFacingGeoConsumer.sol:OracleFacingGeoConsumer
```

### Interact with the contract using the tasks defined in the tasks folder

#### Fund the deployed contract with 1 LINK per Oracle request: 
        
```
npx hardhat fund --contract DEPLOYED_CONTRACT_ADDRESS --links 1
```

#### Send the request to the Shamba Geospatial Oracle by passing the required 7 parameters:

> **NOTE**: To learn about the parameters, you can check the Shamba Docs (https://docs.shamba.app/) and also interact with the Shamba Contracts Tool (https://contracts.shamba.app/).

```
npx hardhat sendRequest --contract DEPLOYED_CONTRACT_ADDRESS agg_mean COPERNICUS/S2_SR NDVI 250 2021-09-01 2021-09-10 "[[1,"[[[19.51171875,4.214943141390651],[18.28125,-4.740675384778361],[26.894531249999996,-4.565473550710278],[27.24609375,1.2303741774326145],[19.51171875,4.214943141390651]]]"]]"
```


#### Fetch the data returned by the Shamba Geospatial Oracle:

```
npx hardhat getLatestData --contract DEPLOYED_CONTRACT_ADDRESS
```

```
npx hardhat getLatestCid --contract DEPLOYED_CONTRACT_ADDRESS
```



