task("getLatestDataForFire", "Gets the latest data from the ShambaFireConsumer")
    .addParam("contract", "The address of the OracleFacingFireConsumer contract that you want to read")
    .addPositionalParam("propertyId", "Set the property_id against which the fire_detection is supposed to be checked")
    .setAction(async(taskArgs) => {

        console.log('here')
        const contractAddr = taskArgs.contract
        const property_id = taskArgs.propertyId
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

        //Get latest data
        const latestData = await fireConsumerContract.getFireData(property_id)


        if (latestData == 0) {
            console.log("Either no oracle call has been made yet or the data returned is 0")
        } else {
            if (parseInt(latestData) == 1) {
                console.log("Fire is detected in polygon having property_id as", property_id)
            } else {
                console.log("Fire is not detected in polygon having property_id as", property_id)
            }
        }

    })

module.exports = {}