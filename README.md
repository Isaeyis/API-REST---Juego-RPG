# API-REST---Juego-RPG
uso, ejemplos
Cada personaje tiene los siguientes campos:
nombre
colorPiel
raza
fuerza
agilidad
magia
conocimiento
Ejemplo:

{
  "nombre": "Pink Queen",
  "colorPiel": "claro",
  "raza": "humana",
  "fuerza": 10,
  "agilidad": 8,
  "magia": 9,
  "conocimiento": 7
}

Endpoints
1. Crear personaje
Método: POST
 URL: http://localhost:3000/personajes
Body (JSON):

{
  "nombre": "Pink Queen",
  "colorPiel": "claro",
  "raza": "humana",
  "fuerza": 10,
  "agilidad": 8,
  "magia": 9,
  "conocimiento": 7
}

Este endpoint permite crear un nuevo personaje y guardarlo en el sistema.
2. Listar personajes
Método: GET
 URL: http://localhost:3000/personajes
Este endpoint devuelve todos los personajes creados.
3. Consultar personaje por ID
Método: GET
 URL: http://localhost:3000/personajes/1
Se debe cambiar el número por el ID del personaje. Permite ver la información de un personaje específico.
4. Actualizar personaje
Método: PUT
 URL: http://localhost:3000/personajes/1
Body (JSON):

{
  "nombre": "Pink Queen PRO",
  "colorPiel": "claro",
  "raza": "humana",
  "fuerza": 10,
  "agilidad": 9,
  "magia": 10,
  "conocimiento": 8
}

Permite modificar los datos de un personaje existente.
5. Eliminar personaje
Método: DELETE
 URL: http://localhost:3000/personajes/1
Permite eliminar un personaje del sistema.
6. Simular batalla
Método: POST
 URL: http://localhost:3000/batalla
Body (JSON):

{
  "id1": 1,
  "id2": 2
}

Este endpoint recibe dos IDs de personajes y simula una batalla entre ellos.
El resultado se calcula sumando las estadísticas de cada personaje (fuerza, agilidad, magia y conocimiento). El personaje con mayor puntaje gana.
