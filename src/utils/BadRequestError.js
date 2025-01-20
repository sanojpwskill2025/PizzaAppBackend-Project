const AppError = require('./appError');

class BadRequestError extends AppError {
    constructor(invalidparams){
        //invalidparams: []

        let massage = "";
        invalidparams.forEach(params => message +=`${params}\n`);

        super('The request has the following invalid parameters', 400);
            
    }
}

module.exports = BadRequestError;