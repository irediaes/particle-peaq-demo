export const didPrecompiledContractAddress = "0x0000000000000000000000000000000000000800";


export const contractABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "did_account",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "name",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "value",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "validity",
                "type": "uint32"
            }
        ],
        "name": "AddAttribute",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "did_account",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "name",
                "type": "bytes"
            }
        ],
        "name": "RemoveAttribte",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "did_account",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "name",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "value",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "validity",
                "type": "uint32"
            }
        ],
        "name": "UpdateAttribute",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "did_account",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "name",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "value",
                "type": "bytes"
            },
            {
                "internalType": "uint32",
                "name": "validity_for",
                "type": "uint32"
            }
        ],
        "name": "addAttribute",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "did_account",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "name",
                "type": "bytes"
            }
        ],
        "name": "readAttribute",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "bytes",
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "value",
                        "type": "bytes"
                    },
                    {
                        "internalType": "uint32",
                        "name": "validity",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint256",
                        "name": "created",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct DID.Attribute",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "did_account",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "name",
                "type": "bytes"
            }
        ],
        "name": "removeAttribute",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "did_account",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "name",
                "type": "bytes"
            },
            {
                "internalType": "bytes",
                "name": "value",
                "type": "bytes"
            },
            {
                "internalType": "uint32",
                "name": "validity_for",
                "type": "uint32"
            }
        ],
        "name": "updateAttribute",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];