import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';

const TemperatureInput = () => {
  const [temperature, setTemperature] = useState(24);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/ac/temperature', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ temperature })
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Set Temperature"
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
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

export default TemperatureInput;
