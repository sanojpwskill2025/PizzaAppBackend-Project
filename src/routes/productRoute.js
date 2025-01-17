const express = require('express');
const { addProduct } = require('../controllers/productController');
const uploader = require('../middlewares/multerMiddleware');



//we have to initialise a router object to add routes in a new file
//Routers are used for segregating your routes in different modules

const productRouter = express.Router();
productRouter.post('/', uploader.single('productImage'), addProduct); //this is a route resitration

module.exports = productRouter;  //exporting the router