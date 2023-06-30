// Remember to first compile the the contract (npx hardhat compile), before you run the script (yarn run script)

const hre = require("hardhat");

// Main function
const main = async () => {
  // Deploy the contract locally with hardhat
  const rsvpContractFactory = await hre.ethers.getContractFactory("Web3RSVP");
  const rsvpContract = await rsvpContractFactory.deploy();
  await rsvpContract.deployed();
  console.log("Contract deployed to:", rsvpContract.address);

  // Hardhat gives us different test wallets so we can simulate contract interaction
  // To get deployer wallet address and couple others for testing we use the getSingers method
  const [deployer, address1, address2] = await hre.ethers.getSigners();

  // Mock data
  let deposit = hre.ethers.utils.parseEther("1");
  let maxCapacity = 3;
  let timestamp = 1718926200;
  let eventDataCID =
    "bafybeibhwfzx6oo5rymsxmkdxpmkfwyvbjrrwcl7cekmbzlupmp5ypkyfi";

  // Create a new event with mock data
  let txn = await rsvpContract.createNewEvent(
    timestamp,
    deposit,
    maxCapacity,
    eventDataCID
  );

  // Once the transaction is finished this will return transaction data including an array of emitted events
  let wait = await txn.wait();
  console.log("NEW EVENT CREATED:", wait.events[0].event, wait.events[0].args);

  // We can save the eventId so we can use it later
  let eventID = wait.events[0].args.eventID;
  console.log("EVENT ID:", eventID);

  // We can have each account we got from getSingers RSVP to the event
  // By default Hardhat calls our contract functions from the deployer wallet address, to call from another address use .connect(address) modifier
  // To send our deposit, we can pass in an object as the last parameter with the value set to the deposit amount.
  txn = await rsvpContract.createNewRSVP(eventID, { value: deposit });
  wait = await txn.wait();
  console.log("NEW RSVP:", wait.events[0].event, wait.events[0].args);

  txn = await rsvpContract
    .connect(address1)
    .createNewRSVP(eventID, { value: deposit });
  wait = await txn.wait();
  console.log("NEW RSVP:", wait.events[0].event, wait.events[0].args);

  txn = await rsvpContract
    .connect(address2)
    .createNewRSVP(eventID, { value: deposit });
  wait = await txn.wait();
  console.log("NEW RSVP:", wait.events[0].event, wait.events[0].args);

  // Call confirmAllAttendees, since we created the event from the deployer address, we have to call this function from the deployer address as well
  txn = await rsvpContract.confirmAllAttendees(eventID);
  wait = await txn.wait();
  wait.events.forEach((event) =>
    console.log("CONFIRMED:", event.args.attendeeAddress)
  );

  // In the smart contract we require for the event owner to wait for 7 days before withdrawing unclaimed deposits, so this would fail if we call it immediately
  // To work around this Hardhat lets us simulate the passing of time
  // wait 10 years
  await hre.network.provider.send("evm_increaseTime", [15778800000000]);

  // After simulating 10 years we can call the withdrawUnclaimedDeposits function
  txn = await rsvpContract.withdrawUnclaimedDeposits(eventID);
  wait = await txn.wait();
  console.log("WITHDRAWN:", wait.events[0].event, wait.events[0].args);
};

// runMain function that catches any potential errors with the main function
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
