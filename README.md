# E-Shop API con Express, Prisma y Angular

Este repositorio contiene dos proyectos:

- **Backend**: API desarrollada con Express, Prisma y SQLite en TypeScript.
- **Frontend**: Aplicación Angular para la interfaz de usuario.

## Descripción

Descripción detallada del proyecto, sus funcionalidades y el propósito que cumple. Explica por qué es útil y qué problemas resuelve.

## Requisitos Previos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/)
- [Angular CLI](https://angular.io/cli) (para el proyecto Frontend)

## Instrucciones de Instalación

### 1. Instalar las dependencias en ambos proyectos

#### Proyecto Backend

1. **Instalar dependencias**  
   Navega al directorio del proyecto Backend y ejecuta:
   ```bash
   npm install

2.  **Crea el archivo `.env`:**
    Copia el siguiente contenido y guárdalo en un archivo llamado `.env` en la raíz del proyecto backend:
    ```
    DATABASE_URL="file:./dev.db"
    PORT=3000
    ```
3.  **Crea la base de datos y los datos de prueba:**
    ```bash
    npm run prisma:migrate
    npm run prisma:seed
    ```
4.  **Inicia el servidor:**
    ```bash
    npm run dev
    ```

### Frontend

1.  **Instala las dependencias:**
    ```bash
    npm install
    ```
2.  **Inicia la aplicación:**
    ```bash
    ng serve
    ```

## Uso

Explica cómo utilizar la aplicación, incluyendo ejemplos de comandos o interacciones si es necesario.

## Tecnologías

### Frontend

-   **Angular:** Versión 19.1.0
-   **NgRx Signals:** Versión 19.0.1
-   **Tailwind CSS:** Versión 4.0.5
-   **Ngx-toastr:** Versión 18.0.0
-   Otras dependencias:  (Incluir las dependencias principales como `@angular/common`, `@angular/core`, `@angular/router`, etc.)

### Backend

-   **Node.js:** (Versión implícita por `ts-node-dev`)
-   **Express:** Versión 4.18.2
-   **Prisma:** Versión 4.8.0
-   **SQLite:** (Base de datos utilizada)
-   **TypeScript:** Versión 4.9.4
-   Otras dependencias: (Incluir las dependencias principales como `cors`, `dotenv`, etc.)


## Contacto

Jhair Hernan Infanzon Quispe
Desarrollador web con experiencia en Angular y Node.js.
Interesado en el desarrollo de aplicaciones web escalables y soluciones de comercio electrónico.
Abierto a nuevas oportunidades.

*   Correo electrónico: jinfanzonquispe30@gmail.com
*   Portfolio: [https://portafolio-jhair-infanzon.vercel.app/](https://portafolio-jhair-infanzon.vercel.app/)
*   LinkedIn: [https://www.linkedin.com/in/jhair-infanz%C3%B3n-quispe/](https://www.linkedin.com/in/jhair-infanz%C3%B3n-quispe/)
*   Teléfono: 922692354
*   GitHub: [https://github.com/xxxJhairxxx]

---