require('dotenv').config(); // configs env variables
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const vehicleRoutes = require('./routes/vehicle');
const userRoutes = require('./routes/user');
const rentRoutes = require('./routes/rent');
const app = express();

// middlewares
app.use(express.json()); // parse incoming requests to json
app.use(morgan('dev')); // logs accessed endpoint
app.use(cors()); // allow cross origin requests

const PORT = process.env.PORT || 5000;

// connect to database
connectDB();

// routes
app.get('/api', (req, res) => res.send('Happy hacking!'));
app.use('/api/auth', authRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/users', userRoutes);
app.use('/api/rents', rentRoutes);

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
