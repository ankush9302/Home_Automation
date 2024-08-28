import React, { useState } from 'react';
import { Typography, Box, Slider, Switch, Button, Select, MenuItem, FormControl, InputLabel, Divider } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import '../styles/cards.css';  // Import the common CSS

function SmartThermostat() {
  const [currentTemp, setCurrentTemp] = useState(22);
  const [targetTemp, setTargetTemp] = useState(22);
  const [mode, setMode] = useState('Auto');
  const [fanStatus, setFanStatus] = useState(false);
  const [ecoMode, setEcoMode] = useState(false);
  const [energyUsage, setEnergyUsage] = useState(0);

  const handleTempChange = (event, newValue) => {
    setTargetTemp(newValue);
    calculateEnergyUsage(newValue);
  };

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  const handleEcoModeToggle = () => {
    setEcoMode((prev) => !prev);
    calculateEnergyUsage(targetTemp);
  };

  const calculateEnergyUsage = (temp) => {
    let usage = ecoMode ? (temp - 18) * 0.8 : (temp - 18) * 1.2;
    setEnergyUsage(usage.toFixed(2));
  };

  return (
    <div className="card-container">
      <Box className="card-title">
        <Typography variant="h6">Smart Thermostat</Typography>
        <ThermostatIcon color="primary" sx={{ fontSize: 40 }} />
      </Box>
      <Divider className="card-divider" />

      <Box className="card-content">
        <Typography variant="body1">Current Temperature: {currentTemp}°C</Typography>
        <Typography variant="body1">Target Temperature: {targetTemp}°C</Typography>
        <Slider
          value={targetTemp}
          onChange={handleTempChange}
          aria-labelledby="target-temp-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={16}
          max={30}
          sx={{ width: '80%' }}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="mode-select-label">Mode</InputLabel>
          <Select
            labelId="mode-select-label"
            id="mode-select"
            value={mode}
            label="Mode"
            onChange={handleModeChange}
          >
            <MenuItem value="Heating">Heating</MenuItem>
            <MenuItem value="Cooling">Cooling</MenuItem>
            <MenuItem value="Auto">Auto</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="body1">Fan: {fanStatus ? 'On' : 'Off'}</Typography>
          <Switch
            checked={fanStatus}
            onChange={() => setFanStatus(!fanStatus)}
            color="primary"
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="body1">Eco Mode</Typography>
          <Switch
            checked={ecoMode}
            onChange={handleEcoModeToggle}
            color="primary"
            icon={<EnergySavingsLeafIcon />}
            checkedIcon={<EnergySavingsLeafIcon />}
          />
        </Box>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Energy Usage: {energyUsage} kWh
        </Typography>
      </Box>

      <Button className="card-action" variant="outlined" color="primary" onClick={() => alert('Schedule management coming soon!')}>
        Manage Schedule
      </Button>
    </div>
  );
}

export default SmartThermostat;
