require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remember coin gesture pet swap giant'; 
let testAccounts = [
"0xcdbbb679dbe65e25dade4ab3eb6934ec5c6132e9bc221cf39a9fa63a06268990",
"0xd32f4cca82a46423f0f69661b5deb4a35448a353446eb99cbff3ca16616f4b98",
"0xf077f7bcb08dc35008a9617da7fb25508f5dcc9d29fbddad6de52fbb4abe8144",
"0xfaa427b1768506934f743ab8f482d0988bd1f83063aa998829998e65f11d7a6e",
"0xe721bb45b680d687f206c5a0e66facba770ffcc0fbad01032a686b6097386852",
"0x9fc9739e88dfebf2d3b41520997ef4287b22f5f5b68993e912f71ef2889a767e",
"0x8bd01b51295594ea74f1970cf1772f563cd159dfbb71de696dd4bb305f11b678",
"0x302e1b0357f5dcb25f10515f526a7d2993f9854fc85de918e6575e5cf4c11228",
"0x1148ea5c9d94ed1a64e69e874ad7c19d5451b78cd66e563f4be9fbdf4a28f004",
"0xcae431fdd58e6ceebb804f76e41b3f8e0fcbc5ebbcb2df6ed341ccf6fc0137ad"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


