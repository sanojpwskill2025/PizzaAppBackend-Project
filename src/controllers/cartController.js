const { getCart, addToCart, modifyCart, clearProductsFromCart } = require('../services/cartServices');
const AppError = require("../utils/appError");


async function getCartByUser(req, res) {
   try {
        const cart = await getCart(req.body.userId);
        return res.status(200).json({
            success: true,
            message: "Successfully fetched the cart",
            error: {},
            data: cart
        })
   } catch(error) {
        console.log(error);
        if(error instanceof AppError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                error: error,
                data: {}
            })
        }
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error,
            data: {}
        })
   }
}


// async function addProductTocart(req,res) {
//     try {
//         const cart = await addToCart(req.userId, req.params.productId);
//         return res.status(200).json({
//             success: true,
//             message: "Successfully added product to the cart",
//             error: {},
//             data: cart
//         })
//    } catch(error) {
//         console.log(error);
//         if(error instanceof AppError) {
//             return res.status(error.statusCode).json({
//                 success: false,
//                 message: error.message,
//                 error: error,
//                 data: {}
//             })
//         }
//         return res.status(500).json({
//             success: false,
//             message: "Something went wrong",
//             error: error,
//             data: {}
//         })
//    }

// }

async function modifyProductTocart(req, res) {
    try {
         const cart = await modifyCart(req.userId, req.params.productId, req.params.operation == "add");
         return res.status(200).json({
             success: true,
             message: "Successfully added product to the cart",
             error: {},
             data: cart
         })
    } catch(error) {
         console.log(error);
         if(error instanceof AppError) {
             return res.status(error.statusCode).json({
                 success: false,
                 message: error.message,
                 error: error,
                 data: {}
             })
         }
         return res.status(500).json({
             success: false,
             message: "Something went wrong",
             error: error,
             data: {}
         })
    }
 }

 async function clearCartbyId(req, res) {
    try {
        const cart = await clearProductsFromCart(req.user.id);
        return res.status(200).json({
            success: true,
            message: "Successfully cleared all products from the cart",
            error: {},
            data: cart
        })
   } catch(error) {
        console.log(error);
        if(error instanceof AppError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                error: error,
                data: {}
            })
        }
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error,
            data: {}
        })
   }
 }

module.exports = {
    getCartByUser,
    modifyProductTocart,
    clearCartbyId
}