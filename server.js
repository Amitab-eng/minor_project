const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.json()); // Handle JSON data
app.use(cors());
app.use(express.static("public")); // Serves static files from the 'public' folder

// Temporary in-memory user storage
const users = [];

// Routes

// Handle Registration
app.post("/submit-registration", (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // Validation
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).send("All fields are required.");
  }
  if (password !== confirmPassword) {
    return res.status(400).send("Passwords do not match.");
  }

  // Check if user already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).send("User with this email already exists.");
  }

  // Save user to in-memory storage
  users.push({ name, email, password });
  console.log("Registered Users:", users);

  res.status(200).send("Registration successful! You can now log in.");
});

// Handle Login
app.post("/submit-login", (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).send("Email and password are required.");
  }

  // Authenticate user
  const user = users.find((user) => user.email === email && user.password === password);
  if (!user) {
    return res.status(401).send("Invalid email or password.");
  }

  res.status(200).send(`Welcome back, ${user.name}!`);
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
