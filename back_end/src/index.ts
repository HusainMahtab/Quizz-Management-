import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AppDataSource } from './data-source';
 import authRoutes from './routes/authRoutes';
 import quizRoutes from './routes/quizRoutes';

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(
  cors({
    origin:['http://localhost:5173','https://quizz-management-5dws.onrender.com'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow these methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Ensure headers are allowed
  })
);
// Handle OPTIONS preflight requests
app.options('*', cors());

app.use(express.json());

// Initialize DataSource
AppDataSource.initialize()
  .then(() => {
    console.log('Connected to PostgreSQL');
  })
  .catch((err) => {
    console.error('Failed to connect to PostgreSQL:', err);
  });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/quizzes', quizRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});