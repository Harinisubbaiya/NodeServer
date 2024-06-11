const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter product name"],
    trim: true,
    maxLength: [100, "doesn't exceed 100 characters"],
  },
  price: {
    type: Number,
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "please enter description"],
    maxLength: [300, "doesn't exceed 300 characters"],
  },
  ratings: {
    type: String,
    default: 0,
  },
  images: [
    { 
        img:{
            type: String,
        required: true
    }
      
    },
  ],
  category: {
    type: String,
    required: [true, "please enter category"],
    enum: {
      values: [
        "Home appliances",
        "Electronics",
        "Clothing",
        "cosmetics",
        "Smartphones",
        "Toys",
        "Home decors",
        "FootWear",
      ],
      message: "please select a category",
    },
  },
  seller: {
    type: String,
    required: [true, "please enter product seller name"],
  },
  stock: {
    type: Number,
    required: [true, "please enter product stock"],
    maxLength: [50, "stock shouldn't exceed 50"],
  },
  numOfReviews: {
    type: String,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//model
let schema = mongoose.model("products", productSchema);
module.exports = schema;
