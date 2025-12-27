require("dotenv").config();
const App = require("./App");
const http = require("http");
const connectToDB = require("./configs/database");

connectToDB();

const server = http.createServer(App);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

server.on("error", (error) => {
  console.log(`Server error: ${error}`);
});
