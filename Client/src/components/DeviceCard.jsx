import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Switch, Button, Divider, Avatar, Tooltip } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/system';

// Styled components for color coding with border animation
const StyledCard = styled(Card)(({ isOn }) => ({
  border: `2px solid ${isOn ? 'green' : 'red'}`,
  transition: 'border-color 0.3s ease, transform 0.3s ease',
  '&:hover': {
    borderColor: isOn ? 'darkgreen' : 'darkred',
    transform: 'scale(1.02)', // Slightly scale up the card on hover
  },
}));

function DeviceCard({ device, onToggle, onOpenDetails }) {
  const getIcon = () => {
    switch (device.type) {
      case 'Temperature':
        return (
          <Tooltip title="Temperature Sensor">
            <DeviceThermostatIcon color="primary" sx={{ fontSize: 40 }} />
          </Tooltip>
        );
      case 'Power':
        return (
          <Tooltip title="Power Meter">
            <BatteryChargingFullIcon color="primary" sx={{ fontSize: 40 }} />
          </Tooltip>
        );
      case 'Status':
        return (
          <Tooltip title="Power Switch">
            <PowerSettingsNewIcon color="primary" sx={{ fontSize: 40 }} />
          </Tooltip>
        );
      default:
        return (
          <Tooltip title={device.title}>
            <Avatar>{device.title.charAt(0)}</Avatar>
          </Tooltip>
        );
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <StyledCard sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, boxShadow: 3, borderRadius: 2 }} isOn={device.isOn}>
        <CardContent sx={{ textAlign: 'center', width: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
            {getIcon()}
          </Box>
          <Typography variant="h6" sx={{ mb: 1 }}>{device.title}</Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {device.type === 'Temperature' ? (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <CircularProgress variant="determinate" value={device.temperaturePercentage || 50} color="secondary" />
                <Typography variant="body2">{device.status}</Typography>
              </Box>
            ) : (
              device.status
            )}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
            <Switch
              checked={device.isOn}
              onChange={() => onToggle(device.id)}
              color="primary"
              sx={{
                '& .MuiSwitch-switchBase': {
                  transition: 'transform 0.3s ease',
                },
                '& .MuiSwitch-switchBase.Mui-checked': {
                  transform: 'scale(1.1)',
                },
              }}
            />
            <Typography variant="body2" sx={{ ml: 1 }}>{device.isOn ? 'On' : 'Off'}</Typography>
          </Box>
          <Button variant="outlined" onClick={() => onOpenDetails(device)} color="primary">
            View Details
          </Button>
        </CardContent>
      </StyledCard>
    </Grid>
  );
}

export default DeviceCard;
