const express = require('express');
const router = express.Router();
const { appendRow } = require('../googleSheetsService');

// Add CORS support using env variable
const cors = require('cors');
const allowedOrigin = process.env.CORS_ORIGINS || '*';
router.use(cors({ origin: allowedOrigin }));

router.post('/', async (req, res) => {
  const { name, number, email, course, state, city, profession, gender } = req.body;
  if (!name || !number || !email || !course || !state || !city || !profession || !gender) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    console.log('Received data:', req.body); // Log incoming data
    await appendRow({ name, number, email, course, state, city, profession, gender });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Google Sheets error:', err); // Log Google API errors
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
