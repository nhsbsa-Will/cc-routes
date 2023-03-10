// External dependencies
const express = require('express');

const router = express.Router();

// Branching example 1 - Radios

// this is where your form action goes
router.post('/example1/radios', (req, res) => {
  // Make a variable and give it the value from 'know-nhs-number', you need a unique variable for each route
  const nhsNumber = req.session.data['know-nhs-number']; // This is the name attribute from your input

  // Check whether the variable matches a condition
  if (nhsNumber === 'Yes') {
    // Send user to next page
    res.redirect('/example1/radios-yes-result');
  } else {
    // Send user to ineligible page
    res.redirect('/example1/radios-no-result');
  }
});


// Branching example 2 - Radios


// Branching example 3 - Select 


// Branching example 4 - Checkboxes 

// this is where your form action goes
router.post('/example1/checkbox', (req, res) => {
  // Make a variable and give it the value from 'know-nhs-number'
  const contactCheckbox = req.session.data['know-nhs-number']; // This is the name attribute from your input

  // Check whether the variable matches a condition
  if (contactCheckbox === 'Yes') {
    // Send user to next page
    res.redirect('/example2/checkbox-1-result');
  } else {
    // Send user to ineligible page
    res.redirect('/example2/checkbox-2-result');
  }
});


module.exports = router; // All your routes need to be above this line 
