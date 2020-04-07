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
    },
];

server.use(express.json());

server.get("/api/users", (req, res) => {
    users ? res.json(users) : res.status(500).json({errorMessage: "The users information could not be retrieved."});
});

server.get("/api/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    user ? res.status(200).json(user) : res.status(404).json({message: "User not found"});
});

server.post("/api/users", (req, res) => {
    const userInfo = req.body;
    if(userInfo.name && userInfo.bio) {
        users.push(userInfo);
        res.status(201).json(users);
    } else {
        res.status(400).json({errorMessage: "Cannot add user. Please include name and bio!"});
    }
});

const port = 5000;

server.listen(port, () => console.log(`\n API on port ${port} is working`));