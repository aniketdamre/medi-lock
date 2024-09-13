const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Define routes
router.get('/', patientController.index);
router.post('/', patientController.store);
router.get('/:id', patientController.show);
router.put('/:id', patientController.update);
router.delete('/:id', patientController.destroy);

module.exports = router;
