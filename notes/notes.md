# Getting Started

## Intro to Web3

* Internet was invented in 1970s as a decentralized network of computers from across the United States (to provide greater security and keep the systems going in case of a Soviet attack)
* In 1989 Tim Berners Lee was developing the technology which would become the World Wide Web
* **Web 1.0** is defined as the version of the web that existed between 1990 to 2004. During this time, the internet mainly consisted of static websites owned by individual companies. This websites had very low user interaction possibilities, which is why Web 1.0 is commonly referred as *read-only* web
* Around 2005 internet speed increased significantly which allowed greater adoption and greater user interaction. This meant there were possibilities for using the internet. Because of this **Web 2.0** is also known as  the *read-write web*.
* Web 2.0 was also knows as centralized web, because the content is stored on a cloud storage management service like CloudFlare or AWS. Majority of the web is tied (centralized) to a small number of big organizations. If there are only issues with one of the large storage providers, a huge amount of active websites can be affected.
* In **Web 3.0** decentralization has returned. Data is encrypted and securely stored across multiple nodes (computers connected to a blockchain network). These nodes are run by individuals worldwide who are sharing their disk space for a fee. Because data is stored on multiple nodes instead of one central server like AWS, it is decentralized. This enhances data security for websites and their users.
* In Web 2.0 if you want to join a member community of a website you usually have to create a new user account for each website, in Web 3.0 you simply connect with your crypto wallet.
* Because of decentralization it is less likely that some service will stop working, because all of the servers would stop working suddenly. Decentralized network of nodes connected to the blockchain provides greater redundancy.

## Intro to Blockchain

* The **blockchain** is an *expanding system that records information in a manner that makes it hard or almost impossible to hack the system*. Information gets recorded in **blocks**, which are like *little lists of records*.
* Each block contains a **hash** (a long string of characters representing a specific piece of data) of the previous block as well as other useful information such as a timestamp and transaction data. This process forms a chain of data, otherwise known as **blockchain**.
* Blockchain technology can be used for securing personal information, artist royalties, non-fungible tokens, real estate, aid in voting processes...
* The first step in a blockchain transaction usually starts with a user requesting a transaction. Any 'write' operation to the blockchain is a transaction. Transactions are requests for your action to be validated and added to the chain. In order to successfully execute a transaction on the Blockchain, a **gas fee** (a transaction fee on the blockchain) is typically required. When there is a lot of traffic and there is high demand for the network, the gas fees go up because block space is limited, and therefore miners can demand higher fees in order to prioritize which transactions they want to process.
* **Gas fees** are something that all users must pay in order to perform a function on the blockchain. The amount of gas required to pay varies depending on which blockchain you’re using, as well as other factors like high traffic.
* Once the transaction has been requested, it gets authenticated and added to a **block** (block is composed of a set of transaction across the blockchain). Once blocks maximum capacity is reached, the block is closed and linked to previously filled block. The block is sent out to the entirety of the network's **nodes** (participants on the blockchain).
* Then nodes validate the transaction and receive an award for participating in the validation process. With validation complete, the block gets added to the official blockchain. Afterward, the blockchain receives an update across the entire network and officially reflects that transaction. The transaction is now complete.

## Intro to Smart Contracts

* A **smart contract** is a computer program compiled from code that can control events and actions according to the terms set within the contract’s code
* Smart contracts can be programmed to accept payment and return an item in place of that payment (like minting an NFT - **Minting** is the process of taking a digital asset like a photo and publishing that asset to the blockchain).
* Similar example of smart contract accepting a payment and returning an item is Uniswap decentralized cryptocurrency exchange, each time a user goes to exchange one crypto currency for another a smart contract function is triggered, which accepts user's payment and then sends them the requested currency.

## Intro to Crypto Wallets

* A **crypto wallet** is a storage system for your digital assets like cryptocurrencies, NFTs, and more. The contents of each crypto wallet can be accessed by a unique key made of a combination of letters and numbers explicitly assigned to the wallet’s creator (called a **private key**)
* Each crypto wallet also has a **public key**, which the public address of the user's wallet. Anyone can use the public key to look up and verify transaction information.
* There are **digital** (MetaMask, Coinbase wallet...) and **hardware** (physical devices that store and protect your private keys) wallets.
* **Hot wallets** are very convenient, because they can be accessed via web, mobile or desktop devices, but since they are always online, they are the most vulnerable to attacks.
* For best safety **cold wallets** are reccommended (hardware devices that require physical input to unlock). They are less convenient and accessible, but provice best security.

# Building on Ethereum

## Client Server Architecture
* A client application is the one that a user is actually interacting with, that's displaying the content. A server application is the one that sends the content, or resource, to your client application.
* Main reason for this separation is to secure any sensitive information, since client application gets downloaded to the browser and that data can be accessed by anyone. With modern tools like Next.js you can run server code in the same app as client code, without needing separate server application.
* If all of the code would have to run on the client, this would make the app bloated and slow, which is why we often use APIs that send specific request to the server and in return servers process the request and send back only the specific code that they need.
* In Blockchain development we have open and compasable backends (smart contracts). Client application is in charge of aggregating and displaying all of the data that user needs to use and smart contract provides the backend to execute the necessary actions.

## Intro to Polygon
* With Ethereum blockchain gaining on popularity as the most used blockchain for smart contract projects, there was considerable network congestion and high gas fees.
* **L1 Blockchain** refers to the main blockchain layer such as Ethereum. Layer1 scaling solutions are implemented directly on the main blockchain, thus deriving the name on-chain solutions.
* **L2 Blockchains** are add-on solutions built on the base layer. Thus deriving the name off-chain scaling solution, since they intend to take away workload from the blockchain while utilizing its security.
* **Sidechains** are Ethereum-compatible independent blockchains with their own consensus model. Sidechains achieve interoperability with Ethereum by the use of the same EVM. Since they are independent from the main-chain, side chains are responsible for their own security. If a sidechain’s security is compromised, it will pose no impact to the mainchain (example Polygon).
* **Polygon** is a scaling solution that achieves scale by utilizing sidechains for off-chain computation and a decentralized network of Proof-of-Stake (PoS) validators.
* Ethereum can be slow and costly. Sidechains such as Polygon were created as a solution to speed up the blockchain while making minimal sacrifices on security and decentralization thus an improved user experience and reduced network congestion.

## Intro to Solidity
* The language used to build and deploy smart contracts on Ethereum and multiple other chains is called Solidity
* A contract in Solidity is similar to class in object oriented programming languages. It is a collection of code made up of a constructor, variables, and functions.
* General outline of a smart contract => Source code license, Solidity version, contract, contract variables and functions (getters and setters)
* Every function has a name and potential inputs, we also state the visibility of the function (public, private), whether the function modifies blockchain data or just views it and what if anything function returns after executing