export const cryptonateAbi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_endType",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_endNumber",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_minContribution",
        "type": "uint256"
      },
      {
        "internalType": "string[]",
        "name": "_projectNames",
        "type": "string[]"
      },
      {
        "internalType": "address payable",
        "name": "_charity",
        "type": "address"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "message",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "DonationGoalMet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "project",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "votes",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "DonationMade",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "message",
        "type": "string"
      }
    ],
    "name": "EmergencyOverride",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "project",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "votes",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "FundsSent",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getSecondsRemaining",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_seconds",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getCharity",
    "outputs": [
      {
        "internalType": "address",
        "name": "_charity",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_vote",
        "type": "uint256"
      }
    ],
    "name": "donate",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bool",
        "name": "_emergencyOverride",
        "type": "bool"
      }
    ],
    "name": "releaseFunds",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];