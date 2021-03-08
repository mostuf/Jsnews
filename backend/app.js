
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const articleRoute = require("./route/article");

app.use("/image", express.static(path.join(__dirname, "image")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
}); 

app.use("/api/article", articleRoute);

module.exports = app;