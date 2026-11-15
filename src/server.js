import express from 'express';
import cors from 'cors';
import { logger } from './middleware/logger.js';
import dotenv from 'dotenv';
import { connectMongoDB } from './db/connectMongoDB.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import notesRoutes from './routes/notesRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

// routes
app.use(notesRoutes);

app.use(notFoundHandler);

app.use(errorHandler);

await connectMongoDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
