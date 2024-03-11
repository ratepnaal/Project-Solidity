const { expect } = require("chai");

describe("MessageContract", function () {
    let messageContract;
    let owner;
    const newMessage = "Hello, World!";

    beforeEach(async function () {
        const MessageContract = await ethers.getContractFactory("MessageContract");
        messageContract = await MessageContract.deploy();
        await messageContract.deployed();

        [owner] = await ethers.getSigners();
    });

    it("should save and read a message", async function () {
        await messageContract.saveMessage(newMessage);
        const savedMessage = await messageContract.readMessage();

        expect(savedMessage).to.equal(newMessage);
    });
});