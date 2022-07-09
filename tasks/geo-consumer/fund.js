const { networkConfig } = require("../../helper-hardhat-config")

task("fund", "Sends LINK token(s) the ShambaGeoConsumer")
    .addParam("contract", "The address of the OracleFacingGeoConsumer contract that you want to read")
    .addOptionalParam("links", "Set the number of LINK tokens to be funded")
    .setAction(async(taskArgs) => {
        const contractAddr = taskArgs.contract
        const networkId = network.config.chainId

        const numberOfLinks = taskArgs.links || 1

        console.log(numberOfLinks)

        console.log(networkId)

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
        console.log("LINK balance of contract: " + contractAddr + " is " + balance / Math.pow(10, 18))


        // console.log(numberOfLinks * Math.pow(10, 18))

        const tx = await linkTokenContract.transfer(contractAddr, (numberOfLinks * Math.pow(10, 18)).toString())
        console.log(tx.hash)

    })

module.exports = {}