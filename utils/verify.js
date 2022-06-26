const { run } = require("hardhat")

async function verify(contractAddress, args) {
    console.log("Verifying contract on etherscan...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
        console.log("Contract verified!")
    } catch (e) {
        if (e.toString().toLowerCase().includes("already verified")) {
            console.log("Already verified!")
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }
