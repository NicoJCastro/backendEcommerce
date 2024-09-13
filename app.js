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



