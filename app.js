const express = require("express");

const morgan = require("morgan");
const app = express();

//middleware for parsing the JSON requests into req.body
//without this req.body is undefined
app.use(express.json());

//middleware for logging incoming requests
app.use(morgan("dev"));
module.exports = app;
