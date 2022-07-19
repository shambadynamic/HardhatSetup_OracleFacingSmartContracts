task("deploy", "Deploy OracleFacing contract")
    .addPositionalParam("name", "The name of the OracleFacing contract that you want to deploy")
    .addPositionalParam("operatorNumber", "Set the operator_number to be passed while deployment")
    .setAction(async(taskArgs) => {
        const contractName = taskArgs.name
        const operator_number = taskArgs.operatorNumber

        const networkName = network.name

        console.log(contractName)

        console.log(operator_number)

        console.log(`Deploying ${contractName} to ${networkName} network`)

        const oracleFacingContractFactory = await ethers.getContractFactory(contractName)

        const oracleFacingContract = await oracleFacingContractFactory.deploy(operator_number);

        await oracleFacingContract.deployed();

        console.log(`${contractName} deployed to ${oracleFacingContract.address} on ${networkName} network.`)

    })

module.exports = {}