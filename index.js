const express = require('express');
const app = express();
// Configurar middleware para servir archivos estáticos desde la carpeta 'static'
    app.use(express.static(__dirname + '/static'));
      app.get('/', (req, res) => {
    console.log('Requerimiento a la ruta /');
  res.send('Página de inicio');
});

app.get('/contacto', (req, res) => {
    console.log('Requerimiento a la ruta /contacto');
  res.send('Página de contacto');
});

app.get('/about', (req, res) => {
    console.log('Requerimiento a la ruta /about');
  res.send('Página acerca de nosotros');
});

// Manejar rutas no consideradas (404)
app.use((req, res) => {
    console.log(`Requerimiento a la ruta no considerada: ${req.originalUrl}`);
  res.status(404).sendFile(__dirname + '/static/404.html');
});

// Manejar errores internos del servidor (500)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
