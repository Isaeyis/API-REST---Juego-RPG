const express = require('express');
const app = express();

app.use(express.json());

// "Base de datos" en memoria
let personajes = [];
let idActual = 1;

// CREAR personaje (POST)
app.post('/personajes', (req, res) => {
  const nuevo = {
    id: idActual++,
    ...req.body
  };

  personajes.push(nuevo);
  res.send(nuevo);
});

// LISTAR personajes (GET)
app.get('/personajes', (req, res) => {
  res.send(personajes);
});

// BUSCAR personaje por ID (GET)
app.get('/personajes/:id', (req, res) => {
  const personaje = personajes.find(p => p.id == req.params.id);

  if (!personaje) {
    return res.send("Personaje no encontrado");
  }

  res.send(personaje);
});

// ACTUALIZAR personaje (PUT)
app.put('/personajes/:id', (req, res) => {
  const index = personajes.findIndex(p => p.id == req.params.id);

  if (index === -1) {
    return res.send("Personaje no encontrado");
  }

  personajes[index] = {
    id: parseInt(req.params.id),
    ...req.body
  };

  res.send(personajes[index]);
});

// ELIMINAR personaje (DELETE)
app.delete('/personajes/:id', (req, res) => {
  const existe = personajes.some(p => p.id == req.params.id);

  if (!existe) {
    return res.send("Personaje no encontrado");
  }

  personajes = personajes.filter(p => p.id != req.params.id);

  res.send("Personaje eliminado");
});

// BATALLA (POST)
app.post('/batalla', (req, res) => {
  const { id1, id2 } = req.body;

  const p1 = personajes.find(p => p.id == id1);
  const p2 = personajes.find(p => p.id == id2);

  if (!p1 || !p2) {
    return res.send("Uno o ambos personajes no existen");
  }

  const puntos1 = p1.fuerza + p1.agilidad + p1.magia + p1.conocimiento;
  const puntos2 = p2.fuerza + p2.agilidad + p2.magia + p2.conocimiento;

  let ganador;
  if (puntos1 > puntos2) {
    ganador = p1.nombre;
  } else if (puntos2 > puntos1) {
    ganador = p2.nombre;
  } else {
    ganador = "Empate";
  }

  res.send({
    personaje1: p1.nombre,
    personaje2: p2.nombre,
    puntos1,
    puntos2,
    ganador,
    resumen: `${p1.nombre} peleó contra ${p2.nombre}`
  });
});

// INICIAR SERVIDOR
app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});