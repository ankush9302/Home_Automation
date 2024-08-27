import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Box, TextField, MenuItem, Select, InputLabel, FormControl, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function AddDeviceDialog({ open, onClose, onAddDevice }) {
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
}

export default AddDeviceDialog;
