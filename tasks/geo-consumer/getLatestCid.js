task("getLatestCid", "Gets the latest cid from the ShambaGeoConsumer")
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
        const total_oracle_calls = parseInt((await geoConsumerContract.total_oracle_calls()))
        console.log(total_oracle_calls)


        if (total_oracle_calls == 0) {
            console.log("No oracle call has been made yet.")
        } else {
            const latestCid = await geoConsumerContract.getCid(total_oracle_calls - 1)
            console.log("Latest cid is ", latestCid)
        }

    })

module.exports = {}