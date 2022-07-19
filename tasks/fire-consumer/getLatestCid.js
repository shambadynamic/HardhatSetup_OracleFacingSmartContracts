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
        const total_oracle_calls = parseInt((await fireConsumerContract.total_oracle_calls()))
        console.log(total_oracle_calls)


        if (total_oracle_calls == 0) {
            console.log("No oracle call has been made yet.")
        } else {
            const latestCid = await fireConsumerContract.getCid(total_oracle_calls - 1)
            console.log("Latest cid is ", latestCid)
        }

    })

module.exports = {}