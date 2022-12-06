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

#### NOTE: If you're deploying the OracleFacing contracts on any network other than Polygon Mumbai, then you have to configure the ALCHEMY or INFURA HTTPS url as well as Block explorer API key corresponding to that particular network.

#### Here is the list of networks supported by Shamba Geospatial Oracle and their corresponding details:

```
    Network               ETH_CHAIN_ID        Mainnet Block Explorer for getting API key            Testnet Block Explorer for deployed contract                                 

Avalanche Fuji             43113                  https://snowtrace.io/myapikey                           https://testnet.snowtrace.io/

Binance Testnet            97                     https://bscscan.com/myapikey                            https://testnet.bscscan.com/

Ethereum Goerli            5                      https://etherscan.io/myapikey                           https://goerli.etherscan.io/                          

Moonbase Alpha             1287                   https://moonscan.io/myapikey                            https://moonbase.moonscan.io/

Optimism Goerli            420                    https://optimistic.etherscan.io/myapikey                https://goerli-optimism.etherscan.io

Polygon Mumbai             80001                  https://polygonscan.com/myapikey                        https://mumbai.polygonscan.com/
```

### Compile the contracts

```
npx hardhat compile
```

### Deploy and interact with the contracts using the tasks defined in the tasks folder

#### Deploy the contract on any of the six networks listed in the table above, using the corresponding contract name and chain_id parameters<br/>

##### To deploy on Avalanche Fuji network

###### OracleFacingGeoConsumer contract:

```
npx hardhat deploy OracleFacingGeoConsumer 43113 --network fuji
```

###### OracleFacingFireConsumer contract:

```
npx hardhat deploy OracleFacingFireConsumer 43113 --network fuji
```

<br/><br/>

##### To deploy on Binance Testnet network

###### OracleFacingGeoConsumer contract:

```
npx hardhat deploy OracleFacingGeoConsumer 97 --network testnet
```

###### OracleFacingFireConsumer contract:

```
npx hardhat deploy OracleFacingFireConsumer 97 --network testnet
```

<br/><br/>

##### To deploy on Ethereum Goerli network

###### OracleFacingGeoConsumer contract:

```
npx hardhat deploy OracleFacingGeoConsumer 5 --network goerli
```

###### OracleFacingFireConsumer contract:

```
npx hardhat deploy OracleFacingFireConsumer 5 --network goerli
```

<br/><br/>

##### To deploy on Moonbase Alpha network

###### OracleFacingGeoConsumer contract:

```
npx hardhat deploy OracleFacingGeoConsumer 1287 --network moonbase
```

###### OracleFacingFireConsumer contract:

```
npx hardhat deploy OracleFacingFireConsumer 1287 --network moonbase
```

<br/><br/>

##### To deploy on Optimism Goerli network

###### OracleFacingGeoConsumer contract:

```
npx hardhat deploy OracleFacingGeoConsumer 420 --network moonbase
```

###### OracleFacingFireConsumer contract:

```
npx hardhat deploy OracleFacingFireConsumer 420 --network moonbase
```

<br/><br/>

##### To deploy on Polygon Mumbai network

###### OracleFacingGeoConsumer contract:

```
npx hardhat deploy OracleFacingGeoConsumer 80001 --network mumbai
```

###### OracleFacingFireConsumer contract:

```
npx hardhat deploy OracleFacingFireConsumer 80001 --network mumbai
```

<br/><br/>


> **NOTE**: In all the commands mentioned below, replace the **DEPLOYED_CONTRACT_ADDRESS**, **CHAIN_ID** and **NETWORK_NAME** placeholders with your corresponding deployed contract address, *chain_id* as mentioned in the table given above, and the name of the network flag on which your contract is deployed, respectively. 

> So, the **CHAIN_ID** can be *43113*, *97*, *5*, *1287*, *420* or *80001* and the corresponding **NETWORK_NAME** can be *fuji*, *testnet*, *goerli*, *moonbase*, *optimistic-goerli* or *mumbai*, respectively.


### Verify and publish the contract on the corresponding testnet block explorer depending upon the network on which your contract is being deployed (refer to the table given above for the urls of the block explorers):

###### OracleFacingGeoConsumer contract:

```
npx hardhat verify DEPLOYED_CONTRACT_ADDRESS CHAIN_ID --contract contracts/OracleFacingGeoConsumer.sol:OracleFacingGeoConsumer --network NETWORK_NAME
```

###### OracleFacingFireConsumer contract:

```
npx hardhat verify DEPLOYED_CONTRACT_ADDRESS CHAIN_ID --contract contracts/OracleFacingFireConsumer.sol:OracleFacingFireConsumer --network NETWORK_NAME
```



#### Fund the deployed contract with 1 LINK per Oracle request: 

**NOTE**: Since, no LINK faucet is available for **Moonbase Alpha** as of now, so we have removed the LINK payment requiremnet in case of **Moonbase Alpha** network, therefore you can proceed without funding the contract with LINK.
     
```
npx hardhat fund --contract DEPLOYED_CONTRACT_ADDRESS --links 1 --network NETWORK_NAME
```


#### Send the request to the Shamba Geospatial Oracle by passing the required 7 parameters in case of OracleFacingGeoConsumer nad 6 parameters in case of OracleFacingFireConsumer:

> **NOTE**: To learn about the parameters, you can check the Shamba Docs (https://docs.shamba.app/) and also interact with the Shamba Contracts Tool (https://contracts.shamba.app/).

###### OracleFacingGeoConsumer contract:

```
npx hardhat sendRequestToGeostats --contract DEPLOYED_CONTRACT_ADDRESS agg_mean COPERNICUS/S2_SR NDVI 250 2021-09-01 2021-09-10 "[[1,"[[[19.51171875,4.214943141390651],[18.28125,-4.740675384778361],[26.894531249999996,-4.565473550710278],[27.24609375,1.2303741774326145],[19.51171875,4.214943141390651]]]"]]" --network NETWORK_NAME
```
###### OracleFacingFireConsumer contract:

```
npx hardhat sendRequestToFire --contract DEPLOYED_CONTRACT_ADDRESS MODIS/006/MOD14A1 MaxFRP 1000 2021-09-01 2021-09-10 "[[1, "[[[29.53125,19.642587534013032],[29.53125,27.059125784374068],[39.90234375,27.059125784374068],[39.90234375,19.642587534013032],[29.53125,19.642587534013032]]]"], [2, "[[[46.72947724367683,4.390228926463396],[46.679357886244986,3.8826857905457652],[46.530925872748305,3.394358826483646],[46.28988536222383,2.9440946050840657],[45.965499406313945,2.5492840567467825],[45.57023397538652,2.2251800570298523],[45.11927889828469,1.9843023404026605],[44.62996412572296,1.8359528461951848],[44.12109374999999,1.7858585217968768],[43.61222337427702,1.8359528461951848],[43.122908601715295,1.9843023404026605],[42.67195352461347,2.2251800570298523],[42.27668809368605,2.5492840567467825],[41.95230213777616,2.9440946050840657],[41.71126162725168,3.394358826483646],[41.562829613755,3.8826857905457652],[41.51271025632316,4.390228926463396],[41.562829613755,4.8974271245416965],[41.71126162725168,5.3847719120817565],[41.95230213777616,5.833566543422026],[42.27668809368605,6.22664411740961],[42.67195352461348,6.549015711120945],[43.12290860171531,6.788425209793004],[43.612223374277036,6.9357938995827375],[44.12109375,6.9855438544859965],[44.629964125722964,6.9357938995827375],[45.119278898284705,6.788425209792991],[45.57023397538653,6.549015711120945],[45.965499406313945,6.226644117409597],[46.28988536222384,5.833566543422026],[46.53092587274831,5.384771912081744],[46.679357886244986,4.897427124541672],[46.72947724367683,4.390228926463396]]]"]]" --network NETWORK_NAME
```

#### Fetch the latest data returned by the Shamba Geospatial Oracle

###### OracleFacingGeoConsumer contract:

```
npx hardhat getLatestDataForGeostats --contract DEPLOYED_CONTRACT_ADDRESS --network NETWORK_NAME
```

###### OracleFacingFireConsumer contract:

```
npx hardhat getLatestDataForFire --contract DEPLOYED_CONTRACT_ADDRESS PROPERTY_ID --network NETWORK_NAME
```

**NOTE**: Here, the PROPERTY_ID is the numeric id of the polygon against which you want to get the fire_detection data. According to the `geometry` argument passed in the `sendRequestToFire` task execution command above, the PROPERTY_ID can be either 1 or 2 (as two polygons are being passed in the request).

#### Fetch the latest metadata cid (content-id) returned by the Shamba Geospatial Oracle

###### OracleFacingGeoConsumer contract:

```
npx hardhat getLatestCidForGeostats --contract DEPLOYED_CONTRACT_ADDRESS --network NETWORK_NAME
```

###### OracleFacingFireConsumer contract:

```
npx hardhat getLatestCidForFire --contract DEPLOYED_CONTRACT_ADDRESS --network NETWORK_NAME
```