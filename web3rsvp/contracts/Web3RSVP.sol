// SPDX-License-Identifier: MIT
// It's a requirement that the pragma solidity line matches the version of Solidity defined in the module exports of your hardhat.config.js file
pragma solidity ^0.8.4;

contract Web3RSVP {
    // Struct is similar to a JS object in that it stores related information about an entity
    // Because it is expensive to store data directly on the blockchain, you should only store data that is really necessary directly on the blockchain
    struct CreateEvent {
        bytes32 eventId;
        string eventDataCID;
        address eventOwner;
        uint256 eventTimestamp;
        uint256 deposit;
        uint256 maxCapacity;
        address[] confirmedRSVPs;
        address[] claimedRSVPs;
        bool paidOut;
    }

    // Mapping allows us to store and look up data by some identifier
    // In this example we define a relationship with a unique eventID to the struct that we defined above that is associated with that event
    // We will use this mapping to make sure we are referencing the correct event when we call functions on that event
    mapping(bytes32 => CreateEvent) public idToEvent;
}
