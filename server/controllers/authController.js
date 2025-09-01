const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

// ✅ Register User
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// ✅ Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// ✅ Logout User
const logoutUser = async (req, res) => {
    try {
        // logout frontend pe handle hota hai (localStorage/cookie delete)
        res.json({ message: "Logout successful" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// ✅ Forgot Password (basic version)
const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        // Future: resetToken generate karo aur email bhejo
        // Abhi dummy response de rahe hain
        res.json({ message: "Password reset link sent to your email (dummy)" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { registerUser, loginUser, logoutUser, forgotPassword };
