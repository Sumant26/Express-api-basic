import express from "express";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import morganMiddleware from "./utils/morganMiddleware.js";
import {errorhandler, notFound } from "./middleware/errorMiddleware.js";
import { securityMiddleware } from "./config/securityMiddleware.js";

const app = express();

// Middleware
app.use(express.json());

// Security Middleware
securityMiddleware(app);

// Logger
app.use(morganMiddleware);

// Root Route
app.get("/", (req, res)=>{
    res.send("Welcome to my ES6 Express API!");
});

export default app;