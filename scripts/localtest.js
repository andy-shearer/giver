const { ethers } = require("hardhat");

async function main() {
  const giver = await ethers.getContractFactory("Giver");
  const deployedContract = await giver.deploy();

  await deployedContract.deployed();

  console.log("Giver contract deployed to:", deployedContract.address);

  const accounts = ethers.getSigners();

  const tx = await deployedContract.createApplication(
    "Help pay for my dog's vet bills",
    "My dog needs a tumor removed, and the bills are horrendously expensive. Please help!!",
    3,
  );

  await tx.wait();

  const applications = await deployedContract.applications(0);
  console.log(applications)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
