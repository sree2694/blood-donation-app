const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "blood_donation_system",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL Database!");
});

// API Endpoint: Get Users
// Login API
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Check user in database
  const user = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  if (!user.length) {
      return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Verify password
  const isMatch = await bcrypt.compare(password, user[0].password);
  if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Generate JWT token
  const token = jwt.sign({ userId: user[0].id, role: user[0].role }, 'SECRET_KEY', { expiresIn: '1h' });

  // Set HTTP-only cookie
  res.cookie('authToken', token, {
      httpOnly: true,   // Prevents access from JavaScript
      secure: true,     // Works only in HTTPS
      sameSite: 'Strict',
      maxAge: 3600000   // 1 hour expiry
  });

  res.json({ message: 'Login successful' });
});

// API Endpoint: Register User
app.post("/api/auth/register", async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  db.query(
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
    [name, email, hashedPassword, role],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "User registered successfully!" });
    }
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
