import { AppError } from '../utils/AppError.js';

const send = (res, status, code, message, details) =>
  res.status(status).json({ ok: false, error: { code, message, details } });

export function notFound(req, res) {
  send(res, 404, 'NOT_FOUND', `Ruta no encontrada: ${req.method} ${req.originalUrl}`);
}

// Express reconoce un manejador de errores por sus 4 parámetros: no quites "next"
export function errorHandler(err, req, res, next) {
  if (err instanceof AppError) return send(res, err.status, err.code, err.message, err.details);
  if (err.code === 'ER_DUP_ENTRY') return send(res, 409, 'DUPLICATE', 'Ya existe un registro con ese valor único');
  if (err.code === 'ER_NO_REFERENCED_ROW_2') return send(res, 400, 'INVALID_REFERENCE', 'Hace referencia a un registro que no existe');
  if (err.code === 'ER_ROW_IS_REFERENCED_2') return send(res, 409, 'IN_USE', 'No se puede eliminar: tiene registros relacionados');
  if (err.type === 'entity.parse.failed') return send(res, 400, 'INVALID_JSON', 'El cuerpo no es un JSON válido');

  console.error(err); // el detalle queda en tu consola, no en la respuesta
  send(res, 500, 'INTERNAL_ERROR', 'Error interno del servidor');
}