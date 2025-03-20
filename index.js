const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const taskRoutes = require('./routes/task');


app.use(cors());

// Database connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.log(err))

// Routes
app.use(express.json());
app.use('/api/task', taskRoutes);


// Set up the server
app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
});