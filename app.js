// app.js
import express from 'express';
import dataRoutes from './api/data.js';

const app = express();
app.use(express.json()); // Enable JSON parsing

// Home route
app.get('/', (req, res) => {
  res.json({ home: 'Home page' });
});

// Index route
app.get('/index', (req, res) => {
  res.json({ hello: 'Hello World!' });
});

// Data routes
app.use('/data', dataRoutes);

// Server listening
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
