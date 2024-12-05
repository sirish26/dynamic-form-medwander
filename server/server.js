const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formRoutes = require('./routes/forms');
require('dotenv').config();

const app = express();
app.use(express.json());

const allowedOrigins = [
    'https://potential-space-fishstick-q5qqg9r5qj7hxw46-3000.app.github.dev',
    'http://localhost:3000',
];

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
}));

app.options('*', cors());

mongoose.connect(process.env.uri)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error));

app.use('/api/forms', formRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
