const express = require('express');
const router = express.Router();

// Import controllers
const patientController = require('../controllers/patientController');
const pathologyController = require('../controllers/pathologyController');

// Define routes
router.get('/', (req, res) => {
  res.render('index');
});

// Patient routes
router.get('/patient/login', (req, res) => {
  res.render('patient_login');
});

router.post('/patient/login', patientController.login);
router.get('/patient/dashboard', (req, res) => {
  res.render('patient_dashboard');
});

router.post('/patient/dashboard', patientController.uploadDetails);

// Pathology routes
router.post('/pathology/dashboard', pathologyController.uploadDetails);
router.get('/pathology/dashboard', (req, res) => {
  res.render('pathology_dashboard');
});

module.exports = router;
