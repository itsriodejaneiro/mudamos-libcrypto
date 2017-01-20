var assert = require('assert');
var LibCrypto = require('./../lib/lib-crypto');

describe('LibCrypto', function () {
    this.timeout(60000);
    describe('CreateSeedAndWallet', function () {
        it('CreateSeedAndWallet With Language and ExtraEntropy', function(){
            let seedCreate = LibCrypto.createSeedAndWallet('BRAZILIAN-PORTUGUESE', 'ExtraEntropy');
            assert.notEqual(seedCreate,null);
        })
          it('CreateSeedAndWallet Without Parameters', function(){
            let seedCreate = LibCrypto.createSeedAndWallet();
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeedAndWallet With ExtraEntropy Undefined', function(){
            let seedCreate = LibCrypto.createSeedAndWallet('BRAZILIAN-PORTUGUESE', undefined);
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeedAndWallet With Language Undefined', function(){
            let seedCreate = LibCrypto.createSeedAndWallet(undefined, 'ExtraEntropy');
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeedAndWallet With ExtraEntropy Null', function(){
            try{
                let seedCreate = LibCrypto.createSeedAndWallet('BRAZILIAN-PORTUGUESE', null);
            }catch(ex){
                assert.notEqual(ex.message,null);
                assert.equal(ex.message,'ExtraEntropy is set but not a string');
                assert.equal(ex.success,false);
            }
        })
        it('CreateSeedAndWallet With Language Null', function(){
            let seedCreate = LibCrypto.createSeedAndWallet(null, 'ExtraEntropy');
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeedAndWallet With Language Null and ExtraEntropy Null', function(){
            try{
                let seedCreate = LibCrypto.createSeedAndWallet(null, null);
            }catch(ex){
                assert.notEqual(ex.message,null);
                assert.equal(ex.message,'ExtraEntropy is set but not a string');
                assert.equal(ex.success,false);
            }
        })
        it('CreateSeedAndWallet With Language Undefined and ExtraEntropy Undefined', function(){
            let seedCreate = LibCrypto.createSeedAndWallet(undefined, undefined);
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeedAndWallet With Language Number', function(){
            let seedCreate = LibCrypto.createSeedAndWallet(123);
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeedAndWallet With Language Number and ExtraEntropy Number', function(){
            try{
                let seedCreate = LibCrypto.createSeedAndWallet(123,1234);
            }catch(ex){
                assert.notEqual(ex.message,null);
                assert.equal(ex.message,'ExtraEntropy is set but not a string');
                assert.equal(ex.success,false);
            }
        })
    });
    describe('CreateSeed', function () {
        it('CreateSeed With Language and ExtraEntropy', function(){
            let seedCreate = LibCrypto.createSeed('BRAZILIAN-PORTUGUESE', 'ExtraEntropy');
            assert.notEqual(seedCreate,null);
        })
          it('CreateSeed Without Parameters', function(){
            let seedCreate = LibCrypto.createSeed();
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeed With ExtraEntropy Undefined', function(){
            let seedCreate = LibCrypto.createSeed('BRAZILIAN-PORTUGUESE', undefined);
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeed With Language Undefined', function(){
            let seedCreate = LibCrypto.createSeed(undefined, 'ExtraEntropy');
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeed With ExtraEntropy Null', function(){
            try{
            let seedCreate = LibCrypto.createSeed('BRAZILIAN-PORTUGUESE', null);
            }catch(ex){
                assert.notEqual(ex.message,null);
                assert.equal(ex.message,'ExtraEntropy is set but not a string');
                assert.equal(ex.success,false);
            }
        })
        it('CreateSeed With Language Null', function(){
            let seedCreate = LibCrypto.createSeed(null, 'ExtraEntropy');
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeed With Language Null and ExtraEntropy Null', function(){
            try{
                let seedCreate = LibCrypto.createSeed(null, null);
            }catch(ex){
                assert.notEqual(ex.message,null);
                assert.equal(ex.message,'ExtraEntropy is set but not a string');
                assert.equal(ex.success,false);
            }
        })
        it('CreateSeed With Language Undefined and ExtraEntropy Undefined', function(){
            let seedCreate = LibCrypto.createSeed(undefined, undefined);
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeed With Language Number', function(){
            let seedCreate = LibCrypto.createSeed(123);
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeed With Language Number and ExtraEntropy Number', function(){
            try{
                let seedCreate = LibCrypto.createSeed(123,1234);
            }catch(ex){
                assert.notEqual(ex.message,null);
                assert.equal(ex.message,'ExtraEntropy is set but not a string');
                assert.equal(ex.success,false);
            }
        })
    });
    describe('ValidateSeed', function () {
        it('ValidateSeed With Seed', function(){
            let result = LibCrypto.validateSeed('mosca decorar verificar aluno fundir orgulhoso bonus palma ninho giro mesmo substituir');
            assert.equal(result,true);
        })
        it('ValidateSeed With Null', function(){
            let result = LibCrypto.validateSeed(null);
            assert.equal(result,false);
        })
        it('ValidateSeed With Undefined', function(){
            let result = LibCrypto.validateSeed(undefined);
            assert.equal(result,false);
        })
         it('ValidateSeed Without Parameters', function(){
            let result = LibCrypto.validateSeed();
            assert.equal(result,false);
        })
        it('ValidateSeed With 11 words', function(){
            try{
            let result = LibCrypto.validateSeed('ator suave citar lago surpreendente desfiladeiro picada amigos simbolo prosperar lagosta');
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }
        })
        it('ValidateSeed With 13 words', function(){
            try{
                let result = LibCrypto.validateSeed('ator suave citar lago surpreendente desfiladeiro picada amigos simbolo prosperar lagosta ok zebra');
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }

        })
        it('ValidateSeed With Number', function(){
            try{
            let result = LibCrypto.validateSeed(123);
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }
        })
        it('ValidateSeed With Seed Other Parameters', function(){
            try{
            let result = LibCrypto.validateSeed('AAAAAAAAAAA');
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }
        })
    });
    describe('ValidateSeedWithLang', function () {
         it('ValidateSeedWithLang With Lang and Seed', function(){
            let result = LibCrypto.validateSeedWithLang('BRAZILIAN-PORTUGUESE','mosca decorar verificar aluno fundir orgulhoso bonus palma ninho giro mesmo substituir');
            assert.equal(result,true);
        })
        it('ValidateSeedWithLang With Lang Null', function(){
            let result = LibCrypto.validateSeedWithLang(null,'afford drill tuition fancy wrong couch camera arch truly win merge fence');
            assert.equal(result,true);
        })
        it('ValidateSeedWithLang With Seed Null', function(){
            let result = LibCrypto.validateSeedWithLang('BRAZILIAN-PORTUGUESE',null);
            assert.equal(result,false);
        })
        it('ValidateSeedWithLang With Lang Undefined', function(){
            let result = LibCrypto.validateSeedWithLang(undefined);
            assert.equal(result,false);
        })
        it('ValidateSeedWithLang With Lang and Seed Undefined', function(){
            let result = LibCrypto.validateSeedWithLang(undefined, undefined);
            assert.equal(result,false);
        })
        it('ValidateSeedWithLang With Lang and Seed Null', function(){
            let result = LibCrypto.validateSeedWithLang(null, null);
            assert.equal(result,false);
        })
         it('ValidateSeedWithLang Without Parameters', function(){
            let result = LibCrypto.validateSeedWithLang();
            assert.equal(result,false);
        })
        it('ValidateSeedWithLang With Lang and Seed 11 words', function(){
            try{
                let result = LibCrypto.validateSeedWithLang('BRAZILIAN-PORTUGUESE','ator suave citar lago surpreendente desfiladeiro picada amigos simbolo prosperar lagosta');
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }
        })
        it('ValidateSeedWithLang With Lang and Seed 13 words', function(){
            try{
                let result = LibCrypto.validateSeedWithLang('BRAZILIAN-PORTUGUESE','ator suave citar lago surpreendente desfiladeiro picada amigos simbolo prosperar lagosta ok zebra');
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }
        })
        it('ValidateSeedWithLang With Lang Number', function(){
            try{
                let result = LibCrypto.validateSeedWithLang(3333);
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }
        })
        it('ValidateSeedWithLang With Lang Number and Seed Number', function(){
            try{
                let result = LibCrypto.validateSeedWithLang(123, 123);
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }
        })
        it('ValidateSeedWithLang With Other Parameters Lang', function(){
            try{
                let result = LibCrypto.validateSeedWithLang('AAAAAAAAAAA');
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }
        })
        it('ValidateSeedWithLang With Other Parameters Lang and Seed', function(){
            try{
                let result = LibCrypto.validateSeedWithLang('AAAAAAAAAAA','BBBBBBBBBBBB');
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }
        })
    });
    describe('CreateWallet', function () {
        it('CreateWallet With Seed', function(){
            let wallet =  LibCrypto.createWallet('ator suave citar lago surpreendente desfiladeiro picada amigos simbolo prosperar lagosta ok');
            assert.equal(wallet.success,true);
            assert.equal(wallet.message,'ok');
            assert.equal(wallet.publicKey,'1NtGiFUb7Wr11pWputYr8fqJoctWi1NUUy');
        })
        it('CreateWallet Without Seed', function(){
            try{
                let wallet =  LibCrypto.createWallet();
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('CreateWallet With Seed Null', function(){
            try{
                let wallet =  LibCrypto.createWallet(null);
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('CreateWallet With Seed Undefine', function(){
            try{
                let wallet =  LibCrypto.createWallet(undefined);
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
    });
    describe('ValidateWallet', function () {    
        it('ValidateWallet With Seed and PublicKey', function(){
            let seed = 'ferramenta marcha batata escorpiao suspeito somente conectados obrigar qualquer humano conhecer penhasco';
            let publicKey = '1LZk8TPrt77rV6uSoaZWErtaZY1EPwsDm';
            let result =  LibCrypto.validateWallet(seed,publicKey);
            assert.equal(result,true);
        })
        it('ValidateWallet With Seed Null and PublicKey Null', function(){
            let seed = null;
            let publicKey = null;
            try{
                let result =  LibCrypto.validateWallet(seed,publicKey);
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('ValidateWallet With Seed Undefined and PublicKey Undefined', function(){
            let seed = undefined;
            let publicKey = undefined;
            try{
                let result =  LibCrypto.validateWallet(seed,publicKey);
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('ValidateWallet With PublicKey null', function(){
            let seed = 'ferramenta marcha batata escorpiao suspeito somente conectados obrigar qualquer humano conhecer penhasco';
            let publicKey = null;
            try{
                let wallet =  LibCrypto.validateWallet();
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('ValidateWallet With Seed null', function(){
            let seed = null;
            let publicKey = '1LZk8TPrt77rV6uSoaZWErtaZY1EPwsDm';
            try{
                let wallet =  LibCrypto.validateWallet();
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('ValidateWallet With PublicKey undefined', function(){
            let seed = 'ferramenta marcha batata escorpiao suspeito somente conectados obrigar qualquer humano conhecer penhasco';
            let publicKey = undefined;            
            try{
                let wallet =  LibCrypto.validateWallet();
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('ValidateWallet With Seed Undefined', function(){
            let seed = undefined;
            let publicKey = '1LZk8TPrt77rV6uSoaZWErtaZY1EPwsDm';            
            try{
                let wallet =  LibCrypto.validateWallet();
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })        
    });
    describe('SignMessage', function () {
        it('SignMessage With Seed and Message', function(){
            let seed = 'ferramenta marcha batata escorpiao suspeito somente conectados obrigar qualquer humano conhecer penhasco';
            let message = 'Nome do usuario;Endereco do usuario;Titulo de Eleitor;20161201';
            let difficulty = 2;
            let result =  LibCrypto.signMessage(seed,message, difficulty);
            assert.notEqual(result,null);
        })
        it('SignMessage With Seed Null and Message Null', function(){
            let seed = null;
            let message = null;
            try{
                let result =  LibCrypto.signMessage(seed,message);
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('SignMessage With Seed Undefined and Message Undefined', function(){
            let seed = undefined;
            let message = undefined;
            try{
                let result =  LibCrypto.signMessage(seed,message);
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('SignMessage With Message null', function(){
            let seed = 'ferramenta marcha batata escorpiao suspeito somente conectados obrigar qualquer humano conhecer penhasco';
            let message = null;
            try{
                let wallet =  LibCrypto.signMessage(seed,message);
            }catch(ex){
                assert.equal(ex.message,'Message can not be empty'); 
            }
        })
        it('SignMessage With Seed Null', function(){
            let seed = null;
            let message = 'Message'
            try{
                let wallet =  LibCrypto.signMessage(seed,message);
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('SignMessage With Message Undefined', function(){
            let seed = 'ferramenta marcha batata escorpiao suspeito somente conectados obrigar qualquer humano conhecer penhasco';
            let message = undefined;            
            try{
                let wallet =  LibCrypto.signMessage(seed,message);
            }catch(ex){
                assert.equal(ex.message,'Message can not be empty'); 
            }
        })
        it('SignMessage With Seed Undefined', function(){
            let seed = undefined;
            let message = 'Message'            
            try{
                let wallet =  LibCrypto.signMessage(seed,message);
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })      
        it('SignMessage Without Parameters', function(){
            try{
                let wallet =  LibCrypto.signMessage();
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })    
    });
    describe('VerifyMessage', function () {
        it('SignMessage With PublicKey , Message and Signature Valid', function(){
            let publicKey = '1LZk8TPrt77rV6uSoaZWErtaZY1EPwsDm'
            let message = 'Nome do usuario;Endereco do usuario;Titulo de Eleitor;20161201';
            let signature = 'ILv3yBAj5pyIcBMtNQxA+kNukVlJMY7al0vDb2T/T/bWS/NuqbaSZyJ/zbR17jm/kYOM4yuUsfdOQ9bh69V0Zyo=';
            let result =  LibCrypto.verifyMessage(publicKey, message, signature);
            assert.equal(result,true);
        })
        it('SignMessage With PublicKey , Message and Signature Not Valid', function(){
            let publicKey = 'AAAAAAAAAAA'
            let message = 'Message';
            let signature = 'AAAAAAA';
            try{
                let result =  LibCrypto.verifyMessage(publicKey, message, signature);
            }catch(ex){
                assert.equal(ex.message,'Invalid signature length'); 
            }       
        })
        it('SignMessage With PublicKey Null', function(){
            let publicKey = null;
            let message = 'Message';
            let signature = 'H1yKwa6j5q738ueLTIjhcBzNhn4veRGKOqBGd1pYSYTGEsM8oiPqRlX1grXNWuSEH6pvqcDbuPRdm0kQD4yVen4=';
            try{
                let result =  LibCrypto.verifyMessage(publicKey, message, signature);
            }catch(ex){
                assert.equal(ex.message,'Public Key can not be empty'); 
            }            
        })
        it('SignMessage With PublicKey Undefined', function(){
            let publicKey = undefined;
            let message = 'Message';
            let signature = 'H1yKwa6j5q738ueLTIjhcBzNhn4veRGKOqBGd1pYSYTGEsM8oiPqRlX1grXNWuSEH6pvqcDbuPRdm0kQD4yVen4=';
            try{
                let result =  LibCrypto.verifyMessage(publicKey, message, signature);
            }catch(ex){
                assert.equal(ex.message,'Public Key can not be empty'); 
            }   
        })
        it('SignMessage With Message Null', function(){
            let publicKey = '1LZk8TPrt77rV6uSoaZWErtaZY1EPwsDm'
            let message = null;
            let signature = 'H1yKwa6j5q738ueLTIjhcBzNhn4veRGKOqBGd1pYSYTGEsM8oiPqRlX1grXNWuSEH6pvqcDbuPRdm0kQD4yVen4=';
            try{
                let result =  LibCrypto.verifyMessage(publicKey, message, signature);
            }catch(ex){
                assert.equal(ex.message,'Message can not be empty'); 
            }            
        })
        it('SignMessage With Message Undefined', function(){
            let publicKey = '1LZk8TPrt77rV6uSoaZWErtaZY1EPwsDm'
            let message = undefined;
            let signature = 'H1yKwa6j5q738ueLTIjhcBzNhn4veRGKOqBGd1pYSYTGEsM8oiPqRlX1grXNWuSEH6pvqcDbuPRdm0kQD4yVen4=';
            try{
                let result =  LibCrypto.verifyMessage(publicKey, message, signature);
            }catch(ex){
                assert.equal(ex.message,'Message can not be empty'); 
            }   
        })
        it('SignMessage With Signature Null', function(){
            let publicKey = '1LZk8TPrt77rV6uSoaZWErtaZY1EPwsDm'
            let message = 'Message';
            let signature = null;
            try{
                let result =  LibCrypto.verifyMessage(publicKey, message, signature);
            }catch(ex){
                assert.equal(ex.message,'Signature can not be empty'); 
            }   
        })
        it('SignMessage With Signature Undefined', function(){
            let publicKey = '1LZk8TPrt77rV6uSoaZWErtaZY1EPwsDm'
            let message = 'Message';
            let signature = undefined;
            try{
                let result =  LibCrypto.verifyMessage(publicKey, message, signature);
            }catch(ex){
                assert.equal(ex.message,'Signature can not be empty'); 
            }   
        })
        it('Mine a block from a signed message', function(){
            let message = 'Nome do usuario;Endereco do usuario;Titulo de Eleitor;20161201;1LZk8TPrt77rV6uSoaZWErtaZY1EPwsDm;H1yKwa6j5q738ueLTIjhcBzNhn4veRGKOqBGd1pYSYTGEsM8oiPqRlX1grXNWuSEH6pvqcDbuPRdm0kQD4yVen4=';
            let difficulty = 3;
            let block =  LibCrypto.mineMessage(message,difficulty);
            assert.notEqual(block,null);
        })
        it('Check mined block from a signed message', function(){
            let message = 'Nome do usuario;Endereco do usuario;Titulo de Eleitor;20161201;1LZk8TPrt77rV6uSoaZWErtaZY1EPwsDm;H1yKwa6j5q738ueLTIjhcBzNhn4veRGKOqBGd1pYSYTGEsM8oiPqRlX1grXNWuSEH6pvqcDbuPRdm0kQD4yVen4=';
            let difficulty = 3;
            let block = LibCrypto.mineMessage(message,difficulty);
            let result =  LibCrypto.checkMinedMessage(message,difficulty,block);
            assert.equal(result, true);
        })
    });
});
