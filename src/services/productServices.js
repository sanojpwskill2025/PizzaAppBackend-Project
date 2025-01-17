const cloudinary = require('../config/cloudinaryConfig');
const ProductRepository = require('../repositories/productRepository');
const fs = require('fs/promises');

async function createProduct(productDetails){
    // 1. we should check if an image is coming to create the product,then we should find cloudinary

    const imagePath = productDetails.imagePath;
    if(imagePath){
        try{
          const cloudinaryResponse = await cloudinary.uploader.upload(imagePath);
          var productImage = cloudinaryResponse.secure_url;
          await fs.unlink(imagePath);
        } catch(error){
           console.log(error);
           throw { reason: 'Not able to create product', statusCode: 500};
        }
    }

    // 2. Then use the url from cloudinary and other product details to add product
    const product = await ProductRepository.createProduct({
        ...productDetails,
        productImage: productImage
    });

    if(!product) {
        throw { reason: 'Not able to create product', statusCode: 500}
    }
}

module.exports = {
    createProduct
}