const express = require('express');
const { setTemperature, getEnergyData } = require('../controllers/acController');

const router = express.Router();

router.post('/temperature', setTemperature);
router.get('/energy', getEnergyData);

module.exports = router;