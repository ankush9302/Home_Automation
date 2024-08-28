import React, { useState } from 'react';
import { Typography, Box, Slider, Switch, Button, Divider } from '@mui/material';
import KitchenIcon from '@mui/icons-material/Kitchen';  // Icon for Refrigerator
import WarningIcon from '@mui/icons-material/Warning';  // Icon for alerts
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import '../styles/cards.css';  // Import the common CSS

function SmartRefrigerator() {
  const [fridgeTemp, setFridgeTemp] = useState(4); // Fridge compartment temperature in °C
  const [freezerTemp, setFreezerTemp] = useState(-18); // Freezer compartment temperature in °C
  const [ecoMode, setEcoMode] = useState(false); // Energy-saving mode
  const [doorAlert, setDoorAlert] = useState(false); // Door open alert status
  const [energyUsage, setEnergyUsage] = useState(0);

  const handleFridgeTempChange = (event, newValue) => {
    setFridgeTemp(newValue);
    calculateEnergyUsage(newValue, freezerTemp);
  };

  const handleFreezerTempChange = (event, newValue) => {
    setFreezerTemp(newValue);
    calculateEnergyUsage(fridgeTemp, newValue);
  };

  const handleEcoModeToggle = () => {
    setEcoMode((prev) => !prev);
    calculateEnergyUsage(fridgeTemp, freezerTemp);
  };

  const calculateEnergyUsage = (fridgeTemp, freezerTemp) => {
    // Ensure values are within logical ranges
    if (typeof fridgeTemp === 'number' && typeof freezerTemp === 'number') {
      let usage = ecoMode
        ? (fridgeTemp - 2) * 0.5 + (freezerTemp + 20) * 0.7
        : (fridgeTemp - 2) * 1.2 + (freezerTemp + 20) * 1.5;
      setEnergyUsage(usage.toFixed(2));
    }
  };

  return (
    <div className="card-container">
      <Box className="card-title">
        <Typography variant="h6">Smart Refrigerator</Typography>
        <KitchenIcon color="primary" sx={{ fontSize: 40 }} />
      </Box>
      <Divider className="card-divider" />

      <Box className="card-content">
        <Typography variant="body1">Fridge Temperature: {fridgeTemp}°C</Typography>
        <Slider
          value={fridgeTemp}
          onChange={handleFridgeTempChange}
          aria-labelledby="fridge-temp-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={2}
          max={8}
          sx={{ width: '80%' }}
        />

        <Typography variant="body1">Freezer Temperature: {freezerTemp}°C</Typography>
        <Slider
          value={freezerTemp}
          onChange={handleFreezerTempChange}
          aria-labelledby="freezer-temp-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={-24}
          max={-12}
          sx={{ width: '80%' }}
        />

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

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="body1">Door Open Alert</Typography>
          <Switch
            checked={doorAlert}
            onChange={() => setDoorAlert(!doorAlert)}
            color="secondary"
            icon={<WarningIcon />}
            checkedIcon={<WarningIcon />}
          />
        </Box>

        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Energy Usage: {energyUsage} kWh
        </Typography>
      </Box>

      <Button
        className="card-action"
        variant="outlined"
        color="primary"
        onClick={() => alert('Defrost cycle management coming soon!')}
      >
        Manage Defrost
      </Button>
    </div>
  );
}

export default SmartRefrigerator;
