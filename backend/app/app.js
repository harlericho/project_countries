const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

// todo: Initialize dotenv
dotenv.config();

// todo: Initialize express
const app = express();

// todo: Configuration port
const port = process.env.PORT || 5000;
app.set("port", port);

// todo:  Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// todo: Test database connection
// app.set(require("./config/database.config"));

// todo: Routes
app.use("/api/countries", require("./routes/country.routes"));

// todo: Export app
module.exports = app;
