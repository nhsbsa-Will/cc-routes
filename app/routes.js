// External dependencies
const express = require('express');

const router = express.Router();

// Branching example 1

// this part where you form action go
router.post('/example1/answer', (req, res) => {
  // Make a variable and give it the value from 'know-nhs-number'
  const nhsNumber = req.session.data['know-nhs-number']; // This is the name attribute from your input

  // Check whether the variable matches a condition
  if (nhsNumber === 'Yes') {
    // Send user to next page
    res.redirect('/example1/page1-yes-result');
  } else {
    // Send user to ineligible page
    res.redirect('/example1/page1-no-result');
  }
});

module.exports = router; // All your routes need to be above this line 
