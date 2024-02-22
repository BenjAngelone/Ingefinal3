CREATE DATABASE IF NOT EXISTS basededatospalabra;
USE basededatospalabra;

CREATE TABLE IF NOT EXISTS palabras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    original VARCHAR(255) NOT NULL,
    en_espejo VARCHAR(255) NOT NULL
);
-- Inserta algunas palabras de ejemplo en la tabla palabras
INSERT INTO palabras (original, en_espejo) VALUES
('casa', 'asac'),
('perro', 'orrep'),
('sol', 'los');

-- Puedes agregar más filas de la misma manera si deseas insertar más datos.
