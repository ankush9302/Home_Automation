import React from 'react';
import { Container, Box, Typography, Divider } from '@mui/material';
import EnergyGraph from './EnergyGraph';
import CurrentEnergyConsumption from './CurrentEnergyConsumption';

const DevicePage = ({ deviceName, maintenanceComponent, energyGraphProps, currentEnergyProps }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {deviceName} Dashboard
      </Typography>
      <Divider sx={{ mb: 3 }} />

      {/* Maintenance Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Maintenance Settings
        </Typography>
        {maintenanceComponent}
      </Box>

      {/* Current Energy Consumption */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Current Energy Consumption
        </Typography>
        <CurrentEnergyConsumption {...currentEnergyProps} />
      </Box>

      {/* Energy Consumption Over Time */}
      <Box>
        <Typography variant="h5" gutterBottom>
          Energy Consumption Over Time
        </Typography>
        <EnergyGraph {...energyGraphProps} />
      </Box>
    </Container>
  );
};

export default DevicePage;
