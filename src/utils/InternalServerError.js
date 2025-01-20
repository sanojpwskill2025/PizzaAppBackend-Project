const AppError = require('./appError');

class InternalServerError extends AppError {
    constructor(){
        super(`It is not you it is our server where something wet wrong`, 500);
    }
}

module.exports = InternalServerError;