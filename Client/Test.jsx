import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ThermostatIcon from '@mui/icons-material/Thermostat';

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = [
    {
      title: 'Living Room',
      items: [
        { name: 'Floor Lamp', status: '70%', icon: <LightbulbIcon /> },
        { name: 'Spotlights', status: '49%', icon: <LightbulbIcon /> },
        { name: 'Temperature', status: '22.8°C', icon: <ThermostatIcon /> },
      ],
    },
    // ... Other sections
  ];

  const handleCardClick = (section) => {
    setSelectedSection(section);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSection(null);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Smart Home Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {sections.map((section) => (
            <Grid item xs={12} md={6} lg={3} key={section.title}>
              <Card
                onClick={() => handleCardClick(section)}
                sx={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {section.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedSection?.title} Details</DialogTitle>
        <DialogContent dividers>
          {selectedSection?.items.map((item) => (
            <Box key={item.name} sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {item.icon}
                <Typography sx={{ ml: 1 }}>{item.name}</Typography>
              </Box>
              <Typography>{item.status}</Typography>
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Dashboard;