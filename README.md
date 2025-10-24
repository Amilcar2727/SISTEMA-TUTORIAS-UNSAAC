Este proyecto tiene como objetivo desarrollar un sistema de autenticación y gestión de usuarios, que permita el inicio de sesión con control de acceso según el rol asignado.
Forma parte del desarrollo de la historia de usuario HU-GEN-01 – Inicio de sesión (Login).

Historia de usuario:
Como usuario del sistema quiero ingresar con mi usuario y contraseña para acceder solo a las funciones correspondientes a mi rol.

OBJETIVOS:
- Permitir el acceso al sistema mediante credenciales válidas.
- Implementar control de acceso diferenciado por roles.
- Establecer la base del sistema de autenticación para futuras funcionalidades.
- Gestionar los tres roles principales del sistema: Administrador, Tutor y Verificador.

ROLES DEL SISTEMA:
- Administrador: acceso total al sistema y gestión de usuarios.
- Tutor: acceso a funcionalidades de seguimiento académico.
- Verificador: revisión de información y validación de registros.

# UNSAAC Tutorías

Sistema de gestión de tutorías para la UNSAAC.

## 🧩 Estructura del proyecto
- **backend/** → API REST con Node.js + Express + PostgreSQL
- **frontend/** → Interfaz web con React + Vite
- **docker-compose.yml** → Orquestación con Docker

## 🚀 Cómo iniciar
1. Clonar el repositorio
2. Configurar variables `.env`
3. Iniciar backend:
   ```bash
   cd backend
   node src/app.js
4. Iniciar frontend:
   ```bash
   cd frontend
   npm run dev

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.