import React from 'react';
import { Grid, Box } from '@mui/material';
import Header from './components/Header';
import SmartThermostat from './components/SmartThermostat';
import ACCard from './components/ACCard';
import EnergyMonitorCard from './components/EnergyMonitorCard';
import LightBulbCard from './components/LightBulbCard';

function Dashboard() {
  return (
    <Box>
      <Header />
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <SmartThermostat />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ACCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <EnergyMonitorCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <LightBulbCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
