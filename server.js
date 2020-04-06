const express = require("express");
const server = express();

server.get("/", (req, res) => res.json({"message": "Success"}));

const port = 5000;

server.listen(port, () => console.log(`\n API on port ${port} is working`));