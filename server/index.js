const express = require("express");
const cors = require("cors");

const http = require("http");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
require("./src/socket")(io);

const port = 4001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello express");
});

server.listen(port, () => console.log(`Server connected on port ${port}`));
