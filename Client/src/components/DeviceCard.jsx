import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Switch, Button } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';

function DeviceCard({ device, onToggle, onOpenDetails }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, boxShadow: 3, borderRadius: 2 }}>
        <CardContent sx={{ textAlign: 'center' }}>
          {device.type === 'Temperature' && <DeviceThermostatIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />}
          {device.type === 'Power' && <BatteryChargingFullIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />}
          {device.type === 'Status' && <PowerSettingsNewIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />}
          <Typography variant="h6" sx={{ mb: 1 }}>{device.title}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{device.status}</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Switch
              checked={device.isOn}
              onChange={() => onToggle(device.id)}
              color="primary"
            />
            <Typography variant="body2" sx={{ ml: 1 }}>{device.isOn ? 'On' : 'Off'}</Typography>
          </Box>
          <Button variant="outlined" onClick={() => onOpenDetails(device)} color="primary" sx={{ mt: 2 }}>
            View Details
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default DeviceCard;
