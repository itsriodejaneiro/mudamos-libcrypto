var crypto = require('crypto');

var default_strength = 5;

module.exports = exports = function generateHashCash (challenge, strength) {
    if (!strength) {
        strength = default_strength;
    }

    var search = countZeros('0', strength)
    var separator = ';'
    //var nonce = parseInt(Math.random() * 0xFFFFFFFF); // nonce from random number
    var cycles = 0; // nonce from zero
    var attempt;

    function mine() {
        attempt = challenge + separator + cycles++; // can alter cycles for nonce. Use one or another. 
        return exports.check(challenge, strength, attempt, search) ? attempt : null;
    }

    var ret;
    do {
        ret = mine();
    }
    while (!ret);
    return ret;
};

exports.check = function checkHashCash (challenge, strength, hashcash, search) {
    if (typeof strength === 'string') {
        hashcash = strength;
        strength = default_strength;
    }
    else {
        strength || (strength = default_strength);
    }
    if (!search) search = countZeros('0', strength); // check the number of zeros in front of the sha256
    return (hashcash.indexOf(challenge) === 0 && sha2(hashcash).indexOf(search) === 0);
};

function countZeros(input, length) {
    var ret = '';
    for (var i = 0; i < length; i++) {
        ret += input;
    }
    return ret;
}

function sha2 (input) {
    return crypto.createHash('sha256')
        .update(input)
        .digest('hex');
}
