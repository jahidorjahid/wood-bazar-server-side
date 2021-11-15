require("dotenv").config();
const express = require("express");
// mongodb connection with mongoose
const db = require("./config/db");
const app = express();
// To allow cross-origin requests
const cors = require("cors");
// index route of our root url
const indexRouter = require("./Routes/index");
// All api routes
const apiRouter = require("./Routes/Api");

// middleware
app.use(cors());
app.use(express.json());

//Route Prefixes
app.use("/", indexRouter);
app.use("/api/", apiRouter);

module.exports = app;
