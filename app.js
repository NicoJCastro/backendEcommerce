// Importo Módulos

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Configuro el puerto
const PORT = 3020;

// Creo el servidor http
const server = http.createServer((req, res) => { //request y response
    const parsedUrl = url.parse(req.url, true); //analiza la URL y devuelve un objeto URL con cada parte de la dirección
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url); //determina la ruta de un archivo

    console.log('Requested URL:', parsedUrl.pathname);      
    
    
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



