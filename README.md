# Rate Limiting API - Bob's Corn 🌽

Bienvenido al proyecto **Rate Limiting API** diseñado para simular un sistema que limita la cantidad de compras de maíz a una por minuto por cliente. Este proyecto incluye un backend en **Node.js** con **PostgreSQL** y un frontend desarrollado en **React** utilizando **Vite**.

---

## 📖 Tabla de Contenidos
- [Descripción](#descripción)
- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Pruebas](#pruebas)
- [Autores](#autores)

---

## Descripción
Este proyecto consta de un sistema de **Rate Limiting** que permite a los usuarios realizar compras con un límite de una transacción por minuto. El sistema utiliza una base de datos **PostgreSQL** para registrar las transacciones y un middleware para aplicar la lógica de limitación.

---

## ✨ Características
- Middleware personalizado para limitar compras.
- Base de datos relacional con **PostgreSQL**.
- Frontend moderno utilizando **React** y **Vite**.
- Sistema de pruebas automatizado con **Jest** y **Supertest**.

---

## 🛠️ Requisitos
Antes de comenzar, asegúrate de tener instalado lo siguiente:
- **Node.js** (v16 o superior)
- **npm** (v8 o superior)
- **PostgreSQL**
- **Docker** (opcional, para contenedores)

---

## 🚀 Instalación

### Backend
1. Clona este repositorio (no disponible en este momento):
   ```bash
   git clone https://github.com/no_disponible/RateLimiting.git
   cd RateLimiting/backend
   ```
2. Instala dependencias:
  ```npm install```  
3. Configura las variables de entorno en un archivo ```.env```:
```
POSTGRES_USER=<usuario/>
POSTGRES_PASSWORD=<contraseña/>
POSTGRES_DB=postgres
POSTGRES_HOST=localhost
POSTGRES_PORT=5433
PORT=3001
```  
4. Crea la tabla en PostgreSQL:
```
CREATE TABLE purchase_logs (
  id SERIAL PRIMARY KEY,
  client_ip TEXT NOT NULL,
  purchase_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```  
5. Inicia el servidor: ```node server.js```  

### Frontend  
1. Navega a la carpeta ```frontend```: ```cd ../frontend/```  
2. Instala las dependencias: ```npm install```
3. Inicia el servidor de desarrollo: ```npm run dev```

---

## 🧪 Pruebas

- Ejecuta pruebas automatizadas para el backend:  
```
cd backend
npm test
```

---

## Uso
1. Abre el frontend en tu navegador en ```http://localhost:5173```.
2. Haz clic en el botón "Buy Corn" para realizar una compra.
3. Observa los mensajes que indican si la compra fue exitosa o bloqueada por el sistema de limitación.

---

## 😄 Autor  
- Jairo Leonardo Olivera Sawka.
- Por pedido de: Base Labs (Emi Hernandez)

---

# Rate Limiting API - Bob's Corn 🌽
Welcome to the **Rate Limiting API** project, designed to simulate a system that limits corn purchases to one per minute per client. This project includes a **Node.js** backend with **PostgreSQL** and a frontend developed in **React** using **Vite**.  

---

## 📖 Table of Contents
- [Description](#description)
- [Features](#features)
- [Requirements](#requirements)
- [Instalation](#instalation)
- [Usage](#usage)
- [Tests](#tests)
- [Author](#author)

---

### Description  
This project implements a **Rate Limiting** system allowing users to make purchases limited to one transaction per minute. The system uses a **PostgreSQL** database to log transactions and a middleware to apply the rate-limiting logic.

---

## ✨ Features  
- Custom middleware for rate limiting.
- Relational database with PostgreSQL.
- Modern frontend using React and Vite.
- Automated testing with Jest and Supertest.

---

## 🛠️ Requirements
Before starting, make sure you have the following installed:  

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **PostgreSQL***
- **Docker** (optional, for containers)

---

## 🚀 Installation  
### Backend
1. Clone this repository (not available at the moment):  
```
git clone https://github.com/not_available/RateLimiting.git
cd RateLimiting/backend
```  
2. Install dependencies: ```npm install```  
3. Set up the environment variables in a ```.env``` file:
```
POSTGRES_USER=<user/>
POSTGRES_PASSWORD=<password/>
POSTGRES_DB=postgres
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
PORT=3001
```  
4. Create the table in PostgreSQL:  
```
CREATE TABLE purchase_logs (
  id SERIAL PRIMARY KEY,
  client_ip TEXT NOT NULL,
  purchase_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```  
5. Start the server: ```node server.js```  

### Frontend
1. Navigate to the ```frontend``` folder: ```cd ../frontend```  
2. Install dependencies: ```npm install```  
3. Start development server: ```npm run dev```

---

## 🧪 Tests  
- Run automated backend tests:  
```
cd backend
npm test
```

---

## Usage  
- Open the frontend in your browser at ```http://localhost:5173```.
- Click on the "Buy Corn" button to make a purchase.
- Observe the messages indicating whether the purchase was successful or blocked by the rate-limiting system.

---

## 😄 Author  
- Jairo Leonardo Olivera Sawka.
- At the request of: Base Labs (Emi Hernandez)
