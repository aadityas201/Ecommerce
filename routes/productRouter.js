const express = require("express");
const productController = require("./../controllers/productController");
const Router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./../controllers/verifyToken");

Router.post("/", verifyTokenAndAdmin, productController.newProduct);
Router.put("/:id", verifyTokenAndAdmin, productController.updateProduct);
Router.delete("/:id", verifyTokenAndAdmin, productController.deleteProduct);
Router.get("/find/:id", productController.getProductDetails);
Router.get("/", productController.getAllProducts);

module.exports = Router;
