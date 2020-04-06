const express = require("express");
const shortid = require("shortid");
const server = express();

const users = [
    {
        "id": shortid.generate(),
        "name": "Jane Doe",
        "bio": "Helpful person."
    },
    {
        "id": shortid.generate(),
        "name": "Paul Gibson",
        "bio": "Talented person."
    }
];

server.get("/api/users", (req, res) => res.json(users));

server.get("/api/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    user ? res.status(200).json(user) : res.status(404).json({message: "User not found"});
});

const port = 5000;

server.listen(port, () => console.log(`\n API on port ${port} is working`));