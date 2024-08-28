import React, { useState } from 'react';
import { Typography, Box, Switch, Button, Divider } from '@mui/material';
import PowerIcon from '@mui/icons-material/Power';
import '../styles/cards.css';  // Import the common CSS

function EnergyMonitorCard() {
  const [powerUsage, setPowerUsage] = useState(500);
  const [monthlyUsage, setMonthlyUsage] = useState(150);
  const [monitorStatus, setMonitorStatus] = useState(false);

  const calculateCost = () => {
    const costPerKWh = 0.12; // Example rate
    return (monthlyUsage * costPerKWh).toFixed(2);
  };

  return (
    <div className="card-container">
      <Box className="card-title">
        <Typography variant="h6">Smart Energy Monitor</Typography>
        <PowerIcon color="primary" sx={{ fontSize: 40 }} />
      </Box>
      <Divider className="card-divider" />

      <Box className="card-content">
        <Typography variant="body1">Current Power Usage: {powerUsage} kWh</Typography>
        <Typography variant="body1">Monthly Energy Usage: {monthlyUsage} kWh</Typography>
        <Typography variant="body1">Estimated Cost: ${calculateCost()}</Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="body1">Monitor Status: {monitorStatus ? 'On' : 'Off'}</Typography>
        <Switch
          checked={monitorStatus}
          onChange={() => setMonitorStatus(!monitorStatus)}
          color="primary"
        />
      </Box>

      <Button className="card-action" variant="outlined" color="primary" onClick={() => alert('More detailed analytics coming soon!')}>
        View Detailed Analytics
      </Button>
    </div>
  );
}

export default EnergyMonitorCard;
