const express = require("express");
const shortid = require("shortid");
const server = express();

const users = [
    {
        "id": shortid.generate,
        "name": "Jane Doe",
        "bio": "Helpful person."
    }
];

server.get("/api/users", (req, res) => res.json(users));

const port = 5000;

server.listen(port, () => console.log(`\n API on port ${port} is working`));