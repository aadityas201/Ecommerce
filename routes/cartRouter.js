const express = require("express");
const Router = express.Router();
const cartController = require("./../controllers/cartConroller");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./../controllers/verifyToken");

Router.post("/", verifyToken, cartController.newCart);
Router.put("/:id", verifyTokenAndAuthorization, cartController.updateCart);
Router.delete("/:id", verifyTokenAndAuthorization, cartController.deleteCart);
Router.get(
  "/find/:userId",
  verifyTokenAndAuthorization,
  cartController.getUserCart
);
Router.get("/", verifyTokenAndAdmin, cartController.getAllCarts);

module.exports = Router;
