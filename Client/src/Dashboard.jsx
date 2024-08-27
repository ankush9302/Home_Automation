import React, { useState } from 'react';
import { Grid, Box, Card, CardContent, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Header from './components/Header';
import DeviceCard from './components/DeviceCard';
import AddDeviceDialog from './components/AddDeviceDialog';
import DetailsDialog from './components/DetailsDialog';

function Dashboard() {
  const initialDevices = [
    { id: 1, title: 'Living Room Temperature', status: '22.8°C', isOn: true, type: 'Temperature' },
    { id: 2, title: 'Home Power', status: '797.86 W', isOn: true, type: 'Power' },
    { id: 3, title: 'EV Status', status: 'Unplugged', isOn: false, type: 'Status' },
    // Add more devices if needed...
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
      <Header />
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {devices.map((device) => (
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
