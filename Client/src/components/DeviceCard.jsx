import React from 'react';
import { Card, CardContent, Typography, Button, Box, TextField } from '@mui/material';

function DeviceCard({ device, toggleDevice, changeTemperature }) {
  return (
    <Card sx={{ minWidth: 275, margin: '1rem', padding: '1rem' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {device.name}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
          Status: {device.status ? 'On' : 'Off'}
        </Typography>
        {device.temperature !== null && (
          <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
            Temperature: {device.temperature}°C
          </Typography>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button
            variant="contained"
            color={device.status ? 'secondary' : 'primary'}
            onClick={() => toggleDevice(device._id, device.status)}
          >
            {device.status ? 'Turn Off' : 'Turn On'}
          </Button>
          {device.temperature !== null && (
            <TextField
              type="number"
              label="Change Temperature"
              variant="outlined"
              value={device.temperature}
              onChange={(e) => changeTemperature(device._id, e.target.value)}
              sx={{ marginLeft: '1rem' }}
              inputProps={{ min: 16, max: 30 }}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default DeviceCard;
