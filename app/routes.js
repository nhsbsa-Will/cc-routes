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

// EXAMPLE 2 - RADIOS


// EXAMPLE 3 - TEXT INPUT
router.post('/example3/name', function (req, res) {
  var firstname = req.session.data['firstname'];
  console.log(firstname);
  var lastname = req.session.data['lastname'];
  console.log(lastname);

  if (firstname && lastname) {
    res.redirect('/example3/entered-name');
  }
  else {
    res.redirect('/example3/not-full-name');
  }  
});


// EXAMPLE 4 - CHECKBOXES
router.post('/example4/checkbox', (req, res) => {

  // This creates an array of the values checked from the checkbox options
  const contact = req.session.data['contact'];

  if (contact == 'email') {
    res.redirect('/example4/email-result'); // Send user to email result
  } else if (contact == 'phone') {
    res.redirect('/example4/phone-result'); // Send user to phone result
  } else if (contact == 'text') {
    res.redirect('/example4/textmsg-result'); // Send user to text result
  } else if (contact.includes('email', 'phone', 'text')) {
    res.redirect('/example4/email-phone-text-result'); // All items are checked
  } else {
    // Send user to ineligible page
    res.redirect('/');
  }
}); 

// EXAMPLE 5 - SELECT
router.post('/example5/select', function (req, res) {
  var select = req.session.data['select-1'];

  if (select == 1) {
    res.redirect('/example5/yes');
  } else {
    res.redirect('/');
  }  
});


module.exports = router; // All your routes need to be above this line 
