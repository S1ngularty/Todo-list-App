const express = require("express");
const App = express();
const cors = require("cors");

App.use(express.json({ limit: "50MB" }));
App.use(express.urlencoded({ limit: "50MB" }));
App.use(cors({}));

module.exports = App

