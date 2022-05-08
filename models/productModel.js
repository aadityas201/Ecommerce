const mongoose = require("mongoose");

//create a productSchema i.e the logical Structure
const productSchema = new mongoose.Schema(
  {
    //should have following Attributes
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: Array,
    size: Array,
    color: Array,
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  //automatically manage createdAt and updatedAt
  { timestamps: true }
);

//create a model of the above schema
//model is just a wrapper around Schema, i.e to create, update, delete and retrieve the data
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
