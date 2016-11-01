var assert = require('assert');
var LibCripto = require('./../lib/lib-cripto');

describe('LibCripto', function () {
    this.timeout(30000);
    describe('CreateSeedAndWallet', function () {
        it('CreateSeedAndWallet With Language and ExtraEntropy', function(){
            let seedCreate = LibCripto.createSeedAndWallet('BRAZILIAN-PORTUGUESE', 'ExtraEntropy');
            assert.notEqual(seedCreate,null);
        })
          it('CreateSeedAndWallet Without Parameters', function(){
            let seedCreate = LibCripto.createSeedAndWallet();
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeedAndWallet With ExtraEntropy Undefined', function(){
            let seedCreate = LibCripto.createSeedAndWallet('BRAZILIAN-PORTUGUESE', undefined);
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeedAndWallet With Language Undefined', function(){
            let seedCreate = LibCripto.createSeedAndWallet(undefined, 'ExtraEntropy');
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeedAndWallet With ExtraEntropy Null', function(){
            try{
                let seedCreate = LibCripto.createSeedAndWallet('BRAZILIAN-PORTUGUESE', null);
            }catch(ex){
                assert.notEqual(ex.message,null);
                assert.equal(ex.message,'ExtraEntropy is set but not a string');
                assert.equal(ex.success,false);
            }
        })
        it('CreateSeedAndWallet With Language Null', function(){
            let seedCreate = LibCripto.createSeedAndWallet(null, 'ExtraEntropy');
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeedAndWallet With Language Null and ExtraEntropy Null', function(){
            try{
                let seedCreate = LibCripto.createSeedAndWallet(null, null);
            }catch(ex){
                assert.notEqual(ex.message,null);
                assert.equal(ex.message,'ExtraEntropy is set but not a string');
                assert.equal(ex.success,false);
            }
        })
        it('CreateSeedAndWallet With Language Undefined and ExtraEntropy Undefined', function(){
            let seedCreate = LibCripto.createSeedAndWallet(undefined, undefined);
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeedAndWallet With Language Number', function(){
            let seedCreate = LibCripto.createSeedAndWallet(123);
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeedAndWallet With Language Number and ExtraEntropy Number', function(){
            try{
                let seedCreate = LibCripto.createSeedAndWallet(123,1234);
            }catch(ex){
                assert.notEqual(ex.message,null);
                assert.equal(ex.message,'ExtraEntropy is set but not a string');
                assert.equal(ex.success,false);
            }
        })
    });
    describe('CreateSeed', function () {
        it('CreateSeed With Language and ExtraEntropy', function(){
            let seedCreate = LibCripto.createSeed('BRAZILIAN-PORTUGUESE', 'ExtraEntropy');
            console.log(seedCreate);
            assert.notEqual(seedCreate,null);
        })
          it('CreateSeed Without Parameters', function(){
            let seedCreate = LibCripto.createSeed();
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeed With ExtraEntropy Undefined', function(){
            let seedCreate = LibCripto.createSeed('BRAZILIAN-PORTUGUESE', undefined);
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeed With Language Undefined', function(){
            let seedCreate = LibCripto.createSeed(undefined, 'ExtraEntropy');
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeed With ExtraEntropy Null', function(){
            try{
            let seedCreate = LibCripto.createSeed('BRAZILIAN-PORTUGUESE', null);
            }catch(ex){
                assert.notEqual(ex.message,null);
                assert.equal(ex.message,'ExtraEntropy is set but not a string');
                assert.equal(ex.success,false);
            }
        })
        it('CreateSeed With Language Null', function(){
            let seedCreate = LibCripto.createSeed(null, 'ExtraEntropy');
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeed With Language Null and ExtraEntropy Null', function(){
            try{
                let seedCreate = LibCripto.createSeed(null, null);
            }catch(ex){
                assert.notEqual(ex.message,null);
                assert.equal(ex.message,'ExtraEntropy is set but not a string');
                assert.equal(ex.success,false);
            }
        })
        it('CreateSeed With Language Undefined and ExtraEntropy Undefined', function(){
            let seedCreate = LibCripto.createSeed(undefined, undefined);
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeed With Language Number', function(){
            let seedCreate = LibCripto.createSeed(123);
            assert.notEqual(seedCreate,null);
        })
        it('CreateSeed With Language Number and ExtraEntropy Number', function(){
            try{
                let seedCreate = LibCripto.createSeed(123,1234);
            }catch(ex){
                assert.notEqual(ex.message,null);
                assert.equal(ex.message,'ExtraEntropy is set but not a string');
                assert.equal(ex.success,false);
            }
        })
    });
    describe('ValidateSeed', function () {
        it('ValidateSeed With Seed', function(){
            let result = LibCripto.validateSeed('mosca decorar verificar aluno fundir orgulhoso bonus palma ninho giro mesmo substituir');
            console.log(result);
            assert.equal(result,true);
        })
        it('ValidateSeed With Null', function(){
            let result = LibCripto.validateSeed(null);
            assert.equal(result,false);
        })
        it('ValidateSeed With Undefined', function(){
            let result = LibCripto.validateSeed(undefined);
            assert.equal(result,false);
        })
         it('ValidateSeed Without Parameters', function(){
            let result = LibCripto.validateSeed();
            assert.equal(result,false);
        })
        it('ValidateSeed With 11 words', function(){
            try{
            let result = LibCripto.validateSeed('ator suave citar lago surpreendente desfiladeiro picada amigos simbolo prosperar lagosta');
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }
        })
        it('ValidateSeed With 13 words', function(){
            try{
                let result = LibCripto.validateSeed('ator suave citar lago surpreendente desfiladeiro picada amigos simbolo prosperar lagosta ok zebra');
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }

        })
        it('ValidateSeed With Number', function(){
            try{
            let result = LibCripto.validateSeed(123);
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }
        })
        it('ValidateSeed With Seed Other Parameters', function(){
            try{
            let result = LibCripto.validateSeed('AAAAAAAAAAA');
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }
        })
    });
    describe('ValidateSeedWithLang', function () {
         it('ValidateSeedWithLang With Lang and Seed', function(){
            let result = LibCripto.validateSeedWithLang('BRAZILIAN-PORTUGUESE','mosca decorar verificar aluno fundir orgulhoso bonus palma ninho giro mesmo substituir');
            assert.equal(result,true);
        })
        it('ValidateSeedWithLang With Lang Null', function(){
            let result = LibCripto.validateSeedWithLang(null,'mosca decorar verificar aluno fundir orgulhoso bonus palma ninho giro mesmo substituir');
            assert.equal(result,true);
        })
        it('ValidateSeedWithLang With Seed Null', function(){
            let result = LibCripto.validateSeedWithLang('BRAZILIAN-PORTUGUESE',null);
            assert.equal(result,false);
        })
        it('ValidateSeedWithLang With Lang Undefined', function(){
            let result = LibCripto.validateSeedWithLang(undefined);
            assert.equal(result,false);
        })
        it('ValidateSeedWithLang With Lang and Seed Undefined', function(){
            let result = LibCripto.validateSeedWithLang(undefined, undefined);
            assert.equal(result,false);
        })
        it('ValidateSeedWithLang With Lang and Seed Null', function(){
            let result = LibCripto.validateSeedWithLang(null, null);
            assert.equal(result,false);
        })
         it('ValidateSeedWithLang Without Parameters', function(){
            let result = LibCripto.validateSeedWithLang();
            assert.equal(result,false);
        })
        it('ValidateSeedWithLang With Lang and Seed 11 words', function(){
            try{
                let result = LibCripto.validateSeedWithLang('BRAZILIAN-PORTUGUESE','ator suave citar lago surpreendente desfiladeiro picada amigos simbolo prosperar lagosta');
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }
        })
        it('ValidateSeedWithLang With Lang and Seed 13 words', function(){
            try{
                let result = LibCripto.validateSeedWithLang('BRAZILIAN-PORTUGUESE','ator suave citar lago surpreendente desfiladeiro picada amigos simbolo prosperar lagosta ok zebra');
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }
        })
        it('ValidateSeedWithLang With Lang Number', function(){
            try{
                let result = LibCripto.validateSeedWithLang(3333);
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }
        })
        it('ValidateSeedWithLang With Lang Number and Seed Number', function(){
            try{
                let result = LibCripto.validateSeedWithLang(123, 123);
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }
        })
        it('ValidateSeedWithLang With Other Parameters Lang', function(){
            try{
                let result = LibCripto.validateSeedWithLang('AAAAAAAAAAA');
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }
        })
        it('ValidateSeedWithLang With Other Parameters Lang and Seed', function(){
            try{
                let result = LibCripto.validateSeedWithLang('AAAAAAAAAAA','BBBBBBBBBBBB');
            }catch(ex){
                assert.equal(ex.message,'Index out of range'); 
            }
        })
    });
    describe('CreateWallet', function () {
        it('CreateWallet With Seed', function(){
            let wallet =  LibCripto.createWallet('ator suave citar lago surpreendente desfiladeiro picada amigos simbolo prosperar lagosta ok');
            assert.equal(wallet.success,true);
            assert.equal(wallet.message,'ok');
            assert.notEqual(wallet.publicKey,'ok');
        })
        it('CreateWallet Without Seed', function(){
            try{
                let wallet =  LibCripto.createWallet();
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('CreateWallet With Seed Null', function(){
            try{
                let wallet =  LibCripto.createWallet(null);
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('CreateWallet With Seed Undefine', function(){
            try{
                let wallet =  LibCripto.createWallet(undefined);
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
    });
    describe('ValidateWallet', function () {    
        it('ValidateWallet With Seed and PublicKey', function(){
            let seed = 'ferramenta marcha batata escorpiao suspeito somente conectados obrigar qualquer humano conhecer penhasco';
            let publicKey = '1LZk8TPrt77rV6uSoaZWErtaZY1EPwsDm';
            let result =  LibCripto.validateWallet(seed,publicKey);
            assert.equal(result,true);
        })
        it('ValidateWallet With Seed Null and PublicKey Null', function(){
            let seed = null;
            let publicKey = null;
            try{
                let result =  LibCripto.validateWallet(seed,publicKey);
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('ValidateWallet With Seed Undefined and PublicKey Undefined', function(){
            let seed = undefined;
            let publicKey = undefined;
            try{
                let result =  LibCripto.validateWallet(seed,publicKey);
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('ValidateWallet With PublicKey null', function(){
            let seed = 'ferramenta marcha batata escorpiao suspeito somente conectados obrigar qualquer humano conhecer penhasco';
            let publicKey = null;
            try{
                let wallet =  LibCripto.validateWallet();
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('ValidateWallet With Seed null', function(){
            let seed = null;
            let publicKey = '1LZk8TPrt77rV6uSoaZWErtaZY1EPwsDm';
            try{
                let wallet =  LibCripto.validateWallet();
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('ValidateWallet With PublicKey undefined', function(){
            let seed = 'ferramenta marcha batata escorpiao suspeito somente conectados obrigar qualquer humano conhecer penhasco';
            let publicKey = undefined;            
            try{
                let wallet =  LibCripto.validateWallet();
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('ValidateWallet With Seed Undefine', function(){
            let seed = undefined;
            let publicKey = '1LZk8TPrt77rV6uSoaZWErtaZY1EPwsDm';            
            try{
                let wallet =  LibCripto.validateWallet();
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })        
    });
    describe('SignMessage', function () {
        it('SignMessage With Seed and Message', function(){
            let seed = 'ferramenta marcha batata escorpiao suspeito somente conectados obrigar qualquer humano conhecer penhasco';
            let message = 'Menssage'
            let result =  LibCripto.signMessage(seed,message);
            assert.notEqual(result,null);
        })
        it('SignMessage With Seed Null and Message Null', function(){
            let seed = null;
            let message = null;
            try{
                let result =  LibCripto.signMessage(seed,message);
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('SignMessage With Seed Undefined and Message Undefined', function(){
            let seed = undefined;
            let message = undefined;
            try{
                let result =  LibCripto.signMessage(seed,message);
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('SignMessage With Message null', function(){
            let seed = 'ferramenta marcha batata escorpiao suspeito somente conectados obrigar qualquer humano conhecer penhasco';
            let message = null;
            try{
                let wallet =  LibCripto.signMessage(seed,message);
            }catch(ex){
                assert.equal(ex.message,'Message can not be empty'); 
            }
        })
        it('SignMessage With Seed Null', function(){
            let seed = null;
            let message = 'Menssage'
            try{
                let wallet =  LibCripto.signMessage(seed,message);
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })
        it('SignMessage With Message Undefined', function(){
            let seed = 'ferramenta marcha batata escorpiao suspeito somente conectados obrigar qualquer humano conhecer penhasco';
            let message = undefined;            
            try{
                let wallet =  LibCripto.signMessage(seed,message);
            }catch(ex){
                assert.equal(ex.message,'Message can not be empty'); 
            }
        })
        it('SignMessage With Seed Undefined', function(){
            let seed = undefined;
            let message = 'Menssage'            
            try{
                let wallet =  LibCripto.signMessage(seed,message);
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })      
        it('SignMessage Without Parameters', function(){
            try{
                let wallet =  LibCripto.signMessage();
            }catch(ex){
                assert.equal(ex.message,'Seed can not be empty'); 
            }
        })    
    });
    describe('VerifyMessage', function () {
        it('SignMessage With PublicKey , Message and Signature Valid', function(){
            let publicKey = '1LZk8TPrt77rV6uSoaZWErtaZY1EPwsDm'
            let message = 'Menssage';
            let signature = 'H1yKwa6j5q738ueLTIjhcBzNhn4veRGKOqBGd1pYSYTGEsM8oiPqRlX1grXNWuSEH6pvqcDbuPRdm0kQD4yVen4=';
            let result =  LibCripto.verifyMessage(publicKey, message, signature);
            assert.equal(result,true);
        })
        it('SignMessage With PublicKey , Message and Signature Not Valid', function(){
            let publicKey = 'AAAAAAAAAAA'
            let message = 'Menssage';
            let signature = 'AAAAAAA';
            try{
                let result =  LibCripto.verifyMessage(publicKey, message, signature);
            }catch(ex){
                assert.equal(ex.message,'Checksum mismatch'); 
            }       
        })
        it('SignMessage With PublicKey Null', function(){
            let publicKey = null;
            let message = 'Menssage';
            let signature = 'H1yKwa6j5q738ueLTIjhcBzNhn4veRGKOqBGd1pYSYTGEsM8oiPqRlX1grXNWuSEH6pvqcDbuPRdm0kQD4yVen4=';
            try{
                let result =  LibCripto.verifyMessage(publicKey, message, signature);
            }catch(ex){
                assert.equal(ex.message,'Public Key can not be empty'); 
            }            
        })
        it('SignMessage With PublicKey Undefined', function(){
            let publicKey = undefined;
            let message = 'Menssage';
            let signature = 'H1yKwa6j5q738ueLTIjhcBzNhn4veRGKOqBGd1pYSYTGEsM8oiPqRlX1grXNWuSEH6pvqcDbuPRdm0kQD4yVen4=';
            try{
                let result =  LibCripto.verifyMessage(publicKey, message, signature);
            }catch(ex){
                assert.equal(ex.message,'Public Key can not be empty'); 
            }   
        })
        it('SignMessage With Message Null', function(){
            let publicKey = '1LZk8TPrt77rV6uSoaZWErtaZY1EPwsDm'
            let message = null;
            let signature = 'H1yKwa6j5q738ueLTIjhcBzNhn4veRGKOqBGd1pYSYTGEsM8oiPqRlX1grXNWuSEH6pvqcDbuPRdm0kQD4yVen4=';
            try{
                let result =  LibCripto.verifyMessage(publicKey, message, signature);
            }catch(ex){
                assert.equal(ex.message,'Message can not be empty'); 
            }            
        })
        it('SignMessage With Message Undefined', function(){
            let publicKey = '1LZk8TPrt77rV6uSoaZWErtaZY1EPwsDm'
            let message = undefined;
            let signature = 'H1yKwa6j5q738ueLTIjhcBzNhn4veRGKOqBGd1pYSYTGEsM8oiPqRlX1grXNWuSEH6pvqcDbuPRdm0kQD4yVen4=';
            try{
                let result =  LibCripto.verifyMessage(publicKey, message, signature);
            }catch(ex){
                assert.equal(ex.message,'Message can not be empty'); 
            }   
        })
        it('SignMessage With Signature Null', function(){
            let publicKey = '1LZk8TPrt77rV6uSoaZWErtaZY1EPwsDm'
            let message = 'Menssage';
            let signature = null;
            try{
                let result =  LibCripto.verifyMessage(publicKey, message, signature);
            }catch(ex){
                assert.equal(ex.message,'Signature can not be empty'); 
            }   
        })
        it('SignMessage With Signature Undefined', function(){
            let publicKey = '1LZk8TPrt77rV6uSoaZWErtaZY1EPwsDm'
            let message = 'Menssage';
            let signature = undefined;
            try{
                let result =  LibCripto.verifyMessage(publicKey, message, signature);
            }catch(ex){
                assert.equal(ex.message,'Signature can not be empty'); 
            }   
        })
    });
});