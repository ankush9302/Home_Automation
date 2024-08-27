import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import TemperatureInput from './TemperatureInput'
const MaintenancePage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        AC Maintenance
      </Typography>
      <Typography variant="body1" gutterBottom>
        Set AC Temperature (in celcius)
      </Typography>
      <TemperatureInput/>
    </Container>
  );
};

export default MaintenancePage;
