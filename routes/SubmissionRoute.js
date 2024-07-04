const express = require('express');
const {createSubmission} = require('../controllers/SubmissionController');

const router = express.Router();

router.post('/submissions', createSubmission);


module.exports = router;