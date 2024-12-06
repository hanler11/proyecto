const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

console.log('Iniciando el servidor...'); // Verificar si el servidor inicia

app.use(express.static('frontend'));

app.get('/api', (req, res) => {
  res.json({ message: 'Hola desde el backend!' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
