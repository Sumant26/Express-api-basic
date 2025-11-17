import dotenv from "dotenv";

dotenv.config();

const ENV = process.env.NODE_ENV || "development";

const config = {
    env: ENV,
port: process.env.MONGO_URL || "mongodb://localhost:27017/basic_express_api",
jwtSecret: process.env.JWT_SECRET ||  "your-default-secret",
logLevel: process.env.LOG_LEVEL || "info",
};

export default config;