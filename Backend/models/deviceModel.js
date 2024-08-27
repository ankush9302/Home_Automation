const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: Boolean, required: true, default: false },
  temperature: { type: Number, default: null },
  isConnected: { type: Boolean, default: false },
  schedule: {
    startTime: { type: String, default: null },
    endTime: { type: String, default: null }
  }
});

module.exports = mongoose.model('Device', deviceSchema);
