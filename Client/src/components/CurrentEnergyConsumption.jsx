import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Container, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CurrentEnergyConsumption = () => {
  const [energyData, setEnergyData] = useState([]);
  const [timestamps, setTimestamps] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random energy consumption value between 0.1 and 2 kWh
      const newEnergyValue = (Math.random() * 1.9 + 0.1).toFixed(2);
      
      // Add new timestamp and energy value
      setTimestamps(prevTimestamps => {
        const now = new Date();
        const newTimestamps = [...prevTimestamps, now.toLocaleTimeString()];

        // Keep only the last 25 entries
        return newTimestamps.length > 50 ? newTimestamps.slice(1) : newTimestamps;
      });

      setEnergyData(prevData => {
        const newData = [...prevData, newEnergyValue];

        // Keep only the last 25 entries
        return newData.length > 50 ? newData.slice(1) : newData;
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: timestamps,
    datasets: [
      {
        label: 'Current Energy Consumption (kWh)',
        data: energyData,
        borderColor: 'rgba(255,99,132,1)',
        backgroundColor: 'rgba(255,99,132,0.2)',
        fill: true,
        tension: 0.4, // Smoothness of the line
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines on x-axis
        },
        title: {
          display: true,
          text: 'Time',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      y: {
        grid: {
          display: false, // Remove grid lines on y-axis
        },
        title: {
          display: true,
          text: 'Energy Consumption (kWh)',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 12,
          boxHeight: 12,
          padding: 10,
        },
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        callbacks: {
          label: context => ` ${context.parsed.y} kWh`,
        },
      },
    },
  };

  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Current Energy Consumption
      </Typography>
      <Line data={data} options={options} />
    </Container>
  );
};

export default CurrentEnergyConsumption;
