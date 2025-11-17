# 🚀 Basic Express API (ES6 + Node.js)

A simple REST API built using **Node.js** and **Express (ES6 modules)**.  
This project demonstrates how to create, read, update, and delete (CRUD) data using modern JavaScript syntax.

---

## 📁 Project Structure
```
basic-express-api/
│
├── package.json                  # Project metadata & dependencies
├── server.js                     # Entry point - starts the Express server
│
├── logs/                         # ✅ Central folder for all logs
│   ├── info.log                  # Info-level logs (auto-created by Winston)
│   ├── error.log                 # Error-level logs (auto-created by Winston)
│   └── .gitkeep                  # Keeps folder tracked in Git
│
├── docs/                         # 📘 API documentation (Swagger or Postman)
│   └── swagger.json
│
├── tests/                        # 🧪 Unit & Integration tests
│   ├── auth.test.js
│   └── user.test.js
│
├── scripts/                      # ⚙️ DevOps or database scripts
│   ├── seed.js                   # Seed database with mock data
│   └── backup.js                 # Optional: DB backup script
│
├── docker/                       # 🐳 Docker-related setup
│   ├── Dockerfile
│   └── docker-compose.yml
│
└── src/
    ├── app.js                    # Initializes app, middleware, and routes
    │
    ├── routes/
    │   ├── userRoutes.js         # User routes
    │   └── authRoutes.js         # Auth routes (login, register, verify)
    │
    ├── controllers/
    │   ├── userController.js     # Handles CRUD logic and responses
    │   └── authController.js     # Handles registration/login/verify
    │
    ├── models/
    │   └── userModel.js          # Mongoose schema & model for User
    │
    ├── validation/
    │   ├── userValidation.js     # Joi or express-validator schemas
    │   └── authValidation.js
    │
    ├── config/
    │   ├── db.js                 # MongoDB connection setup
    │   ├── logger.js             # Centralized Winston logger config
    │   └── security.js           # Helmet, Rate limit, CORS, XSS setup
    │
    ├── middleware/
    │   ├── errorMiddleware.js    # Global error/404 handler
    │   ├── authMiddleware.js     # JWT authentication middleware
    │   └── validateMiddleware.js # Validates incoming request body
    │
    ├── utils/
    │   ├── morganMiddleware.js   # Request logging (Morgan + Winston)
    │   ├── tokenUtils.js         # JWT token generation/verification helpers
    │   ├── emailUtils.js         # Email sending (Nodemailer)
    │   └── responseUtils.js      # Standardized API response helper
    │
    ├── constants/
    │   └── messages.js           # Centralized success/error messages
    │
    └── services/
        └── userService.js        # Business logic for user-related operations





```

---

## ⚙️ Setup Instructions
    Follow these steps to set up and run the project on your local machine:
### 1️⃣ Clone the repository
```bash
git clone https://github.com/Sumant26/Basic-express-api.git
cd Basic-express-api
npm install
npm start
http://localhost:3000
```
---

## 💡 Features
```bash
✅ Built with Node.js + Express
✅ Uses ES6 import/export syntax ("type": "module")
✅ In-memory "database" for simplicity
✅ RESTful API design
✅ CRUD operations (GET, POST, PUT, DELETE)
✅ JSON request/response handling
 ```
---
 ## EndPoints
 ```bash

| Method | Endpoint     | Description             | Example Body (JSON)          |
| ------ | ------------ | ----------------------- | ---------------------------- |
| GET    | `/`          | Welcome message         | —                            |
| GET    | `/users`     | Get all users           | —                            |
| GET    | `/users/:id` | Get a user by ID        | —                            |
| POST   | `/users`     | Create a new user       | `{ "name": "Alice" }`        |
| PUT    | `/users/:id` | Update an existing user | `{ "name": "Updated Name" }` |
| DELETE | `/users/:id` | Delete a user           | —                            |
```
---
## 🧰 Technologies Used
```bash
Node.js – JavaScript runtime
Express.js – Web framework for Node.js
ES6 Modules – Modern JS import/export syntax
```

## 🧑‍💻 Author
```bash
Sumant Tulshibagwale
🌐 https://github.com/Sumant26
```

---

