let voteAbi = [
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "addr",
				"type": "address[]"
			}
		],
		"name": "doKickOutVIPLevel",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "byVoterAddrs",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "byVoterNum",
				"type": "uint256[]"
			}
		],
		"name": "doVote",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "ticketAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "dividendsAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "callContractAddr",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address[]",
				"name": "addrs",
				"type": "address[]"
			},
			{
				"indexed": true,
				"internalType": "uint256[]",
				"name": "idList",
				"type": "uint256[]"
			},
			{
				"indexed": true,
				"internalType": "address[]",
				"name": "kickOutList",
				"type": "address[]"
			}
		],
		"name": "LogKickOutVIPLevel",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "voterAddr",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "totalVoteNum",
				"type": "uint256"
			}
		],
		"name": "LogVote",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "withdrawAddr",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "withdrawNum",
				"type": "uint256"
			}
		],
		"name": "LogWithdraw",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "stopContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "_callContractAddr",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_diviAddr",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_stoped",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_ticketAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_voteContractAddr",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bigPrizePoolCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fuseTime",
				"type": "uint256"
			}
		],
		"name": "getKickOutVipLevelList",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bigPrizePoolCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fuseTime",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getKickOutVipLevels",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bigPrizePoolCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fuseTime",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getTotalVoteNum",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "bigPoolCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fuseTime",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "byVoteAddrs",
				"type": "address[]"
			}
		],
		"name": "getVoteInfo",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];