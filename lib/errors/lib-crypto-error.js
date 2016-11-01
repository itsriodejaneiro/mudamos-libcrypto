class ExtendableError extends Error {
    constructor(message){
        super(message);

        this.name = this.constructor.name;
        this.message = message; 

        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else { 
            this.stack = (new Error(message)).stack; 
        }
    }
}

class LibCryptoError extends ExtendableError {
  constructor(message, exeption) {   
    super(message);
    
    this.success = false;
  }
}

module.exports = LibCryptoError;
