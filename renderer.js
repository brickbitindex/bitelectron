// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
alert(web3.eth.accounts[0])