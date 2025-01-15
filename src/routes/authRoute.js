const express = require('express');
const { login } = require('../controllers/authController');


//we have to initialise a router object to add routes in a new file
//Routers are used for segregating your routes in different modules

const authRouter = express.Router();
authRouter.post('/login', login); //this is a route resitration

module.exports = authRouter;  //exporting the router