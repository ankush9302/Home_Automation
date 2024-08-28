import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Box, IconButton, Dialog, DialogTitle, DialogContent, Slider } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import AirIcon from '@mui/icons-material/Air';  // Import Air icon for Air Purifier representation
import RemoveIcon from '@mui/icons-material/Remove';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

function ClimateSection() {
  const [acTemperatureDownstairs, setAcTemperatureDownstairs] = useState(25.5);
  const [acTemperatureUpstairs, setAcTemperatureUpstairs] = useState(21.0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(65);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const increaseTemperatureDownstairs = () => {
    setAcTemperatureDownstairs((prevTemp) => prevTemp + 0.5);
  };
  const handleAcCard = () => {
    navigate('/Ac')
  }

  const decreaseTemperatureDownstairs = () => {
    setAcTemperatureDownstairs((prevTemp) => prevTemp - 0.5);
  };

  const increaseTemperatureUpstairs = () => {
    setAcTemperatureUpstairs((prevTemp) => prevTemp + 0.5);
  };

  const decreaseTemperatureUpstairs = () => {
    setAcTemperatureUpstairs((prevTemp) => prevTemp - 0.5);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <WbSunnyIcon sx={{ mr: 1 }} /> Others
        </Box>
      </Typography>
      <Grid container spacing={2}>
        {/* Sun Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              {/* Change the icon to one more representative of an Air Purifier */}
              <AirIcon color="primary" sx={{ mr: 2 }} />
              <Box>
                <Typography variant="body1">Air Purifier</Typography>
                <Typography variant="body2">Status: Active</Typography>
              </Box>
            </CardContent>
          </Card>

        </Grid>
        {/* Music Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card onClick={handleClickOpen} sx={{ cursor: 'pointer' }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
              <MusicNoteIcon color="primary" sx={{ mr: 2 }} />
              <Box>
                <Typography variant="body1">Nest Audio</Typography>
                <Typography variant="body2">2 hours ago</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        {/* Downstairs AC Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card onClick={handleAcCard}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <HomeIcon color="warning" sx={{ mr: 1 }} />
                <Typography variant="body1">Restroom Ac</Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Comfort: 20.8°C
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <IconButton onClick={decreaseTemperatureDownstairs}>
                  <RemoveIcon />
                </IconButton>
                <Typography variant="h6">{acTemperatureDownstairs}°C</Typography>
                <IconButton onClick={increaseTemperatureDownstairs}>
                  <AddIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        {/* Upstairs AC Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <HomeIcon color="warning" sx={{ mr: 1 }} />
                <Typography variant="body1">Living Room AC</Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Comfort: 21.7°C
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <IconButton onClick={decreaseTemperatureUpstairs}>
                  <RemoveIcon />
                </IconButton>
                <Typography variant="h6">{acTemperatureUpstairs}°C</Typography>
                <IconButton onClick={increaseTemperatureUpstairs}>
                  <AddIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Music Player Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          Nest Audio
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <img
              src="https://via.placeholder.com/50" // Replace with actual album art if available
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
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <IconButton onClick={togglePlayPause}>
              {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            <Slider
              value={volume}
              onChange={handleVolumeChange}
              aria-labelledby="volume-slider"
              sx={{ width: '70%' }}
            />
            <VolumeUpIcon />
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Source
            </Typography>
            <Typography variant="body1">Spotify</Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default ClimateSection;
