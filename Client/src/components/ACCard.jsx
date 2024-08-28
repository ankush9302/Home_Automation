import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Correct import for navigation
import { Typography, Box, Slider, Switch, Button, Divider } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import '../styles/cards.css';  // Import the common CSS

function ACCard() {
  const [temperature, setTemperature] = useState(24);
  const [acStatus, setAcStatus] = useState(false);
  const [fanSpeed, setFanSpeed] = useState(1);
  const navigate = useNavigate();  // Correct initialization for navigation

  const handleTempChange = (event, newValue) => {
    setTemperature(newValue);
  };

  // Corrected handleClick function to use navigate
  const handleClick = () => {
    navigate('/Ac');  // Correct use of navigate function to redirect to the AC page
  };

  return (
    <div className="card-container">
      <Box className="card-title">
        <Typography variant="h6">Smart Air Conditioner</Typography>
        <AcUnitIcon color="primary" sx={{ fontSize: 40 }} />
      </Box>
      <Divider className="card-divider" />

      <Box className="card-content">
        <Typography variant="body1">Temperature: {temperature}°C</Typography>
        <Slider
          value={temperature}
          onChange={handleTempChange}
          aria-labelledby="ac-temp-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={16}
          max={30}
          sx={{ width: '80%' }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="body1">AC Status: {acStatus ? 'On' : 'Off'}</Typography>
          <Switch
            checked={acStatus}
            onChange={() => setAcStatus(!acStatus)}
            color="primary"
          />
        </Box>
        <Typography variant="body1">Fan Speed: {fanSpeed}</Typography>
      </Box>

      <Button className="card-action" variant="outlined" color="primary" onClick={handleClick}>
        View Detailed Analytics
      </Button>
    </div>
  );
}

export default ACCard;
