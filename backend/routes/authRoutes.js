const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/register", async(req, res) => {
    try {

        const { username, password, role } = req.body;

        const user = new User({
            username,
            password,
            role
        });

        await user.save();

        res.json({ message: "User Registered" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Registration failed" });
    }
});


router.post("/login", async(req, res) => {
    try {

        const { username, password } = req.body;

        const user = await User.findOne({ username, password });

        if (!user) {
            return res.json({ message: "Invalid credentials" });
        }

        res.json({
            message: "Login successful",
            user
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Login failed" });
    }
});

module.exports = router;