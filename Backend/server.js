const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const deviceRoutes = require('./routes/deviceRoutes');
require('dotenv').config();
const acRoutes = require('./routes/acRoutes')
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/devices', deviceRoutes);
app.use('/api/ac', acRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
