var SeedLib = require('./seed');
var WalletLib = require('./wallet');


class LibCrypto {

    constructor() { }

    static createSeedAndWallet(lang, extraEntropy){
        return SeedLib.createSeedAndWallet(lang, extraEntropy);
    }

    static createSeed(lang, extraEntropy) {
        return SeedLib.generateRandomSeed(lang, extraEntropy);
    }

    static validateSeed(seed) {
        return SeedLib.validateSeed(seed);
    }

    static validateSeedWithLang(lang, seed) {
        return SeedLib.validateSeedWithLang(lang, seed);
    }

    static createWallet(seed) {
        return WalletLib.createWallet(seed);
    }

    static validateWallet(seed, publicKey) {
        return WalletLib.validateWallet(seed, publicKey);
    }

    static signMessage(seed, message) {
        return WalletLib.signMessage(seed, message);
    }

    static verifyMessage(publicKey, message, signature) {
        return WalletLib.verifyMessage(publicKey, message, signature);
    }
}

module.exports = LibCrypto;