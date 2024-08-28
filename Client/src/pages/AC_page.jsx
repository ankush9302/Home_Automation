import React from 'react';
import DevicePage from '../components/DevicePage';
import MaintenanceSettings from '../components/MaintenanceSettings';

const ACPage = () => {
  const energyData = [
    { timestamp: '08:00', energyConsumed: 1.2 },
    { timestamp: '12:00', energyConsumed: 1.5 },
    // More data...
  ];

  const graphData = {
    labels: energyData.map((entry) => entry.timestamp),
    datasets: [
      { label: 'Energy Consumption (kWh)', data: energyData.map((entry) => entry.energyConsumed), borderColor: 'rgba(75,192,192,1)', backgroundColor: 'rgba(75,192,192,0.2)', fill: true, tension: 0.4, pointRadius: 4, pointHoverRadius: 6 },
    ],
  };

  const handleMaintenanceSubmit = (temperature) => {
    console.log('Set temperature to:', temperature);
  };

  return (
    <DevicePage
      deviceName="Air Conditioner"
      maintenanceComponent={<MaintenanceSettings title="Temperature" onSubmit={handleMaintenanceSubmit} />}
      energyGraphProps={{ data: graphData, title: 'Energy Consumption Over Time', xLabel: 'Time', yLabel: 'kWh' }}
      currentEnergyProps={{ updateInterval: 5000, maxEntries: 50 }}
    />
  );
};

export default ACPage;
