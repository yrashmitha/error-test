const { ChildProcess } = require("child_process");
const express = require("express");

const http = require("http");

const app = express();
const server = http.createServer(app);

// starting and listening to the servers
const port = process.env.PORT || 9000;

server.listen(port, () => {
  console.log("server started and listen on port " + port);
});

const router = express.Router();
app.get("/err", async (req, res) => {
  throw new Error("We crashed!!!!!");
  res.send("hi");
});
app.get("/", async (req, res) => {
  console.log("first");
  res.send("hi");
});
