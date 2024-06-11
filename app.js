const express = require("express");
const app = express();
const errormiddleware = require("./middlewares/error");
const products = require("./routes/product");
//middleware
app.use(express.json());
app.use("/api/v1/", products);

app.use(errormiddleware)

module.exports = app;
