task("deploy", "Deploy OracleFacing contract")
    .addPositionalParam("name", "The name of the OracleFacing contract that you want to deploy")
    .addPositionalParam("chainId", "Set the chain_id to be passed while deployment")
    .setAction(async(taskArgs) => {
        const contractName = taskArgs.name
        const chain_id = taskArgs.chainId

        const networkName = network.name

        console.log(contractName)

        console.log(chain_id)

        console.log(`Deploying ${contractName} to ${networkName} network`)

        const oracleFacingContractFactory = await ethers.getContractFactory(contractName)

        const oracleFacingContract = await oracleFacingContractFactory.deploy(chain_id);

        await oracleFacingContract.deployed();

        console.log(`${contractName} deployed to ${oracleFacingContract.address} on ${networkName} network.`)

    })

module.exports = {}