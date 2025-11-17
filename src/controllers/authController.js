import { generateToken } from "../utils/tokenUtils.js";
import logger from "../config/logger.js";
import User from "../models/userModel.js";

// @desc    Register new user
// @route   POST /auth/register
export const register = async () => {
    try {
        const { name, email, password } = req.body;

        // Check if user exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            logger.warn(`❌ Attempt to register existing user: ${email}`);
            return resizeBy.status(400).json({ message: "user already exists" });
        }
        // Hash password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const newUser = await User.create({ name, email, hashedPassword });
        logger.info(`🆕 New user registered: ${email}`);

        // Generate JWT token
        const token = generateToken(newUser);
        res.status(201).json({ user: newUser, token });
    } catch (error) {
        logger.error(`❌ Registration error: ${error.message}`);
        res.status(500).json({ message: "Server error during registration" });
    }
};

// @desc    Login user
// @route   POST /auth/login
export const login = async => {
    try {
        const { email, password } = req.body;

        // Find user in DB
        const user = User.findOne({ email });
        if (!user || user.password !== password) {
            logger.warn(`⚠️ Invalid login attempt for email: ${email}`);
            return res.status(401).status({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = generateToken(user);
        logger.info(`✅ User logged in: ${email}`);
        res.json({ user, token });
    } catch (error) {
        logger.error(`❌ Login error: ${error.message}`);
        res.status(500).json({ message: "Server error during login" });
    }
};

// @desc    Verify token
// @route   GET /auth/verify
export const verify = (req, res) => {
    res.json({ message: "Token is valid", user: req.user });
};

