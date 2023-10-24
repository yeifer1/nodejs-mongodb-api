const Movie = require("../models/peli"); // Asegúrate de ajustar la ruta según la ubicación de tu modelo de película
const express = require('express'); // Importa el módulo express
const router = express.Router();

// Ruta para crear una película
router.post('/movies', (req, res) => {
  const movie = new Movie(req.body); // Crear una instancia de Movie con los datos del cuerpo de la solicitud
  movie.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router; // Exporta el router
