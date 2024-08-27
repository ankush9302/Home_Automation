const Device = require('../models/deviceModel');

// Get all devices
exports.getDevices = async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new device
exports.addDevice = async (req, res) => {
  const { name, temperature } = req.body;
  const device = new Device({
    name,
    temperature: temperature || null,
  });
  try {
    const newDevice = await device.save();
    res.status(201).json(newDevice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update device status and temperature
exports.updateDevice = async (req, res) => {
  const { status, temperature } = req.body;
  try {
    const device = await Device.findById(req.params.id);
    if (status !== undefined) device.status = status;
    if (temperature !== undefined) device.temperature = temperature;
    const updatedDevice = await device.save();
    res.json(updatedDevice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
