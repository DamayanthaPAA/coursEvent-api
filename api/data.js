// api/data.js
import express from 'express';

const router = express.Router();

// Sample data
let users = [
  { id: '1', Firstname: 'Jyri', Surname: 'Kemppainen' },
  { id: '2', Firstname: 'Petri', Surname: 'Laitinen' }
];

// GET all data
router.get('/', (req, res) => {
  res.json(users);
});

// GET data by ID
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// POST to add a new user
router.post('/', (req, res) => {
  const { id, Firstname, Surname } = req.body;

  // Check for valid fields
  if (!id || !Firstname || !Surname) {
    return res.status(400).json({ error: 'Invalid fields' });
  }

  // Check if ID already exists
  const existingUser = users.find(u => u.id === id);
  if (existingUser) {
    return res.status(409).json({ error: 'User ID already exists' });
  }

  // Add new user
  const newUser = { id, Firstname, Surname };
  users.push(newUser);
  res.status(201).json(newUser);
});

export default router;
