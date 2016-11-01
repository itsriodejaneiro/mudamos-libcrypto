var listErros = require('./errors/errors-list');
var bitcore = require('bitcore-lib');
var LibCryptoError = require('./errors/lib-crypto-error');
var Message = require('bitcore-message');
var Hash = bitcore.crypto.Hash;
var WalletModel = require('./model/wallet')

module.exports = (function(){
    function createWalletPrivate(seed) {
        if (!seed)
            throw new LibCryptoError(listErros['SeedEmptyError']);

        let value = new Buffer(seed);

        let hash = bitcore.crypto.Hash.sha256(value);

        let bn = bitcore.crypto.BN.fromBuffer(hash);

        return bitcore.PrivateKey(bn).toString();
    }

    class Wallet {

        constructor() {}

        static createWallet(seed) {
            if (!seed)
                throw new LibCryptoError(listErros['SeedEmptyError']);

            let value = new Buffer(seed);

            let hash = bitcore.crypto.Hash.sha256(value);

            let bn = bitcore.crypto.BN.fromBuffer(hash);

            let result = new WalletModel(bitcore.PrivateKey(bn).toAddress().toString());

            return result;
        }

        static signMessage(seed, message) {
            if (!seed)
                throw new LibCryptoError(listErros['SeedEmptyError']);
            if (!message)
                throw new LibCryptoError(listErros['MessageEmptyError']);

            let privateKey = bitcore.PrivateKey.fromWIF(createWalletPrivate(seed));

            let signature = Message(message).sign(privateKey);

            return signature;
        }

        static verifyMessage(publicKey, message, signature) {
            if (!publicKey)
                throw new LibCryptoError(listErros['PublicKeyEmptyError']);

            if (!message)
                throw new LibCryptoError(listErros['MessageEmptyError']);

            if (!signature)
                throw new LibCryptoError(listErros['SignatureEmptyError']);

            var verified = Message(message).verify(publicKey, signature);

            return verified;
        }

        static validateWallet(seed, publicKey){
            let wallet = Wallet.createWallet(seed).publicKey;   
            let result = wallet == publicKey ? true : false;
            return result;
        }
    }
    return Wallet;
})();
