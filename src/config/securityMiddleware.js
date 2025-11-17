import helmet from "helmet";
import rateLimit from "express-rate-limit";
import xssClean from "xss-clean";
import hpp from "hpp";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config();

const allowedOrigin = process.env.CORS_ORIGIN || "http://localhost:3000";
/**
 * 🛡️ Security Middleware Setup
 * Centralized configuration for common Express security best practices.
 */
export const securityMiddleware = (app) => {
    // Set security headers
  app.use(
    helmet({
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "default-src": ["'self'"],
          "script-src": ["'self'", "'unsafe-inline'", allowedOrigin],
          "style-src": ["'self'", "'unsafe-inline'", allowedOrigin],
          "img-src": ["'self'", "data:", "https:"],
          "font-src": ["'self'", "https:", "data:"],
          "connect-src": ["'self'", allowedOrigin],
          "frame-ancestors": ["'none'"], // Prevents clickjacking
          "object-src": ["'none'"], // Disables plugins like Flash
          "upgrade-insecure-requests": [], // Forces HTTPS
        },
      },
      crossOriginEmbedderPolicy: true,
      crossOriginOpenerPolicy: { policy: "same-origin" },
      crossOriginResourcePolicy: { policy: "cross-origin" },
      referrerPolicy: { policy: "no-referrer" },
      hidePoweredBy: true,
    })
  );

    // Enable CORS (customize origin for production)
    app.use(cors({
        origin: allowedOrigin,
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    }));

    // Prevent XSS attacks
    app.use(xssClean());

    // Prevent HTTP Parameter Pollution
    app.use(hpp());

    // Apply rate limiting
    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per window
        message: "Too many requests from this IP, please try again later.",
    });

    app.use(limiter);
};

export default securityMiddleware;