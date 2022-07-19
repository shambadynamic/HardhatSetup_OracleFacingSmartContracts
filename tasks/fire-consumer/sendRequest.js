const { networkConfig } = require("../../helper-hardhat-config")

task("sendRequestToFire", "Sends request to Shamba Geospatial Oracle")
    .addParam("contract", "The address of the OracleFacingFireConsumer contract that you want to read")
    .addPositionalParam("datasetCode", "Set the dataset_code to be passed")
    .addPositionalParam("selectedBand", "Set the selected_band to be passed")
    .addPositionalParam("imageScale", "Set the image_scale to be passed")
    .addPositionalParam("startDate", "Set the start_date to be passed")
    .addPositionalParam("endDate", "Set the end_date to be passed")
    .addPositionalParam("geometry", "Set the geometry to be passed")
    .setAction(async(taskArgs) => {
        const contractAddr = taskArgs.contract
        const networkId = network.config.chainId

        const dataset_code = taskArgs.datasetCode

        const selected_band = taskArgs.selectedBand

        const image_scale = taskArgs.imageScale

        const start_date = taskArgs.startDate

        const end_date = taskArgs.endDate

        const geometry = taskArgs.geometry


        console.log(networkId)

        const fireConsumer = await ethers.getContractFactory("OracleFacingFireConsumer")

        //Get signer information
        const accounts = await hre.ethers.getSigners()
        const signer = accounts[0]

        //First, lets see the LINK balance in the contract
        const linkTokenAddress = networkConfig[networkId]["linkToken"]
        console.log('LINK token address: ', linkTokenAddress)
        const LinkToken = await ethers.getContractFactory("LinkToken")
        const linkTokenContract = new ethers.Contract(linkTokenAddress, LinkToken.interface, signer)
        const balanceHex = await linkTokenContract.balanceOf(contractAddr)
        const balance = await ethers.BigNumber.from(balanceHex._hex).toString()

        if (balance < 1000000000000000000) {
            console.log("Please fund the contract at ", contractAddr, " with 1 LINK per Oracle call")
        } else {
            //console.log(dataset_code, selected_band, image_scale, start_date, end_date, geometry)

            var geometry_array = JSON.parse(geometry)
            for (var i = 0; i < geometry_array.length; i++) {

                geometry_array[i][1] = JSON.stringify(geometry_array[i][1])
            }

            //console.log(typeof(geometry_array))

            const fireConsumerContract = await new ethers.Contract(
                contractAddr,
                fireConsumer.interface,
                signer
            )

            await fireConsumerContract.requestFireData(dataset_code, selected_band, image_scale, start_date, end_date, geometry_array)


            // await fireConsumerContract.requestFireData("COPERNICUS/S2_SR", "NDVI", "250", "2021-09-01", "2021-09-10", [
            //     [1, "[[[19.51171875,4.214943141390651],[18.28125,-4.740675384778361],[26.894531249999996,-4.565473550710278],[27.24609375,1.2303741774326145],[19.51171875,4.214943141390651]]]"]
            // ])
        }




    })

module.exports = {}