Punto de Venta - Backend

Proyecto personal de punto de venta web desarrollado desde cero utilizando Node.js y Express. Este backend gestiona productos, clientes, usuarios y próximamente ventas, con una arquitectura modular y escalable.

🚀 Tecnologías Utilizadas

Node.js

Express.js

Zod (para validación de datos)

ES Modules

MongoDB (planificado)

📁 Estructura del Proyecto

├── controllers
├── routes
├── models
├── middlewares
├── schemas
├── utils
├── fakeData
├── modelsSimulados
├── server.js
├── package.json
└── .gitignore

📦 Instalación

Clona el repositorio:

git clone https://github.com/Gilbertog12/punto-de-venta.git

Navega al directorio del proyecto:

cd punto-de-venta

Instala las dependencias:

npm install

Inicia el servidor:

npm run dev

📌 Endpoints Principales (por ahora)

GET /productos - Lista todos los productos.

POST /productos - Crea un nuevo producto (con validación mediante Zod).

GET /productos/:id - Obtiene un producto por ID.

PUT /productos/:id - Actualiza un producto existente.

DELETE /productos/:id - Elimina un producto.

Más entidades como clientes, usuarios y ventas están en desarrollo y disponibles en rutas simuladas.

🛠️ Próximas Funcionalidades

Integración con MongoDB (actualmente se usan modelos simulados).

Gestión real de usuarios con roles.

Autenticación con JWT.

Manejo de ventas y reportes.

Documentación Swagger.

Frontend con Angular.

🔍 Tareas Sugeridas en Desarrollo



📄 Licencia

Este proyecto está bajo la Licencia MIT.

👤 Autor

Gilberto Antonio Galindo García

GitHub: Gilbertog12

LinkedIn: Perfil Profesional

¡Gracias por revisar el proyecto! Las sugerencias y colaboraciones son bienvenidas. 🙌
