import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function DetailsDialog({ open, onClose, device }) {
  return (
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
}

export default DetailsDialog;
