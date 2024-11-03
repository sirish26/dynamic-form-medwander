const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formRoutes = require('./routes/forms');
require('dotenv').config();

const app = express();
app.use(express.json());

// List both 'localhost' and '127.0.0.1' variants here
const allowedOrigins = [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'https://potential-space-fishstick-q5qqg9r5qj7hxw46-3000.app.github.dev',
];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

mongoose.connect(process.env.uri)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error));

app.use('/api/forms', formRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
