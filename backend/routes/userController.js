const express = require('express');
const router = express.Router();
const User = require('../models/usersModel');

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
    console.log("Users fetched successfully", users);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error fetching users", error);
  }
})

// Get one user
router.get('/:id', getUser, (req, res) => {
  res.json(res.user);
})

// Get single user middleware
async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.user = user;
  next();
}

// login user
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: "natiAshe@gmail.com" });
    if (user == null) {
      return res.status(400).json({ message: 'Cannot find user' });
    }
    if (user.password !== "P@ssw0rd") {
      return res.status(400).json({ message: 'Invalid password' });
    }
    res.json({ message: 'User logged in', user });
    console.log("User logged in", user);
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error logging in user", error);
  }
})

// Create one user
router.post('/', async (req, res) => {
  const user = new User({
    name: "Test User",
    email: "test@gmail.com",
    password: "P@ssw0rd"
  });

  const existingUser = await User.findOne({ email: "test@gmail.com" });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
    console.log("User created successfully", newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("Error creating user", error);
  }
})

// Update one user
router.patch('/:id', getUser, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.password != null) {
    res.user.password = req.body.password;
  }

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
    console.log("User updated successfully", updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("Error updating user", error);
  }
})

// Delete one user
router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: 'User deleted' });
    console.log("User deleted successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error deleting user", error);
  }
})

module.exports = router;