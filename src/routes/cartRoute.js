const express = require('express');
const { getCartById } = require('../controllers/cartController');


const cartRouter = express.Router();

cartRouter.get('/:id', getCartById);

module.express = cartRouter;