const http = require('http');
const fs = require('fs');
const path = require('path');


const PORT = 3020;

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    const extname = path.extname(filePath); // Obtener la extensión del archivo para saber el tipo de contenido que se va a servir en la respuesta del servidor web 
    let contentType = 'text/html'; // Tipo de contenido por defecto

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
            contentType = 'text/html'; // Asegurar el tipo de contenido HTML
            break;
        default:
            contentType = 'text/plain';

    }

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



