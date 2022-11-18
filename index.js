const express = require("express");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("the api is working!");
});

server.listen(PORT, () => {
  console.log(`the api is ruing on port http://localhost:${PORT}`);
});
