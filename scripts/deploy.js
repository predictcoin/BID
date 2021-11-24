const hre = require("hardhat");
const { ethers } = hre;

async function main () {
  const BidContract = await ethers.getContractFactory("Bid");
  const bidContract = await BidContract.deploy();
  await bidContract.deployed();

  console.log(`Bid Token Deployed: ${bidContract.address}`);

  try {
    await hre.run("verify:verify", {
      address: bidContract.address,
      constructorArguments: [],
    });
  } catch (error) {
    console.log(`Failed to verify: Bid Token @${BidContract.address}`);
    console.log(error);
    console.log();
  }

};
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
