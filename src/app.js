import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes/index.js';
import { notFound, errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/v1/health', (req, res) => res.json({ ok: true, data: { status: 'up' } }));
app.use('/api/v1', routes);

app.use(notFound); // siempre después de las rutas
app.use(errorHandler); // siempre al final

export default app;