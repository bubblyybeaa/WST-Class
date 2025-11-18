const express = require("express");
const app = express();

app.use(express.json());

// GET
app.get("/users/:id", (req, res) => {
    res.json({ message: "User with ID: " + req.params.id });
});

// POST
app.post("/users", (req, res) => {
    res.json({ message: "Added user: " + req.body.name });
});

app.listen(3000, () => console.log("API running on port 3000"));
