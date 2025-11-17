import app from "./src/app.js";
import connectDB from "./src/config/db.js";
import logger from "./src/config/logger.js"
import config from "./src/config/envConfig.js"; // ✅ Import config



// Connect to MongoDB
connectDB();

app.listen(config.port, () => {
    logger.info(`🚀 Server running on port ${config.port}`)
});


















