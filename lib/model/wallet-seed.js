var Base = require('./base');

class Wallet extends Base {
    constructor(publicKey, seed){
        super('ok',true);
        this.publicKey = publicKey;
        this.seed = seed;     
    }
}

module.exports = Wallet;
