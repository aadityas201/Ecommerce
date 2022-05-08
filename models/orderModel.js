const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    //id if each user
    userId: { type: String, required: true },
    //array of objects
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
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
