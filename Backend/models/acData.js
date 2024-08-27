const mongoose = require('mongoose');

const acDataSchema = new mongoose.Schema({
  temperature: Number,
  energyConsumed: Number,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('AcData', acDataSchema);
