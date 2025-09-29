const express = require('express');
const app = express();
app.use(express.json());

// Error logging middleware
app.use((err, req, res, next) => {
  console.error('Startup/Error:', err);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

const submitCounselingForm = require('./api/submitCounselingForm');
app.use('/api/submitCounselingForm', submitCounselingForm);

// Start server with error handling
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;