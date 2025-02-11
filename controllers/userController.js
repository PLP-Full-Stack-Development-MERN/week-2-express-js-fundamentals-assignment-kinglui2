// Dummy users array for testing
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

// GET all users
exports.getUsers = (req, res) => {
    res.json(users);
};

// CREATE a new user
exports.createUser = (req, res) => {
    const newUser = {
        id: users.length + 1,  // Auto-increment ID
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
};

// UPDATE a user by ID
exports.updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }

    users[userIndex].name = req.body.name;
    res.json(users[userIndex]);
};

// DELETE a user by ID
exports.deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }

    users.splice(userIndex, 1);
    res.json({ message: "User deleted successfully" });
};
