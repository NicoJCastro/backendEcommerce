const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');


const PORT = 3020;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    console.log('Requested URL:', parsedUrl.pathname);

      // Manejar la ruta /formulario
      if (parsedUrl.pathname === '/formulario') {
        filePath = path.join(__dirname, 'public', 'formulario.html');
    }

    // Manejar la ruta /procesar
    if (parsedUrl.pathname === '/procesar') {
        filePath = path.join(__dirname, 'public', 'registro.html');
        
        // Leer el contenido del archivo
        fs.readFile(filePath, 'utf8', (err, content) => {
            if (err) {
                console.error('Error al leer registro.html:', err);
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            } else {
                // Reemplazar los placeholders con los datos del formulario
                content = content.replace('<span id="nombre-confirmacion"></span>', `<span id="nombre-confirmacion">${parsedUrl.query.nombre || ''}</span>`);
                content = content.replace('<span id="email-confirmacion"></span>', `<span id="email-confirmacion">${parsedUrl.query.email || ''}</span>`);
                content = content.replace('<span id="mensaje-confirmacion"></span>', `<span id="mensaje-confirmacion">${parsedUrl.query.mensaje || ''}</span>`);

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
        return;
    }

    const extname = path.extname(filePath); 
    let contentType = 'text/html'; 

    switch (extname) {

        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.html':
            contentType = 'text/html'; 
            break;
        default:
            contentType = 'text/plain';

    }

    console.log('Trying to read file:', filePath);

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('404 - Not Found');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



