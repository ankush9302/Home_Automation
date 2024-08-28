import React from 'react';
import { Line } from 'react-chartjs-2';
import { Container, Typography } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EnergyGraph = ({ data, title, xLabel, yLabel }) => {
  const options = {
    scales: {
      x: { grid: { display: false }, title: { display: true, text: xLabel, font: { size: 14, weight: 'bold' } } },
      y: { grid: { display: false }, title: { display: true, text: yLabel, font: { size: 14, weight: 'bold' } }, beginAtZero: true },
    },
    plugins: { legend: { display: true, position: 'top' }, tooltip: { enabled: true } },
  };

  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Line data={data} options={options} />
    </Container>
  );
};

export default EnergyGraph;
