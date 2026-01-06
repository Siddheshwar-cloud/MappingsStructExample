const hre = require("hardhat");

async function main() {
  const MappingsStructExample =
    await hre.ethers.getContractFactory("MappingsStructExample");

  const contract = await MappingsStructExample.deploy();

  // NEW (ethers v6 way)
  await contract.waitForDeployment();

  console.log(
    "MappingsStructExample deployed to:",
    await contract.getAddress()
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
