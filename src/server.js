import 'dotenv/config';
import app from './app.js';
import { pool } from './config/db.js';

const PORT = process.env.PORT || 3000;

try {
  await pool.query('SELECT 1');
  console.log('Conectado a MySQL');

  app.listen(PORT, () => console.log(`API en http://localhost:${PORT}/api/v1`));
} catch (e) {
  console.error('No se pudo conectar a MySQL:', e.message);
  process.exit(1);
}