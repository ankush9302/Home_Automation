exports.setTemperature = async (req, res) => {
  const { temperature } = req.body;

  try {
    // Logic to set temperature
    res.status(200).json({ message: 'Temperature set successfully', temperature });
  } catch (error) {
    res.status(500).json({ message: 'Failed to set temperature', error });
  }
};
exports.getEnergyData = async (req, res) => {
  try {
    // Generate random data for the last 30 days
    const generateRandomData = () => {
      const data = [];
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 30);

      for (let i = 0; i < 30; i++) { // 30 days of data
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);

        const energyConsumed = Math.random() * 10; // Random energy between 5-15 kWh per day

        data.push({
          timestamp: date,
          energyConsumed: parseFloat(energyConsumed.toFixed(2)),
        });
      }

      return data;
    };

    const data = generateRandomData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve data', error });
  }
};
