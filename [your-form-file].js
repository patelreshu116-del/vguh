const express = require('express');
const router = express.Router();
const { appendRow } = require('../googleSheetsService');

router.post('/', async (req, res) => {
  const { name, number, email, course, state, city, profession, gender } = req.body;
  if (!name || !number || !email || !course || !state || !city || !profession || !gender) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    await appendRow({ name, number, email, course, state, city, profession, gender });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;