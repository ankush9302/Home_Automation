import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Container, Typography } from '@mui/material';

const CurrentEnergyConsumption = ({ updateInterval = 5000, maxEntries = 50 }) => {
  const [energyData, setEnergyData] = useState([]);
  const [timestamps, setTimestamps] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newEnergyValue = (Math.random() * 1.9 + 0.1).toFixed(2);
      setTimestamps((prevTimestamps) => {
        const now = new Date();
        const newTimestamps = [...prevTimestamps, now.toLocaleTimeString()];
        return newTimestamps.length > maxEntries ? newTimestamps.slice(1) : newTimestamps;
      });
      setEnergyData((prevData) => {
        const newData = [...prevData, newEnergyValue];
        return newData.length > maxEntries ? newData.slice(1) : newData;
      });
    }, updateInterval);

    return () => clearInterval(interval);
  }, [updateInterval, maxEntries]);

  const data = {
    labels: timestamps,
    datasets: [{ label: 'Current Energy Consumption (kWh)', data: energyData, borderColor: 'rgba(255,99,132,1)', backgroundColor: 'rgba(255,99,132,0.2)', fill: true, tension: 0.4, pointRadius: 4, pointHoverRadius: 6 }],
  };

  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Current Energy Consumption
      </Typography>
      <Line data={data} />
    </Container>
  );
};

export default CurrentEnergyConsumption;
