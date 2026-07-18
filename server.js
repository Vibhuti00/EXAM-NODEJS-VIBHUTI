import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import facultyUserRoutes from '../server/routes/facultyuser.routes.js';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/facultydb';
app.use(express.json());
app.use('/api/faculty', facultyUserRoutes);
mongoose.connect(mongoUri)
                            .then(() => console.log('MongoDB connected'))
                            .catch((err) => console.error('MongoDB connection error:', err));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
