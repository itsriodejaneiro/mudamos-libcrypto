Mudamos LibCripto 

Creates and manipulates seeds and wallets for Blockchain
=======

[NPM Link](https://www.npmjs.org/package/mudamos-lib-cripto)

[![NPM Package](https://img.shields.io/npm/v/@cycle/core.svg)](https://www.npmjs.org/package/mudamos-lib-cripto)

A module for [mudamos](https://github.com/itsriodejaneiro) that implements [wallets and seeds fro Blockchain](https://github.com/itsriodejaneiro/mudamos-libcrypto).

## Getting Started

This library is distributed in the npm packaging systems.

```sh
npm install mudamos-lib-criptio
```

There are many examples of how to use it on the developer guide below.

### Importing npm module

```javascript
var MudamosLibCripto = require('mudamos-lib-cripto');
```


### To CreateSeed:
```javascript
MudamosLibCripto.createSeed('ENGLISH', 'ExtraEntropy');
```
```
Parameters
    Language:  CHINESE, ENGLISH, FRENCH , ITALIAN, JAPANESE, SPANISH, BRAZILIAN-PORTUGUESE
    ExtraEntropy: Any string
Return 
    String
Obs.: Extraentroy is used to generate extra random seed
```

### To ValidateSeed:
```javascript
let result = MudamosLibCripto.validateSeed('reveal teach web swift enable ice elevator six amount piano about amused');
```
```
Parameters
    Seed:  String of 12 words
Return 
    Boolean
```


### To ValidateSeedWithLang:
```javascript
let result = MudamosLibCripto.validateSeedWithLang('ENGLISH','reveal teach web swift enable ice elevator six amount piano about amused');
```
```
Parameters
    Language:  CHINESE, ENGLISH, FRENCH , ITALIAN, JAPANESE, SPANISH, BRAZILIAN-PORTUGUESE
    Seed:  String of 12 words
Return 
    Boolean
```

### To CreateWallet:
```javascript
let wallet =  MudamosLibCripto.createWallet('reveal teach web swift enable ice elevator six amount piano about amused');
```
```
Parameters
    Seed:  String of 12 words
Return 
    PublicKey
```


### To ValidateWallet:
```javascript
let seed = 'reveal teach web swift enable ice elevator six amount piano about amused';
let publicKey = '1KeCnK8U9STYrMip1eikLpViiVPjEHdPEX';
let result =  MudamosLibCripto.validateWallet(seed,publicKey);
```
```
Parameters
    Seed:  String of 12 words
    PublicKey = Wallet Key
Return 
    Boolean
```

### To SignMessage:
```javascript
let seed = 'reveal teach web swift enable ice elevator six amount piano about amused';
let message = 'Menssage'
let result =  MudamosLibCripto.signMessage(seed,message);
```
```
Parameters
    Seed:  String of 12 words
    Message = Any words
Return 
    Signature = Encrypted text message 
```

### To VerifyMessage:
```javascript
let publicKey = '1KeCnK8U9STYrMip1eikLpViiVPjEHdPEX'
let message = 'Menssage';
let signature = 'HwLX7WYKr40ZOj0eP99LsGRv+OnkKE/6X8j8//X1RAWQcYpwXY3u9txnSCVL8ifK47rOOQfdomCd5/ltAkuyeXU=';
let result =  MudamosLibCripto.verifyMessage(publicKey, message, signature);
```
```
Parameters
    PublicKey = Wallet Key
    Message = Any words
    Signature:  Encrypted text message
Return 
    Boolean 
```

## Contributing

See [CONTRIBUTING.md](https://CONTRIBUTING.md) on the main mudamos-lib-cripto repo for information about how to contribute.

## License

Code released under [the MIT license](https://).

Copyright 2016 Mudamos.org.
