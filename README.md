🎨 PALETA DE COLORES – BACKEND (Node.js + Express + MongoDB)

API REST creada en Node + Express + MongoDB Atlas, utilizada por el frontend del proyecto Paleta de Colores.
Permite crear, listar, editar y eliminar colores desde una base de datos remota.

Deploy con Vercel, compatible con el flujo del frontend.

🌐 DEMO ONLINE (API)

📌 Endpoint base:
👉 https://paleta-colores-backend-sigma.vercel.app/

📌 Rutas principales:
👉 https://paleta-colores-backend-sigma.vercel.app/api/colores

🚀 FUNCIONALIDADES

✔ Crear colores (HEX, RGB o nombre)
✔ Listar todos los colores almacenados
✔ Obtener un color por ID
✔ Editar nombre o valor (PUT)
✔ Eliminar color por ID
✔ Validación de formatos:

HEX → #AABBCC

RGB → rgb(120, 200, 255)
✔ Middleware CORS
✔ Logs con Morgan
✔ Conexión estable a MongoDB Atlas con Mongoose

🛠 TECNOLOGÍAS USADAS

Node.js

Express.js

Mongoose (MongoDB)

CORS

Morgan

Vercel (deploy)

📁 ESTRUCTURA DEL PROYECTO
src/
 ├── controllers/
 │    └── colors.controllers.js
 ├── models/
 │    └── color.js
 ├── routes/
 │    ├── colors.routes.js
 │    └── index.routes.js
 ├── server/
 │    └── config.js
 ├── dbconfig.js
index.js
vercel.json

🔌 ENDPOINTS
📍 GET /api/colores

Obtiene todos los colores.

📍 POST /api/colores

Crea un nuevo color.
Body JSON:

{
  "nombre": "rojo",
  "valor": "#FF0000"
}

📍 GET /api/colores/:id

Obtiene un color específico.

📍 PUT /api/colores/:id

Edita nombre o valor.
Body JSON:

{
  "nombre": "verde lima",
  "valor": "#32CD32"
}

📍 DELETE /api/colores/:id

Elimina un color por ID.

🧠 VALIDACIONES DEL MODELO

Archivo: src/models/color.js

nombre:

obligatorio

único

lowercase

trim

valor:

obligatorio

formato HEX válido

o formato RGB válido

validación con Regex

🔧 CONFIGURACIÓN DE VARIABLES DE ENTORNO (VERCEL)

Debés crear estas variables en Project → Settings → Environment Variables:

KEY	VALUE
MONGODB	mongodb+srv://…
PORT	3000

(PORT no se usa en Vercel, pero mantiene compatibilidad con local.)

📦 INSTALACIÓN LOCAL

1️⃣ Clonar el repositorio

git clone https://github.com/tu-repo/backend.git


2️⃣ Instalar dependencias

npm install


3️⃣ Crear un archivo .env con:

MONGODB=tu_cadena
PORT=3000


4️⃣ Ejecutar

npm run dev


Backend en:
👉 http://localhost:3001/

🚀 DEPLOY EN VERCEL

Este backend funciona con Express tradicional gracias al archivo:

vercel.json
{
    "builds":[{
        "src":"./index.js",
        "use":"@vercel/node"
    }],
    "routes":[{
        "src":"/(.*)",
        "dest":"/"
    }]
}


Esto permite:

usar app.listen() sin convertirlo a serverless

mantener tu estructura de clases

deploy estable como en tu proyecto "Lista de Tareas"

💻 REPOS REALES

📌 Frontend (Netlify)
👉 https://jade-horse-e618c9.netlify.app/

📌 Backend (Vercel)
👉 https://paleta-colores-backend-sigma.vercel.app/

👨‍💻 AUTOR

Seba Flomenbaum
Estudiante de Ciberseguridad & Full-Stack Developer
GitHub: https://github.com/duncann555