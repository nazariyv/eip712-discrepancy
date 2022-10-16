const { Wallet } = require("@ethersproject/wallet");
const { _TypedDataEncoder } = require("@ethersproject/hash");

console.log("EIP-712 JS");

// ! this is a test private key, DO NOT USE IT
const privKey = '0x0123456789012345678901234567890123456789012345678901234567890123';
const signer = new Wallet(privKey);
console.log("Signer is: ", signer.address);

const domain = {
    name: '',
    chainId: 0,
    verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
    version: ''
};

const types = {
    Player: [
        { name: 'wallet', type: 'address' },
        { name: 'email', type: 'string' }
    ],
    Message: [
        { name: 'player', type: 'Player' },
    ]
};

const value = {
    player: { 
        wallet: "0x14791697260E4c9A71f18484C9f997B308e59325",
        email: "steve@jobs.com",
    }
};

signer._signTypedData(
    domain,
    types,
    value
).then(signature => {
    console.log("Signature is: ", signature);
}).catch(e => {
    console.log("Something went wrong", e);
});
