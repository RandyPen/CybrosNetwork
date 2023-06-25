import { expect } from "chai";
import { ethers } from "hardhat";

describe("ReceiveTransfer", function () {
    it("test initial value", async function () {
      const receiveTransfer = await ethers.deployContract("ReceiveTransfer");
      const [owner] = await ethers.getSigners();
      expect(await receiveTransfer.owner()).to.equal(owner.address);
    });
    it("not enough value error", async function () {
      const receiveTransfer = await ethers.deployContract("ReceiveTransfer");
      const testPrompt = "test";
      const amount = 1_000;
      await expect(receiveTransfer.receiveTransfer(testPrompt, {
        value: amount
      })).to.be.revertedWith("Amount is less than the minimum required");
    });
  });