// =====================================================================
// R2-A2-S12 · Parte NoSQL · MongoDB
// Jheyson Jair Morales Serrato · Big Data 604024
// Mismos datos del Taller 2 (librería ficticia El Dorado), pasados de tablas a documentos.
// Cada venta es UN documento que lleva adentro (embebidos) al cliente y al libro.
// Ejecutar en la consola MONGOSH de MongoDB Compass, un bloque a la vez.
// =====================================================================

// N1. Crear / usar la base de datos
use libreria_eldorado

// N2. Cargar los 45 documentos de ventas
db.ventas.insertMany([
  {"id_venta": 1, "fecha": "2026-08-23", "cantidad": 1, "cliente": {"id": 6, "nombre": "Andrés Castaño", "ciudad": "Medellín"}, "libro": {"id": 19, "titulo": "Libertarianism for Beginners", "precio_gbp": 51.33, "valoracion": 2}},
  {"id_venta": 2, "fecha": "2026-08-08", "cantidad": 3, "cliente": {"id": 2, "nombre": "Carlos Pérez", "ciudad": "Medellín"}, "libro": {"id": 2, "titulo": "Tipping the Velvet", "precio_gbp": 53.74, "valoracion": 1}},
  {"id_venta": 3, "fecha": "2026-08-28", "cantidad": 1, "cliente": {"id": 5, "nombre": "Valentina Torres", "ciudad": "Barranquilla"}, "libro": {"id": 3, "titulo": "Soumission", "precio_gbp": 50.1, "valoracion": 1}},
  {"id_venta": 4, "fecha": "2026-08-15", "cantidad": 1, "cliente": {"id": 2, "nombre": "Carlos Pérez", "ciudad": "Medellín"}, "libro": {"id": 13, "titulo": "Set Me Free", "precio_gbp": 17.46, "valoracion": 5}},
  {"id_venta": 5, "fecha": "2026-08-12", "cantidad": 1, "cliente": {"id": 6, "nombre": "Andrés Castaño", "ciudad": "Medellín"}, "libro": {"id": 6, "titulo": "The Requiem Red", "precio_gbp": 22.65, "valoracion": 1}},
  {"id_venta": 6, "fecha": "2026-08-30", "cantidad": 3, "cliente": {"id": 4, "nombre": "Jorge Martínez", "ciudad": "Cali"}, "libro": {"id": 9, "titulo": "The Boys in the Boat", "precio_gbp": 22.6, "valoracion": 4}},
  {"id_venta": 7, "fecha": "2026-08-06", "cantidad": 3, "cliente": {"id": 2, "nombre": "Carlos Pérez", "ciudad": "Medellín"}, "libro": {"id": 20, "titulo": "It's Only the Himalayas", "precio_gbp": 45.17, "valoracion": 2}},
  {"id_venta": 8, "fecha": "2026-08-13", "cantidad": 2, "cliente": {"id": 4, "nombre": "Jorge Martínez", "ciudad": "Cali"}, "libro": {"id": 6, "titulo": "The Requiem Red", "precio_gbp": 22.65, "valoracion": 1}},
  {"id_venta": 9, "fecha": "2026-08-22", "cantidad": 1, "cliente": {"id": 5, "nombre": "Valentina Torres", "ciudad": "Barranquilla"}, "libro": {"id": 18, "titulo": "Mesaerion: The Best Science Fiction Stories 1800-1849", "precio_gbp": 37.59, "valoracion": 1}},
  {"id_venta": 10, "fecha": "2026-08-27", "cantidad": 1, "cliente": {"id": 6, "nombre": "Andrés Castaño", "ciudad": "Medellín"}, "libro": {"id": 2, "titulo": "Tipping the Velvet", "precio_gbp": 53.74, "valoracion": 1}},
  {"id_venta": 11, "fecha": "2026-08-09", "cantidad": 2, "cliente": {"id": 1, "nombre": "Ana María Rojas", "ciudad": "Bogotá"}, "libro": {"id": 11, "titulo": "Starving Hearts (Triangular Trade Trilogy, #1)", "precio_gbp": 13.99, "valoracion": 2}},
  {"id_venta": 12, "fecha": "2026-08-29", "cantidad": 2, "cliente": {"id": 2, "nombre": "Carlos Pérez", "ciudad": "Medellín"}, "libro": {"id": 7, "titulo": "The Dirty Little Secrets of Getting Your Dream Job", "precio_gbp": 33.34, "valoracion": 4}},
  {"id_venta": 13, "fecha": "2026-08-16", "cantidad": 3, "cliente": {"id": 6, "nombre": "Andrés Castaño", "ciudad": "Medellín"}, "libro": {"id": 7, "titulo": "The Dirty Little Secrets of Getting Your Dream Job", "precio_gbp": 33.34, "valoracion": 4}},
  {"id_venta": 14, "fecha": "2026-08-09", "cantidad": 1, "cliente": {"id": 7, "nombre": "Camila Herrera", "ciudad": "Cartagena"}, "libro": {"id": 15, "titulo": "Rip it Up and Start Again", "precio_gbp": 35.02, "valoracion": 5}},
  {"id_venta": 15, "fecha": "2026-08-18", "cantidad": 3, "cliente": {"id": 3, "nombre": "Luisa Fernanda Gómez", "ciudad": "Bogotá"}, "libro": {"id": 8, "titulo": "The Coming Woman: A Novel Based on the Life of the Infamous Feminist, Victoria Woodhull", "precio_gbp": 17.93, "valoracion": 3}},
  {"id_venta": 16, "fecha": "2026-08-29", "cantidad": 2, "cliente": {"id": 5, "nombre": "Valentina Torres", "ciudad": "Barranquilla"}, "libro": {"id": 19, "titulo": "Libertarianism for Beginners", "precio_gbp": 51.33, "valoracion": 2}},
  {"id_venta": 17, "fecha": "2026-08-05", "cantidad": 1, "cliente": {"id": 7, "nombre": "Camila Herrera", "ciudad": "Cartagena"}, "libro": {"id": 12, "titulo": "Shakespeare's Sonnets", "precio_gbp": 20.66, "valoracion": 4}},
  {"id_venta": 18, "fecha": "2026-08-28", "cantidad": 1, "cliente": {"id": 8, "nombre": "Santiago Ruiz", "ciudad": "Cali"}, "libro": {"id": 3, "titulo": "Soumission", "precio_gbp": 50.1, "valoracion": 1}},
  {"id_venta": 19, "fecha": "2026-08-06", "cantidad": 3, "cliente": {"id": 2, "nombre": "Carlos Pérez", "ciudad": "Medellín"}, "libro": {"id": 5, "titulo": "Sapiens: A Brief History of Humankind", "precio_gbp": 54.23, "valoracion": 5}},
  {"id_venta": 20, "fecha": "2026-08-13", "cantidad": 1, "cliente": {"id": 7, "nombre": "Camila Herrera", "ciudad": "Cartagena"}, "libro": {"id": 20, "titulo": "It's Only the Himalayas", "precio_gbp": 45.17, "valoracion": 2}},
  {"id_venta": 21, "fecha": "2026-08-17", "cantidad": 2, "cliente": {"id": 7, "nombre": "Camila Herrera", "ciudad": "Cartagena"}, "libro": {"id": 20, "titulo": "It's Only the Himalayas", "precio_gbp": 45.17, "valoracion": 2}},
  {"id_venta": 22, "fecha": "2026-08-22", "cantidad": 1, "cliente": {"id": 5, "nombre": "Valentina Torres", "ciudad": "Barranquilla"}, "libro": {"id": 18, "titulo": "Mesaerion: The Best Science Fiction Stories 1800-1849", "precio_gbp": 37.59, "valoracion": 1}},
  {"id_venta": 23, "fecha": "2026-08-25", "cantidad": 1, "cliente": {"id": 2, "nombre": "Carlos Pérez", "ciudad": "Medellín"}, "libro": {"id": 18, "titulo": "Mesaerion: The Best Science Fiction Stories 1800-1849", "precio_gbp": 37.59, "valoracion": 1}},
  {"id_venta": 24, "fecha": "2026-08-14", "cantidad": 1, "cliente": {"id": 6, "nombre": "Andrés Castaño", "ciudad": "Medellín"}, "libro": {"id": 4, "titulo": "Sharp Objects", "precio_gbp": 47.82, "valoracion": 4}},
  {"id_venta": 25, "fecha": "2026-08-31", "cantidad": 1, "cliente": {"id": 3, "nombre": "Luisa Fernanda Gómez", "ciudad": "Bogotá"}, "libro": {"id": 15, "titulo": "Rip it Up and Start Again", "precio_gbp": 35.02, "valoracion": 5}},
  {"id_venta": 26, "fecha": "2026-08-17", "cantidad": 1, "cliente": {"id": 5, "nombre": "Valentina Torres", "ciudad": "Barranquilla"}, "libro": {"id": 17, "titulo": "Olio", "precio_gbp": 23.88, "valoracion": 1}},
  {"id_venta": 27, "fecha": "2026-08-17", "cantidad": 3, "cliente": {"id": 2, "nombre": "Carlos Pérez", "ciudad": "Medellín"}, "libro": {"id": 10, "titulo": "The Black Maria", "precio_gbp": 52.15, "valoracion": 1}},
  {"id_venta": 28, "fecha": "2026-08-25", "cantidad": 1, "cliente": {"id": 4, "nombre": "Jorge Martínez", "ciudad": "Cali"}, "libro": {"id": 5, "titulo": "Sapiens: A Brief History of Humankind", "precio_gbp": 54.23, "valoracion": 5}},
  {"id_venta": 29, "fecha": "2026-08-30", "cantidad": 2, "cliente": {"id": 3, "nombre": "Luisa Fernanda Gómez", "ciudad": "Bogotá"}, "libro": {"id": 18, "titulo": "Mesaerion: The Best Science Fiction Stories 1800-1849", "precio_gbp": 37.59, "valoracion": 1}},
  {"id_venta": 30, "fecha": "2026-08-16", "cantidad": 1, "cliente": {"id": 1, "nombre": "Ana María Rojas", "ciudad": "Bogotá"}, "libro": {"id": 20, "titulo": "It's Only the Himalayas", "precio_gbp": 45.17, "valoracion": 2}},
  {"id_venta": 31, "fecha": "2026-08-29", "cantidad": 1, "cliente": {"id": 1, "nombre": "Ana María Rojas", "ciudad": "Bogotá"}, "libro": {"id": 4, "titulo": "Sharp Objects", "precio_gbp": 47.82, "valoracion": 4}},
  {"id_venta": 32, "fecha": "2026-08-08", "cantidad": 1, "cliente": {"id": 5, "nombre": "Valentina Torres", "ciudad": "Barranquilla"}, "libro": {"id": 8, "titulo": "The Coming Woman: A Novel Based on the Life of the Infamous Feminist, Victoria Woodhull", "precio_gbp": 17.93, "valoracion": 3}},
  {"id_venta": 33, "fecha": "2026-08-16", "cantidad": 3, "cliente": {"id": 2, "nombre": "Carlos Pérez", "ciudad": "Medellín"}, "libro": {"id": 3, "titulo": "Soumission", "precio_gbp": 50.1, "valoracion": 1}},
  {"id_venta": 34, "fecha": "2026-08-05", "cantidad": 1, "cliente": {"id": 2, "nombre": "Carlos Pérez", "ciudad": "Medellín"}, "libro": {"id": 18, "titulo": "Mesaerion: The Best Science Fiction Stories 1800-1849", "precio_gbp": 37.59, "valoracion": 1}},
  {"id_venta": 35, "fecha": "2026-08-09", "cantidad": 1, "cliente": {"id": 8, "nombre": "Santiago Ruiz", "ciudad": "Cali"}, "libro": {"id": 18, "titulo": "Mesaerion: The Best Science Fiction Stories 1800-1849", "precio_gbp": 37.59, "valoracion": 1}},
  {"id_venta": 36, "fecha": "2026-08-25", "cantidad": 2, "cliente": {"id": 7, "nombre": "Camila Herrera", "ciudad": "Cartagena"}, "libro": {"id": 7, "titulo": "The Dirty Little Secrets of Getting Your Dream Job", "precio_gbp": 33.34, "valoracion": 4}},
  {"id_venta": 37, "fecha": "2026-08-22", "cantidad": 2, "cliente": {"id": 4, "nombre": "Jorge Martínez", "ciudad": "Cali"}, "libro": {"id": 10, "titulo": "The Black Maria", "precio_gbp": 52.15, "valoracion": 1}},
  {"id_venta": 38, "fecha": "2026-08-15", "cantidad": 2, "cliente": {"id": 6, "nombre": "Andrés Castaño", "ciudad": "Medellín"}, "libro": {"id": 15, "titulo": "Rip it Up and Start Again", "precio_gbp": 35.02, "valoracion": 5}},
  {"id_venta": 39, "fecha": "2026-08-03", "cantidad": 1, "cliente": {"id": 2, "nombre": "Carlos Pérez", "ciudad": "Medellín"}, "libro": {"id": 8, "titulo": "The Coming Woman: A Novel Based on the Life of the Infamous Feminist, Victoria Woodhull", "precio_gbp": 17.93, "valoracion": 3}},
  {"id_venta": 40, "fecha": "2026-08-18", "cantidad": 2, "cliente": {"id": 6, "nombre": "Andrés Castaño", "ciudad": "Medellín"}, "libro": {"id": 1, "titulo": "A Light in the Attic", "precio_gbp": 51.77, "valoracion": 3}},
  {"id_venta": 41, "fecha": "2026-08-01", "cantidad": 1, "cliente": {"id": 4, "nombre": "Jorge Martínez", "ciudad": "Cali"}, "libro": {"id": 19, "titulo": "Libertarianism for Beginners", "precio_gbp": 51.33, "valoracion": 2}},
  {"id_venta": 42, "fecha": "2026-08-03", "cantidad": 1, "cliente": {"id": 2, "nombre": "Carlos Pérez", "ciudad": "Medellín"}, "libro": {"id": 2, "titulo": "Tipping the Velvet", "precio_gbp": 53.74, "valoracion": 1}},
  {"id_venta": 43, "fecha": "2026-08-17", "cantidad": 1, "cliente": {"id": 1, "nombre": "Ana María Rojas", "ciudad": "Bogotá"}, "libro": {"id": 11, "titulo": "Starving Hearts (Triangular Trade Trilogy, #1)", "precio_gbp": 13.99, "valoracion": 2}},
  {"id_venta": 44, "fecha": "2026-08-16", "cantidad": 3, "cliente": {"id": 4, "nombre": "Jorge Martínez", "ciudad": "Cali"}, "libro": {"id": 9, "titulo": "The Boys in the Boat", "precio_gbp": 22.6, "valoracion": 4}},
  {"id_venta": 45, "fecha": "2026-08-24", "cantidad": 1, "cliente": {"id": 4, "nombre": "Jorge Martínez", "ciudad": "Cali"}, "libro": {"id": 18, "titulo": "Mesaerion: The Best Science Fiction Stories 1800-1849", "precio_gbp": 37.59, "valoracion": 1}}
])

// N3. Contar documentos cargados (debe dar 45)
db.ventas.countDocuments()

// N4. Ver todos los documentos
db.ventas.find()

// N5. Filtro: ventas de clientes de Medellín (campo dentro de un documento embebido)
db.ventas.find({ "cliente.ciudad": "Medellín" })

// N6. Filtro con operador: ventas de 3 unidades o más, mostrando solo algunos campos
db.ventas.find({ cantidad: { $gte: 3 } }, { _id: 0, id_venta: 1, "libro.titulo": 1, cantidad: 1 })

// N7. Ordenar y limitar: las 3 ventas de libros más caros
db.ventas.find({}, { _id: 0, "libro.titulo": 1, "libro.precio_gbp": 1 }).sort({ "libro.precio_gbp": -1 }).limit(3)

// N8. Agregación (equivale a GROUP BY): libros vendidos por ciudad
db.ventas.aggregate([
  { $group: { _id: "$cliente.ciudad", libros_vendidos: { $sum: "$cantidad" } } },
  { $sort: { libros_vendidos: -1 } }
])

// N9. Agregación: los 3 libros más vendidos (mismo resultado que R1 en SQL)
db.ventas.aggregate([
  { $group: { _id: "$libro.titulo", unidades: { $sum: "$cantidad" } } },
  { $sort: { unidades: -1 } },
  { $limit: 3 }
])

// N10. Esquema flexible: insertar una venta con un campo nuevo que las demás no tienen
db.ventas.insertOne({ id_venta: 46, fecha: "2026-08-31", cantidad: 1,
  cliente: { id: 1, nombre: "Ana María Rojas", ciudad: "Bogotá" },
  libro: { id: 14, titulo: "Scott Pilgrim's Precious Little Life (Scott Pilgrim #1)", precio_gbp: 52.29, valoracion: 5 },
  canal: "WhatsApp" })

// N11. Consultar solo los documentos que tienen el campo nuevo
db.ventas.find({ canal: { $exists: true } })

// N12. Actualizar: corregir la cantidad de la venta 46
db.ventas.updateOne({ id_venta: 46 }, { $set: { cantidad: 2 } })

// N13. Eliminar la venta 46 y verificar que vuelven a ser 45
db.ventas.deleteOne({ id_venta: 46 })
db.ventas.countDocuments()
