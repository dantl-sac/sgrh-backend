USE db_sgrh;

INSERT INTO EstadoOperativo (descripcion) VALUES ('DISPONIBLE'), ('OCUPADA'), ('LIMPIEZA'), ('MANTENIMIENTO');

INSERT INTO Turno (descripcion, horaInicio, horaFin) VALUES
  ('Mañana', '06:00', '14:00'), ('Tarde', '14:00', '22:00'), ('Noche', '22:00', '06:00');

INSERT INTO Sucursal (direccion, nombre, telefono, ubigeo) VALUES
  ('Av. Principal 123', 'Sede Central', '012345678', '000000');

INSERT INTO Habitacion (id, tipo, piso, aforo, precioBase, idEstado, idSucursal) VALUES
  ('0101', 'SIMPLE', 1, 1, 120.00, 1, 1),
  ('0102', 'DOBLE', 1, 2, 180.00, 1, 1),
  ('0201', 'SUITE', 2, 4, 350.00, 1, 1);

INSERT INTO Servicio (descripcion, precioBase, categoria, estado) VALUES
  ('Desayuno buffet', 35.00, 'ALIMENTOS', 'ACTIVO'),
  ('Lavandería por prenda', 8.00, 'LAVANDERIA', 'ACTIVO'),
  ('Traslado al aeropuerto', 90.00, 'TRANSPORTE', 'ACTIVO');