import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Grid, Card, CardContent, Dialog, DialogTitle, DialogContent, IconButton, Box, Switch, Button, TextField, MenuItem, Select, InputLabel, FormControl, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const DeviceCard = ({ device, onToggle, onOpenDetails }) => (
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

const AddDeviceDialog = ({ open, onClose, onAddDevice }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [type, setType] = useState('Temperature');

  const handleAdd = () => {
    onAddDevice({ title, status, type });
    setTitle('');
    setStatus('');
    setType('Temperature');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        Add New Device
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Device Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Device Status"
            variant="outlined"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <FormControl variant="outlined">
            <InputLabel>Device Type</InputLabel>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value)}
              label="Device Type"
            >
              <MenuItem value="Temperature">Temperature</MenuItem>
              <MenuItem value="Power">Power</MenuItem>
              <MenuItem value="Status">Status</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleAdd}>
            Add Device
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

const DetailsDialog = ({ open, onClose, device }) => (
  <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
    <DialogTitle>
      {device?.title}
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DialogContent>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Status: {device?.status}
      </Typography>
      <Typography variant="body2">
        {device?.isOn ? 'The device is currently ON.' : 'The device is currently OFF.'}
      </Typography>
    </DialogContent>
  </Dialog>
);

function Dashboard() {
  const initialDevices = [
    { id: 1, title: 'Living Room Temperature', status: '22.8°C', isOn: true, type: 'Temperature' },
    { id: 2, title: 'Home Power', status: '797.86 W', isOn: true, type: 'Power' },
    { id: 3, title: 'EV Status', status: 'Unplugged', isOn: false, type: 'Status' },
    // You can add more devices here...
  ];

  const [devices, setDevices] = useState(initialDevices);
  const [selectedCard, setSelectedCard] = useState(null);
  const [openDetails, setOpenDetails] = useState(false);
  const [openAddForm, setOpenAddForm] = useState(false);

  const handleClickOpenDetails = (card) => {
    setSelectedCard(card);
    setOpenDetails(true);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
  };

  const handleClickOpenAddForm = () => {
    setOpenAddForm(true);
  };

  const handleCloseAddForm = () => {
    setOpenAddForm(false);
  };

  const handleToggle = (id) => {
    setDevices(devices.map(device =>
      device.id === id ? { ...device, isOn: !device.isOn } : device
    ));
  };

  const handleAddDevice = (newDevice) => {
    const device = {
      id: devices.length + 1,
      title: newDevice.title,
      status: newDevice.status,
      isOn: false,
      type: newDevice.type
    };
    setDevices([...devices, device]);
    handleCloseAddForm();
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Smart Home Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {devices.slice(0, 4).map((device) => (
            <DeviceCard
              key={device.id}
              device={device}
              onToggle={handleToggle}
              onOpenDetails={handleClickOpenDetails}
            />
          ))}
          {devices.length < 4 && (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card onClick={handleClickOpenAddForm} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', height: '100%', boxShadow: 3, borderRadius: 2, p: 2 }}>
                <CardContent>
                  <Typography variant="h3" color="primary">
                    <AddIcon fontSize="large" />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Add New Device
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </Box>

      <DetailsDialog
        open={openDetails}
        onClose={handleCloseDetails}
        device={selectedCard}
      />

      <AddDeviceDialog
        open={openAddForm}
        onClose={handleCloseAddForm}
        onAddDevice={handleAddDevice}
      />
    </Box>
  );
}

export default Dashboard;