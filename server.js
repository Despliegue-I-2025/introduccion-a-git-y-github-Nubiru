const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const ua = req.headers['user-agent'] || '';
  let message = 'Hello World!';

  // Detectamos que navegador visita nuestro servidor
  if (ua.includes('Chrome') && !ua.includes('Edge')) {
    message = 'Hola chromneano, bienvenido a nuestro servidor!';
  } else if (ua.includes('Firefox')) {
    message = 'Bienvenido a nuestro servidor usuario Zorro!';
  } else if (ua.includes('Safari') && !ua.includes('Chrome')) {
    message = 'Bienvenido navegador!';
  } else if (ua.includes('Edg')) {
    message = 'Hola Borde llgaste a nuestro servidor!';
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(message);
});

// Escucha abierta
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
