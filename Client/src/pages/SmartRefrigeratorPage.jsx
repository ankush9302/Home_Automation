import React from 'react';
import DevicePage from '../components/DevicePage';
import MaintenanceSettings from '../components/MaintenanceSettings';

const SmartRefrigeratorPage = () => {
  const energyData = [
    { timestamp: '08:00', energyConsumed: 0.8 },
    { timestamp: '12:00', energyConsumed: 0.6 },
    // More data...
  ];

  const graphData = {
    labels: energyData.map((entry) => entry.timestamp),
    datasets: [
      { label: 'Energy Consumption (kWh)', data: energyData.map((entry) => entry.energyConsumed), borderColor: 'rgba(255,159,64,1)', backgroundColor: 'rgba(255,159,64,0.2)', fill: true, tension: 0.4, pointRadius: 4, pointHoverRadius: 6 },
    ],
  };

  const handleMaintenanceSubmit = (temperature) => {
    console.log('Set refrigerator temperature to:', temperature);
  };

  return (
    <DevicePage
      deviceName="Smart Refrigerator"
      maintenanceComponent={<MaintenanceSettings title="Refrigerator Temperature" onSubmit={handleMaintenanceSubmit} />}
      energyGraphProps={{ data: graphData, title: 'Energy Consumption Over Time', xLabel: 'Time', yLabel: 'kWh' }}
      currentEnergyProps={{ updateInterval: 5000, maxEntries: 50 }}
    />
  );
};

export default SmartRefrigeratorPage;
