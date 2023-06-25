import { ethers } from "hardhat";

async function main() {
  const receiveTransfer = await ethers.deployContract("ReceiveTransfer");

  await receiveTransfer.waitForDeployment();

  console.log(
    `ReceiveTransfer deployed to ${receiveTransfer.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
