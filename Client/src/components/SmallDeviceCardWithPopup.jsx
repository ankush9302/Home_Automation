import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, IconButton, Dialog, DialogTitle, DialogContent, Slider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function SmallDeviceCardWithPopup({ icon: IconComponent, title, subtitle, dialogTitle, dialogContent }) {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(65);

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
    <>
      <Card onClick={handleClickOpen} sx={{ cursor: 'pointer' }}>
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          <IconComponent color="primary" sx={{ mr: 2, fontSize: 30 }} />
          <Box>
            <Typography variant="body1">{title}</Typography>
            <Typography variant="body2" color="text.secondary">{subtitle}</Typography>
          </Box>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          {dialogTitle}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {dialogContent}
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
        </DialogContent>
      </Dialog>
    </>
  );
}

export default SmallDeviceCardWithPopup;
