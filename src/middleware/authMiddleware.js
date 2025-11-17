import jwt from "jsonwebtoken";
import logger from "../config/logger.js";

export const protect = (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env, JWT_SECRET);
            req.user = decoded;
        } catch (error) {
            logger.error(`Invalid token: ${error.message}`);
            return res.status(401).json({ message: "Not authorized, invalid token" });
        }
    }

    return res.status(401).json({ message: "Not authorized, no token provided" });
}