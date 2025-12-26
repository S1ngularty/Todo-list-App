const express = require("express");
const App = express();
const cors = require("cors");

const { user } = require("./routes/index");

App.use(express.json({ limit: "50MB" }));
App.use(express.urlencoded({ limit: "50MB" }));
App.use(cors({}));

//routes
App.use("/api/v1", user);

module.exports = App;
