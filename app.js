const express = require('express');
const app = express();
app.use(express.json());

const submitCounselingForm = require('./api/submitCounselingForm');
app.use('/api/submitCounselingForm', submitCounselingForm);

module.exports = app;