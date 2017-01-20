var listErros = require('./errors/errors-list');
var bitcoin = require('bitcoinjs-lib');
var LibCryptoError = require('./errors/lib-crypto-errors');
var Random = require('./random');
var Hash = bitcoin.crypto;
var bip39 = require('bip39');
var WalletLib = require('./wallet');
var WalletSeedModel = require('./model/wallet-seed')

var wordLists = {
  ptBR: require('./brazilian-portuguese-bip39.json')
}

module.exports = (function () {

    function concatAndSha256(entropyBuf0, entropyBuf1) {
        let totalEnt = Buffer.concat([entropyBuf0, entropyBuf1]);

        if (totalEnt.length !== entropyBuf0.length + entropyBuf1.length)
            throw new LibCryptoError(listErros['GenerateRandomSeedError']);

        let hashedEnt = Hash.sha256(totalEnt);

        return hashedEnt;
    };

    class Seed {

        constructor() { }

        static generateRandomSeed(lang, extraEntropy) {
            let seed = '';
            let wordList = lang == 'BRAZILIAN-PORTUGUESE' ? wordLists.ptBR : '';

            if (extraEntropy === undefined) {

                var rng = function(size) {
                    var buffer = new Buffer(size)
                    buffer.fill(4) // guaranteed random
                    return buffer
                }

                let entBuf = new Buffer(rng);
                let randBuf = Random.getRandomBuffer(256 / 8);
                let hashedEnt = concatAndSha256(randBuf, entBuf).slice(0, 128 / 8); // generates random entropy

                seed = bip39.entropyToMnemonic(hashedEnt, wordList) // create new seed 

            }
            else if (typeof extraEntropy === 'string') {
                let entBuf = new Buffer(extraEntropy);
                let randBuf = Random.getRandomBuffer(256 / 8);
                let hashedEnt = concatAndSha256(randBuf, entBuf).slice(0, 128 / 8); // generates entropy from parameter

                seed = bip39.entropyToMnemonic(hashedEnt, wordList) // create new seed

            }
            else {
                throw new LibCryptoError(listErros['ExtraEntropyError']);
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

        static validateSeedWithLang(lang, mnemonic) {
            let wordList = lang == 'BRAZILIAN-PORTUGUESE' ? wordLists.ptBR : '';
            return bip39.validateMnemonic(mnemonic, wordList);
        }

        static validateSeed(mnemonic) {
            return bip39.validateMnemonic(mnemonic, wordLists.ptBR);
        }
    }

    return Seed;
})();
