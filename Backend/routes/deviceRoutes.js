const express = require('express');
const router = express.Router();
const {
  getDevices,
  addDevice,
  updateDevice,
} = require('../controllers/deviceController');

router.get('/', getDevices);
router.post('/', addDevice);
router.put('/:id', updateDevice);

module.exports = router;
