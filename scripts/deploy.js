const { ethers } = require("hardhat");

async function main() {
  const giver = await ethers.getContractFactory("Giver");
  const deployedContract = await giver.deploy();

  await deployedContract.deployed();

  console.log("Giver contract deployed to:", deployedContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
