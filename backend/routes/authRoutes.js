const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/register", async(req, res) => {

    const { username, password, role } = req.body;

    const user = new User({
        username,
        password,
        role
    });

    await user.save();

    res.json({ message: "User Registered" });

});


router.post("/login", async(req, res) => {

    const { username, password } = req.body;

    const user = await User.findOne({ username, password });

    if (!user) {
        return res.json({ message: "Invalid credentials" });
    }

    res.json({
        message: "Login successful",
        user
    });

});

module.exports = router;