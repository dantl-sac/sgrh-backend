import { Router } from 'express';
import auth from './auth.routes.js';
import habitaciones from './habitaciones.routes.js';

const router = Router();
router.use('/auth', auth);
router.use('/habitaciones', habitaciones);
// luego: sucursales, servicios, turnos, personas, recepcionistas, reservas, pagos
export default router;