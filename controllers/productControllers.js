const Product = require("../models/productModels.js");
const ErrorHandler = require("../utils/errorhandler.js")
const catchAsyncError = require("../middlewares/catchAsyncError.js")
const APIFeatures = require("../utils/APIFeatures.js")

//get - {{Base_Url}}/api/v1/products
exports.getProducts = async (req, res, next) => {
  const apifeat = new APIFeatures(Product.find(),req.query).search().filter();
  const products = await apifeat.query;
  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
};

// create/post - {{Base_Url}}/api/v1/product/new
exports.newProduct = catchAsyncError (async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  })
});

//get single product-{{Base_Url}}/api/v1/product/id
exports.getOneProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
                  
  if (!product) { 
    return next(new ErrorHandler('product not found',400))
  }

  return res.status(201).json({
    success: true,
    product,
  });
};

//update product-{{Base_Url}}/api/v1/product/:id
exports.updateProduct = async(req,res,next)=>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(404).json({
            success: false,
            message: "product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
        runValidators: true
    })

    return res.status(200).json({
        success: true,
        product
    })
       
}

//delete product
exports.deleteproduct = async(req,res,next)=>{
    const product = await Product.findById(req.params.id);
    
    if(!product){
        return res.status(404).json({
            success: false,
            message: "product not found"
        })
    } 

  

    res.status(200).json({
        success: true,
        message: "product deleted"
    })
}