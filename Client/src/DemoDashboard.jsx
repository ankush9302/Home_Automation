import React from 'react';
import { Grid, Box } from '@mui/material';
import Header from './components/Header';
import SmartThermostat from './components/SmartThermostat';
import ACCard from './components/ACCard';
import EnergyMonitorCard from './components/EnergyMonitorCard';
import LightBulbCard from './components/LightBulbCard';
import SmallDeviceCardWithPopup from './components/SmallDeviceCardWithPopup';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SpeakerIcon from '@mui/icons-material/Speaker';
import TvIcon from '@mui/icons-material/Tv';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function Dashboard() {
  return (
    <Box>
      <Header />
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <SmartThermostat />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ACCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <EnergyMonitorCard />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <LightBulbCard />
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <SmallDeviceCardWithPopup
              icon={MusicNoteIcon}
              title="Nest Audio"
              subtitle="2 hours ago"
              dialogTitle="Nest Audio"
              dialogContent={
                <>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <img
                      src="https://via.placeholder.com/50"
                      alt="Album Art"
                      style={{ borderRadius: '4px', marginRight: '16px' }}
                    />
                    <Box>
                      <Typography variant="body1">I Wasn't Born To Follow</Typography>
                      <Typography variant="body2" color="text.secondary">
                        The Byrds
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Source: Spotify
                  </Typography>
                </>
              }
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <SmallDeviceCardWithPopup
              icon={SpeakerIcon}
              title="Living Room Speaker"
              subtitle="Connected"
              dialogTitle="Living Room Speaker"
              dialogContent={<Typography variant="body1">Speaker settings go here.</Typography>}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <SmallDeviceCardWithPopup
              icon={TvIcon}
              title="Smart TV"
              subtitle="Off"
              dialogTitle="Smart TV"
              dialogContent={<Typography variant="body1">TV settings go here.</Typography>}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <SmallDeviceCardWithPopup
              icon={WbSunnyIcon}
              title="Sun Sensor"
              subtitle="Active"
              dialogTitle="Sun Sensor"
              dialogContent={<Typography variant="body1">Sensor data goes here.</Typography>}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
