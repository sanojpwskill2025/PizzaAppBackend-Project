const UserRepository = require('../repositories/userRepository');
const UserServices = require('../services/userServices');

async function createUser(req, res){
     
    const userServices = new UserServices(new UserRepository());

    try{                                                
        const response = await userServices.registerUser(req.body);
        return res.json({
            message: 'Successfully registered the user',
            success: true,
            data: response,
            error: {}
        });

    }catch(error){
        return res.status(error.statusCode).json({
            success: false,
            message: error.reason,
            data: {},
            error: error
        })
    }

}


module.exports = {
    createUser
}