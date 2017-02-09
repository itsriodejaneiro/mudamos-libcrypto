var listErros = require('./errors/errors-list');
var bitcoin = require('bitcoinjs-lib');
var bigi = require('bigi');
var LibCryptoError = require('./errors/lib-crypto-errors');
var BitcoinMessage = require('bitcoinjs-message');
var Hash = bitcoin.crypto;
var WalletModel = require('./model/wallet');
var proofofwork = require('./pow');

module.exports = (function(){

    function createWalletPrivate(seed) {
        if (!seed)
            throw new LibCryptoError(listErros['SeedEmptyError']);

        let value = new Buffer(seed);
        let hash = bitcoin.crypto.sha256(seed); // transform the seed on a sha256 hash
        let d = bigi.fromBuffer(hash);

        let keyPair = new bitcoin.ECPair(d); // create the private key
        let wif = keyPair.toWIF(); // export the private key to wif format

        return wif;
    }

    class Wallet {

        constructor() {}

        static createWallet(seed) {
            if (!seed)
                throw new LibCryptoError(listErros['SeedEmptyError']);

            let hash = bitcoin.crypto.sha256(seed);
            let d = bigi.fromBuffer(hash);

            let keyPair = new bitcoin.ECPair(d);
            let result = new WalletModel(keyPair.getAddress()); // get the wallet address

            return result;
        }

        static signMessage(seed, message, difficulty) {
            if (!seed)
                throw new LibCryptoError(listErros['SeedEmptyError']);
            
            if (!message)
                throw new LibCryptoError(listErros['MessageEmptyError']);    

            let value = new Buffer(seed);
            let hash = bitcoin.crypto.sha256(seed);
            let d = bigi.fromBuffer(hash);

            let keyPair = new bitcoin.ECPair(d);
            let wallet = new WalletModel(keyPair.getAddress()); // get the wallet address from seed

            let keyPair2 = bitcoin.ECPair.fromWIF(createWalletPrivate(seed));
            let privateKey = keyPair2.d.toBuffer(32); // get the private address from seed

            let messagePrefix = bitcoin.networks.bitcoin.messagePrefix;
            let signature = BitcoinMessage.sign(message, messagePrefix, privateKey, keyPair.compressed); //sign the message
            let concatMessage = message + ';' + wallet.publicKey + ';' + signature.toString('base64');

            let block = proofofwork(concatMessage, difficulty); // do a proof-of-work on string message

            return block;
        }

        static verifyMessage(address, message, signature) {
            if (!address)
                throw new LibCryptoError(listErros['PublicKeyEmptyError']);

            if (!message)
                throw new LibCryptoError(listErros['MessageEmptyError']);

            if (!signature)
                throw new LibCryptoError(listErros['SignatureEmptyError']);

            let messagePrefix = bitcoin.networks.bitcoin.messagePrefix;
            
            let verified = BitcoinMessage.verify(message, messagePrefix, address, signature); // verify if the digital signature is valid

            return verified;
        }

        static validateWallet(seed, publicKey){

            let wallet = Wallet.createWallet(seed).publicKey;   

            let result = wallet == publicKey ? true : false;

            return result;
        }

        static mineMessage(message, difficulty){

            let result = proofofwork(message,difficulty);

            return result;
        }

        static checkMinedMessage(message, difficulty, block){

            let result = proofofwork.check(message, difficulty, block);

            return result;
        }
    }
    return Wallet;
})();
