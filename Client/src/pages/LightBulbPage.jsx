import React from 'react';
import DevicePage from '../components/DevicePage';
import MaintenanceSettings from '../components/MaintenanceSettings';

const LightBulbPage = () => {
  const energyData = [
    { timestamp: '08:00', energyConsumed: 0.2 },
    { timestamp: '12:00', energyConsumed: 0.3 },
    // More data...
  ];

  const graphData = {
    labels: energyData.map((entry) => entry.timestamp),
    datasets: [
      { label: 'Light Energy Consumption (kWh)', data: energyData.map((entry) => entry.energyConsumed), borderColor: 'rgba(153, 102, 255, 1)', backgroundColor: 'rgba(153, 102, 255, 0.2)', fill: true, tension: 0.4, pointRadius: 4, pointHoverRadius: 6 },
    ],
  };

  const handleMaintenanceSubmit = (brightness) => {
    console.log('Set light brightness to:', brightness);
  };

  return (
    <DevicePage
      deviceName="Smart Light Bulb"
      maintenanceComponent={<MaintenanceSettings title="Brightness Level" onSubmit={handleMaintenanceSubmit} />}
      energyGraphProps={{ data: graphData, title: 'Energy Consumption Over Time', xLabel: 'Time', yLabel: 'kWh' }}
      currentEnergyProps={{ updateInterval: 5000, maxEntries: 50 }}
    />
  );
};

export default LightBulbPage;
