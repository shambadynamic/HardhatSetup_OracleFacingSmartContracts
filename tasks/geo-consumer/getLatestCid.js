task("getLatestCidForGeostats", "Gets the latest cid from the ShambaGeoConsumer")
    .addParam("contract", "The address of the OracleFacingGeoConsumer contract that you want to read")
    .setAction(async(taskArgs) => {
        const contractAddr = taskArgs.contract
        const networkId = network.name

        const geoConsumer = await ethers.getContractFactory("OracleFacingGeoConsumer")
        console.log(
            "Reading data from OracleFacingGeoConsumer contract ",
            contractAddr,
            " on network ",
            networkId
        )

        //Get signer information
        const accounts = await ethers.getSigners()
        const signer = accounts[0]
        const geoConsumerContract = await new ethers.Contract(
            contractAddr,
            geoConsumer.interface,
            signer
        )

        //Get latest cid
        const latestCid = await geoConsumerContract.getLatestCid()
        console.log("Latest cid is ", latestCid)

    })

module.exports = {}