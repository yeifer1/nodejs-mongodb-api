const mongoose = require('mongoose');
const express = require('express');
require("dotenv").config();
const movieRoutes = require("./routes/peliculas");

const app = express();
const port = process.env.PORT || 9000;

// Middleware
app.use(express.json());
app.use('/api', movieRoutes);

// Rutas
app.get('/', (req, res) => {
  res.send("Welcome to my API");
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Compass"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log('Server listening on port', port));
