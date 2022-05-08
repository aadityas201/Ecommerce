const express = require("express");

const morgan = require("morgan");
const app = express();
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const orderRouter = require("./routes/orderRouter");
const cartRouter = require("./routes/cartRouter");
//middleware for parsing the JSON requests into req.body
//without this req.body is undefined
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//middleware for logging incoming requests
app.use(morgan("dev"));
//for authentication use this route
app.use("/api/v1/auth", authRouter);
//for users use this route
app.use("/api/v1/users", userRouter);
//for producys use this Route
app.use("./api/v1/products", productRouter);
//use this route for order
app.use("./api/v1/orders", orderRouter);
//use this route for carts
app.use("./api/v1/carts", cartRouter);
module.exports = app;
