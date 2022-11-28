task("getLatestCidForFire", "Gets the latest cid from the ShambaFireConsumer")
    .addParam("contract", "The address of the OracleFacingFireConsumer contract that you want to read")
    .setAction(async(taskArgs) => {
        const contractAddr = taskArgs.contract
        const networkId = network.name

        const fireConsumer = await ethers.getContractFactory("OracleFacingFireConsumer")
        console.log(
            "Reading data from OracleFacingFireConsumer contract ",
            contractAddr,
            " on network ",
            networkId
        )

        //Get signer information
        const accounts = await ethers.getSigners()
        const signer = accounts[0]
        const fireConsumerContract = await new ethers.Contract(
            contractAddr,
            fireConsumer.interface,
            signer
        )

        //Get latest cid
        const latestCid = await fireConsumerContract.getLatestCid()
        console.log("Latest cid is ", latestCid)

    })

module.exports = {}