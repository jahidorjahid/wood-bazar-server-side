const express = require("express");
const app = express();
const productsRouter = require("./Products");
const ordersRouter = require("./Orders");
const usersRouter = require("./Users");

// products api routers
app.use("/products/", productsRouter);
// orders api routers
app.use("/orders/", ordersRouter);
// user api routers
app.use("/users/", usersRouter);

module.exports = app;
