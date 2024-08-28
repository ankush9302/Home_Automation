import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';

const MaintenanceSettings = ({ title, onSubmit }) => {
  const [inputValue, setInputValue] = useState(24);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label={`Set ${title}`}
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Set
        </Button>
      </form>
    </Container>
  );
};

export default MaintenanceSettings;
