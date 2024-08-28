import React from 'react';
import DevicePage from '../components/DevicePage';
import MaintenanceSettings from '../components/MaintenanceSettings';

const EnergyMonitorPage = () => {
  const energyData = [
    { timestamp: '08:00', energyConsumed: 2.5 },
    { timestamp: '12:00', energyConsumed: 3.0 },
    // More data...
  ];

  const graphData = {
    labels: energyData.map((entry) => entry.timestamp),
    datasets: [
      { label: 'Power Consumption (kWh)', data: energyData.map((entry) => entry.energyConsumed), borderColor: 'rgba(54, 162, 235, 1)', backgroundColor: 'rgba(54, 162, 235, 0.2)', fill: true, tension: 0.4, pointRadius: 4, pointHoverRadius: 6 },
    ],
  };

  const handleMaintenanceSubmit = (threshold) => {
    console.log('Set power consumption threshold to:', threshold);
  };

  return (
    <DevicePage
      deviceName="Energy Monitor"
      maintenanceComponent={<MaintenanceSettings title="Power Consumption Threshold" onSubmit={handleMaintenanceSubmit} />}
      energyGraphProps={{ data: graphData, title: 'Power Consumption Over Time', xLabel: 'Time', yLabel: 'kWh' }}
      currentEnergyProps={{ updateInterval: 5000, maxEntries: 50 }}
    />
  );
};

export default EnergyMonitorPage;
