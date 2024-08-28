import React, { useState } from 'react';
import { Typography, Box, Slider, Switch, Button, Divider } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import '../styles/cards.css';  // Import the common CSS

function LightBulbCard() {
  const [lightStatus, setLightStatus] = useState(false);
  const [brightness, setBrightness] = useState(75);

  const handleBrightnessChange = (event, newValue) => {
    setBrightness(newValue);
  };

  return (
    <div className="card-container">
      <Box className="card-title">
        <Typography variant="h6">Smart Light Bulbs</Typography>
        <LightbulbIcon color="primary" sx={{ fontSize: 40 }} />
      </Box>
      <Divider className="card-divider" />

      <Box className="card-content">
        <Typography variant="body1">Brightness: {brightness}%</Typography>
        <Slider
          value={brightness}
          onChange={handleBrightnessChange}
          aria-labelledby="light-brightness-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={100}
          sx={{ width: '80%', mb: 2 }}  // Adjusting spacing and width
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="body1">Light Status: {lightStatus ? 'On' : 'Off'}</Typography>
        <Switch
          checked={lightStatus}
          onChange={() => setLightStatus(!lightStatus)}
          color="primary"
        />
      </Box>

      <Button className="card-action" variant="outlined" color="primary" onClick={() => alert('Color control coming soon!')}>
        Adjust Color
      </Button>
    </div>
  );
}

export default LightBulbCard;
