const express = require("express");
const app = express();
const productsRouter = require("./Products");

// products api routers
app.use("/products/", productsRouter);

module.exports = app;
