import React from 'react';
import EnergyGraph from '../components/EnergyGraph';
import { Container, Typography } from '@mui/material';
import CurrentEnergyConsumption from './CurrentEnergyConsumption';
const AnalyticsPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Analytics
      </Typography>
      <CurrentEnergyConsumption/>
      <EnergyGraph />
    </Container>
  );
};

export default AnalyticsPage;
