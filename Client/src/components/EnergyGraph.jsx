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

const EnergyGraph = () => {
  const [energyData, setEnergyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/ac/energy');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEnergyData(data);
        console.log("ac data", data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };    
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short' }; // e.g., 20 Aug
    return new Intl.DateTimeFormat('en-GB', options).format(new Date(dateString));
  };
  

  const data = {
    labels: energyData.map(entry => formatDate(entry.timestamp)), // Format to show date in dd-MMM format
    datasets: [
      {
        label: 'Energy Consumption (kWh)',
        data: energyData.map(entry => entry.energyConsumed),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
        tension: 0.4, // Smoothness of the line
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines on x-axis
        },
      },
      y: {
        grid: {
          display: false, // Remove grid lines on y-axis
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };


  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Energy Consumption Over Time (Previous 1 month)
      </Typography>
      <Line data={data} options={options} />
    </Container>
  );
};

export default EnergyGraph;
