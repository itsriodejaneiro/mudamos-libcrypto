var listErros = require('./errors/errors-list');
var brazilian_portuguese = require('./brazilian_portuguese')
var bitcore = require('bitcore-lib');
var LibCriptoError = require('./errors/lib-cripto-error');
var Random = bitcore.crypto.Random;
var Hash = bitcore.crypto.Hash;
var Mnemonic = require('bitcore-mnemonic');
var WalletLib = require('./wallet');
var WalletSeedModel = require('./model/wallet-seed')
module.exports = (function () {

    function concatAndSha256(entropyBuf0, entropyBuf1) {
        let totalEnt = Buffer.concat([entropyBuf0, entropyBuf1]);

        if (totalEnt.length !== entropyBuf0.length + entropyBuf1.length)
            throw new LibCriptoError(listErros['GenerateRandomSeedError']);

        let hashedEnt = Hash.sha256(totalEnt);

        return hashedEnt;
    };

    class Seed {

        constructor() { }

        static generateRandomSeed(lang, extraEntropy) {
            let seed = '';
            let wordList = lang == 'BRAZILIAN-PORTUGUESE' ? brazilian_portuguese : Mnemonic.Words[lang];

            if (extraEntropy === undefined) {
                seed = new Mnemonic(wordList);
            }
            else if (typeof extraEntropy === 'string') {
                let entBuf = new Buffer(extraEntropy);
                let randBuf = Random.getRandomBuffer(256 / 8);
                let hashedEnt = concatAndSha256(randBuf, entBuf).slice(0, 128 / 8);
                seed = new Mnemonic(hashedEnt, wordList);
            }
            else {
                throw new LibCriptoError(listErros['ExtraEntropyError']);
            }

            return seed.toString();
        }

        static createSeedAndWallet(lang, extraEntropy) {
            try {
                let seed = Seed.generateRandomSeed(lang, extraEntropy);
                let wallet = WalletLib.createWallet(seed);
                let result = new WalletSeedModel(wallet.publicKey, seed);
                return result;
            } catch (ex) {
                throw ex;
            }
        }

        static validateSeedWithLang(lang, seed) {
            let _lang = lang || 'BRAZILIAN-PORTUGUESE'
            let wordList = _lang == 'BRAZILIAN-PORTUGUESE' ? brazilian_portuguese : Mnemonic.Words[lang];
            return Mnemonic.isValid(seed, wordList);
        }

        static validateSeed(seed) {
            return Mnemonic.isValid(seed, brazilian_portuguese);
        }
    }

    return Seed;
})();
