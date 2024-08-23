const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller.js');

// Render homepage
router.get('/', homeController.homePage);

// Upload CSV
router.post('/file/uploads', homeController.uploadFile);

// View CSV File in Table format
router.get('/view/:id', homeController.displayCSV);

// Delete CSV file
router.delete('/delete/:id', homeController.deleteCSV);

module.exports = router;
