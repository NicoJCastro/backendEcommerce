### BackendEcommerce
Este proyecto es un ejemplo básico de backend para un sitio de ecommerce. Incluye varias páginas HTML y un servidor básico en Node.js para servir el contenido. El proyecto está orientado a aprender los conceptos básicos de desarrollo web, incluyendo HTML, CSS, JavaScript y la configuración de un servidor HTTP en Node.js.

## Estructura del Proyecto

BackendEcommerce/
├── public/
│   ├── images/               # Imágenes usadas en el sitio web
│   ├── scripts/              # Contiene el archivo script.js para la validación de formularios
│   ├── styles/               # Contiene los archivos CSS para los estilos del sitio
│   ├── catalogo.html         # Página de catálogo de productos
│   ├── formulario.html       # Formulario de contacto
│   ├── index.html            # Página de inicio
│   ├── nosotros.html         # Página "Nosotros" (información sobre el sitio)
│   ├── producto1.html        # Página de detalle del Producto 1
│   ├── producto2.html        # Página de detalle del Producto 2
│   ├── producto3.html        # Página de detalle del Producto 3
│   ├── producto4.html        # Página de detalle del Producto 4
│   └── registro.html         # Página de confirmación de registro
├── app.js                    # Código del servidor HTTP en Node.js
├── package.json              # Configuración del proyecto y dependencias de Node.js
└── README.md                 # Documentación del proyecto

## Funcionalidades

### 1. Servidor HTTP Básico (`app.js`)

El archivo [`app.js`](app.js) configura un servidor HTTP usando el módulo `http` de Node.js. Este servidor:

- Escucha las solicitudes en el puerto 3020.
- Sirve archivos estáticos (HTML, CSS, imágenes y JavaScript) desde la carpeta `public`.
- Redirige la solicitud `/procesar` a la página [`registro.html`](public/registro.html) para simular la confirmación de envío de un formulario.
- Gestiona el tipo de contenido para cada tipo de archivo, permitiendo que el navegador los interprete correctamente.

### 2. Validaciones de Formularios (`validar.js`)

El archivo [`validar.js`](public/scripts/validar.js) contiene validaciones para el formulario de contacto:

- Verifica que el nombre tenga al menos 3 caracteres.
- Valida el formato del correo electrónico usando una expresión regular.
- Confirma que el teléfono contenga solo números y esté entre 7 y 15 dígitos.
- Asegura que el mensaje tenga al menos 10 caracteres.
- Después de enviar correctamente, muestra una página de confirmación con los datos ingresados.

### 3. Estilos (`main.css` y `normalize.css`)

- [`main.css`](public/styles/main.css): Define los estilos personalizados del sitio, incluyendo el diseño de las páginas, el formato de los formularios, y la apariencia general del sitio.
- [`normalize.css`](public/styles/normalize.css): Se utiliza para normalizar los estilos predeterminados de los navegadores, asegurando consistencia en la apariencia del sitio en distintos navegadores.

## Cómo Ejecutar el Proyecto

1. Clona el repositorio:
    ```sh
    git clone https://github.com/NicoJCastro/backendEcommerce.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd backendEcommerce
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```
4. Inicia el servidor:
    ```sh
    npm run build
    ```
5. Abre tu navegador y visita `http://localhost:3020`.

## Autor

- **Nicolas Castro** - [GitHub](https://github.com/NicoJCastro)

## Licencia

Este proyecto está licenciado bajo la Licencia ISC. Consulta el archivo [`LICENSE`](LICENSE) para más detalles.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cualquier cambio importante antes de enviar un pull request.

## Reporte de Errores

Para reportar errores, por favor abre un issue en [GitHub Issues](https://github.com/NicoJCastro/backendEcommerce/issues).

## Página de Inicio

Para más información, visita la [página de inicio del proyecto](https://github.com/NicoJCastro/backendEcommerce#readme).