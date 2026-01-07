const express = require("express");
const App = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { user } = require("./routes/index");

App.use(cors({}));
App.use(express.json({ limit: "50MB" }));
App.use(express.urlencoded({ limit: "50MB" }));
App.use(cookieParser());

//routes
App.use("/api/v1", user);

module.exports = App;
