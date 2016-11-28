var Base = require('./base');

class Wallet extends Base {
    constructor(publicKey){
        super('ok',true);
        this.publicKey = publicKey;        
    }
}

module.exports = Wallet;
