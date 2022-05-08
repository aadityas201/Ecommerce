const mongoose = require("mongoose");

//Schema for Car
const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    //array of objects with product id and quantity
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
