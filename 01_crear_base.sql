-- Taller 2 · Introducción a SQL · Base de datos de ejemplo
-- Pega TODO este archivo en sqliteonline.com y presiona Run (F9).
-- Crea 5 tablas: ciudades, clima, libros, clientes, ventas.

DROP TABLE IF EXISTS ventas; DROP TABLE IF EXISTS clientes; DROP TABLE IF EXISTS libros; DROP TABLE IF EXISTS clima; DROP TABLE IF EXISTS ciudades;

CREATE TABLE ciudades (
  id_ciudad INTEGER PRIMARY KEY,
  nombre TEXT NOT NULL,
  departamento TEXT,
  altitud_m INTEGER
);
INSERT INTO ciudades VALUES
  (1,'Bogotá','Cundinamarca',2640),
  (2,'Medellín','Antioquia',1495),
  (3,'Cali','Valle del Cauca',1018),
  (4,'Barranquilla','Atlántico',18),
  (5,'Cartagena','Bolívar',2);

-- Datos recolectados con la API de Open-Meteo en el Taller 1 (una fila por ciudad y día)
CREATE TABLE clima (
  id_clima INTEGER PRIMARY KEY AUTOINCREMENT,
  id_ciudad INTEGER REFERENCES ciudades(id_ciudad),
  fecha TEXT,
  temperatura_c REAL,
  humedad_pct INTEGER,
  viento_kmh REAL
);
INSERT INTO clima (id_ciudad, fecha, temperatura_c, humedad_pct, viento_kmh) VALUES
  (1,'2026-09-01',14.6,75,10.8),
  (1,'2026-09-02',13.4,77,10.8),
  (1,'2026-09-03',14.7,83,6.9),
  (2,'2026-09-01',22.3,62,4.7),
  (2,'2026-09-02',21.7,71,4.3),
  (2,'2026-09-03',21.6,72,8.3),
  (3,'2026-09-01',25.8,65,11.8),
  (3,'2026-09-02',26.9,58,12.9),
  (3,'2026-09-03',25.0,64,10.3),
  (4,'2026-09-01',29.1,81,17.6),
  (4,'2026-09-02',28.9,70,17.8),
  (4,'2026-09-03',29.6,73,20.4),
  (5,'2026-09-01',30.1,81,12.9),
  (5,'2026-09-02',30.7,74,15.5),
  (5,'2026-09-03',30.4,82,17.5);

-- Datos recolectados con web scraping de books.toscrape.com en el Taller 1
CREATE TABLE libros (
  id_libro INTEGER PRIMARY KEY,
  titulo TEXT NOT NULL,
  precio_gbp REAL,
  valoracion INTEGER,
  disponible TEXT
);
INSERT INTO libros VALUES
  (1,'A Light in the Attic',51.77,3,'In stock'),
  (2,'Tipping the Velvet',53.74,1,'In stock'),
  (3,'Soumission',50.1,1,'In stock'),
  (4,'Sharp Objects',47.82,4,'In stock'),
  (5,'Sapiens: A Brief History of Humankind',54.23,5,'In stock'),
  (6,'The Requiem Red',22.65,1,'In stock'),
  (7,'The Dirty Little Secrets of Getting Your Dream Job',33.34,4,'In stock'),
  (8,'The Coming Woman: A Novel Based on the Life of the Infamous Feminist, Victoria Woodhull',17.93,3,'In stock'),
  (9,'The Boys in the Boat',22.6,4,'In stock'),
  (10,'The Black Maria',52.15,1,'In stock'),
  (11,'Starving Hearts (Triangular Trade Trilogy, #1)',13.99,2,'In stock'),
  (12,'Shakespeare''s Sonnets',20.66,4,'In stock'),
  (13,'Set Me Free',17.46,5,'In stock'),
  (14,'Scott Pilgrim''s Precious Little Life (Scott Pilgrim #1)',52.29,5,'In stock'),
  (15,'Rip it Up and Start Again',35.02,5,'In stock'),
  (16,'Our Band Could Be Your Life: Scenes from the American Indie Underground, 1981-1991',57.25,3,'In stock'),
  (17,'Olio',23.88,1,'In stock'),
  (18,'Mesaerion: The Best Science Fiction Stories 1800-1849',37.59,1,'In stock'),
  (19,'Libertarianism for Beginners',51.33,2,'In stock'),
  (20,'It''s Only the Himalayas',45.17,2,'In stock');

-- Librería ficticia 'El Dorado': clientes y ventas de agosto de 2026
CREATE TABLE clientes (
  id_cliente INTEGER PRIMARY KEY,
  nombre TEXT NOT NULL,
  id_ciudad INTEGER REFERENCES ciudades(id_ciudad)
);
INSERT INTO clientes VALUES
  (1,'Ana María Rojas',1),
  (2,'Carlos Pérez',2),
  (3,'Luisa Fernanda Gómez',1),
  (4,'Jorge Martínez',3),
  (5,'Valentina Torres',4),
  (6,'Andrés Castaño',2),
  (7,'Camila Herrera',5),
  (8,'Santiago Ruiz',3);

CREATE TABLE ventas (
  id_venta INTEGER PRIMARY KEY,
  id_cliente INTEGER REFERENCES clientes(id_cliente),
  id_libro INTEGER REFERENCES libros(id_libro),
  cantidad INTEGER,
  fecha TEXT
);
INSERT INTO ventas VALUES
  (1,6,19,1,'2026-08-23'),
  (2,2,2,3,'2026-08-08'),
  (3,5,3,1,'2026-08-28'),
  (4,2,13,1,'2026-08-15'),
  (5,6,6,1,'2026-08-12'),
  (6,4,9,3,'2026-08-30'),
  (7,2,20,3,'2026-08-06'),
  (8,4,6,2,'2026-08-13'),
  (9,5,18,1,'2026-08-22'),
  (10,6,2,1,'2026-08-27'),
  (11,1,11,2,'2026-08-09'),
  (12,2,7,2,'2026-08-29'),
  (13,6,7,3,'2026-08-16'),
  (14,7,15,1,'2026-08-09'),
  (15,3,8,3,'2026-08-18'),
  (16,5,19,2,'2026-08-29'),
  (17,7,12,1,'2026-08-05'),
  (18,8,3,1,'2026-08-28'),
  (19,2,5,3,'2026-08-06'),
  (20,7,20,1,'2026-08-13'),
  (21,7,20,2,'2026-08-17'),
  (22,5,18,1,'2026-08-22'),
  (23,2,18,1,'2026-08-25'),
  (24,6,4,1,'2026-08-14'),
  (25,3,15,1,'2026-08-31'),
  (26,5,17,1,'2026-08-17'),
  (27,2,10,3,'2026-08-17'),
  (28,4,5,1,'2026-08-25'),
  (29,3,18,2,'2026-08-30'),
  (30,1,20,1,'2026-08-16'),
  (31,1,4,1,'2026-08-29'),
  (32,5,8,1,'2026-08-08'),
  (33,2,3,3,'2026-08-16'),
  (34,2,18,1,'2026-08-05'),
  (35,8,18,1,'2026-08-09'),
  (36,7,7,2,'2026-08-25'),
  (37,4,10,2,'2026-08-22'),
  (38,6,15,2,'2026-08-15'),
  (39,2,8,1,'2026-08-03'),
  (40,6,1,2,'2026-08-18'),
  (41,4,19,1,'2026-08-01'),
  (42,2,2,1,'2026-08-03'),
  (43,1,11,1,'2026-08-17'),
  (44,4,9,3,'2026-08-16'),
  (45,4,18,1,'2026-08-24');

-- Verificación rápida:
SELECT 'ciudades' AS tabla, COUNT(*) AS filas FROM ciudades
UNION ALL SELECT 'clima', COUNT(*) FROM clima
UNION ALL SELECT 'libros', COUNT(*) FROM libros
UNION ALL SELECT 'clientes', COUNT(*) FROM clientes
UNION ALL SELECT 'ventas', COUNT(*) FROM ventas;
