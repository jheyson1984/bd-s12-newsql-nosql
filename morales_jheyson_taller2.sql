-- =====================================================================
-- R2-A2-S12 · Parte SQL · Taller 2 "Preguntándole a los datos"
-- Jheyson Jair Morales Serrato · Big Data 604024
-- Herramienta: sqliteonline.com (base cargada con sql/01_crear_base.sql)
-- =====================================================================

-- A7. Días con temperatura mayor a 28 °C, del más caliente al más frío
SELECT ci.nombre, cl.fecha, cl.temperatura_c
FROM clima cl
JOIN ciudades ci ON cl.id_ciudad = ci.id_ciudad
WHERE cl.temperatura_c > 28
ORDER BY cl.temperatura_c DESC;

-- B6. Número de ventas por cliente, de mayor a menor
SELECT id_cliente, COUNT(*) AS num_ventas
FROM ventas
GROUP BY id_cliente
ORDER BY num_ventas DESC;

-- C5. Temperatura promedio por ciudad, con el nombre de la ciudad
SELECT ci.nombre AS ciudad, ROUND(AVG(cl.temperatura_c), 1) AS temp_promedio
FROM clima cl
JOIN ciudades ci ON cl.id_ciudad = ci.id_ciudad
GROUP BY ci.nombre
ORDER BY temp_promedio DESC;

-- R1. Los 3 libros más vendidos en unidades
SELECT l.titulo, SUM(v.cantidad) AS unidades
FROM ventas v
JOIN libros l ON v.id_libro = l.id_libro
GROUP BY l.titulo
ORDER BY unidades DESC
LIMIT 3;

-- R2. Libros que nunca se han vendido
SELECT id_libro, titulo
FROM libros
WHERE id_libro NOT IN (SELECT id_libro FROM ventas);

-- R3. Los 3 días de agosto con más ventas
SELECT fecha, COUNT(*) AS num_ventas
FROM ventas
GROUP BY fecha
ORDER BY num_ventas DESC
LIMIT 3;

-- R4. Hipótesis: "en las ciudades más calientes se venden menos libros"
SELECT ci.nombre AS ciudad,
       (SELECT ROUND(AVG(temperatura_c), 1) FROM clima cl WHERE cl.id_ciudad = ci.id_ciudad) AS temp_promedio,
       COALESCE(SUM(v.cantidad), 0) AS libros_vendidos
FROM ciudades ci
LEFT JOIN clientes c ON c.id_ciudad = ci.id_ciudad
LEFT JOIN ventas v   ON v.id_cliente = c.id_cliente
GROUP BY ci.nombre
ORDER BY temp_promedio DESC;
-- Respuesta: escribir con sus palabras (ver guía).

-- R5. Reflexión: escribir con sus palabras (ver guía).
