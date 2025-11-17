import User from "../models/userModel.js";
import logger from "../config/logger.js";

// @desc    Get all users
// @route   GET /users
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        logger.info("Fetched all users");
        res.json(users);
    } catch (error) {
        next(error);
    }
};

// @desc    Get user by ID
// @route   GET /users/:id
export const getUserById = async (req, res, next) => {
    try {
        const user = User.findById(req.params.id);
        if (!user) {
            logger.warn(`User not found: ${req.params.id}`);
            res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        next(error);
    }
};

// @desc    Create new user
// @route   POST /users
export const createUser = async (req, res, next) => {
    try {
        const { name } = req.body;
        const user = await User.create({ name });
        logger.info(`User created: ${user._id}`);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

// @desc    Update existing user
// @route   PUT /users/:id
export const updateUser = async (req, res, next) => {
    try {
        const user = User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.name = req.body.name || user.name;
        const updatedUser = await user.save();
        logger.info(`User updated: ${updatedUser._id}`);
        res.json(updatedUser);
    } catch (error) {
        next(error);
    }
};

// @desc    Delete user
// @route   DELETE /users/:id
export const deleteUser = async (req, res, next) => {
 try {
    const user = await user.findById(req.params.id);
    if(!user) return res.status(404).json({ message: "User not found" });

    await user.deleteOne();
    logger.info(`User deleted: ${user._id}`);
    res.json({ message: "User deleted successfully" });
 } catch (error) {
    next(error);
 }
};



