<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<div align="center">
  
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

</div>

<!-- PROJECT LOGO -->
<div align="center">
  <h1>🚀 TypeScript React JSONPlaceholder</h1>
  <p>
    Un proyecto práctico completo que demuestra las mejores prácticas de TypeScript con React
    <br />
    Parte de la serie educativa de TypeScript en LinkedIn
  </p>
</div>

<div align="center">
	
[![Demo][demo-shield]][demo-url]

</div>

## 📋 Sobre el Proyecto

Este proyecto es un ejemplo práctico y educativo que forma parte de mi serie de TypeScript en LinkedIn. Demuestra cómo construir una aplicación React moderna utilizando TypeScript, implementando patrones de diseño sólidos y mejores prácticas de desarrollo.

### ✨ Características Principales

- 🔷 **TypeScript** - Tipado estático para mayor seguridad y mantenibilidad
- ⚛️ **React 18** - Últimas características con Hooks y componentes funcionales
- 🏗️ **Arquitectura limpia** - Separación clara de responsabilidades
- 🎨 **UI Responsiva** - Diseño adaptable a diferentes dispositivos
- 🔄 **Custom Hooks** - Lógica reutilizable y separación de concerns
- 📡 **API Integration** - Consumo de APIs RESTful con JSONPlaceholder
- 🧪 **Desarrollo moderno** - HMR, ESLint, y herramientas de desarrollo

## 🛠️ Construido Con

<div align="center">

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)

</div>

## 🔧 Instalación

Asegúrate de tener instalado Node.js (versión 18 o superior) y pnpm.

1. **Clona el repositorio**
```bash
git clone https://github.com/egdev6/ts-react-jsonplaceholder.git
cd ts-react-jsonplaceholder
```

2. **Instala las dependencias**
```bash
pnpm install
```

3. **Inicia el servidor de desarrollo**
```bash
pnpm dev
```

4. **Abre tu navegador**
```
http://localhost:5173
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── UserCard.tsx    # Tarjeta de usuario
│   └── UserForm.tsx    # Formulario de usuario
├── hooks/              # Custom hooks
│   └── useUsers.ts     # Hook para gestión de usuarios
├── pages/              # Páginas de la aplicación
│   └── UsersPage.tsx   # Página principal de usuarios
├── services/           # Servicios de API
│   └── userService.ts  # Servicio para usuarios
└── styles/             # Estilos globales
    └── index.css
```

## 🎯 Funcionalidades

- ✅ **Listado de usuarios** - Visualización de usuarios desde JSONPlaceholder API
- ✅ **Crear usuario** - Formulario para agregar nuevos usuarios
- ✅ **Validación** - Validación de formularios con TypeScript
- ✅ **Estado global** - Gestión de estado con custom hooks
- ✅ **Responsive design** - Adaptable a diferentes pantallas
- ✅ **Error handling** - Manejo robusto de errores

## 📚 Conceptos de TypeScript Demostrados

Este proyecto pone en práctica conceptos clave de TypeScript:

- **Interfaces y Types** - Definición de contratos de datos
- **Generic Types** - Tipos genéricos para reutilización
- **Union Types** - Tipos de unión para flexibilidad
- **Type Guards** - Validación de tipos en runtime
- **Utility Types** - Pick, Omit, Partial, etc.
- **Module Declaration** - Tipado de librerías externas

## 🔧 Configuración Avanzada

### ESLint con TypeScript

Para proyectos de producción, puedes habilitar reglas más estrictas:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

### Plugins Adicionales

Instala plugins adicionales para React:

```bash
pnpm add -D eslint-plugin-react-x eslint-plugin-react-dom
```

## 🤝 Proyecto Educativo y Colaborativo

Este repositorio tiene **propósitos educativos** y está completamente abierto a **colaboración**. Si estás interesado en contribuir al desarrollo, diseño, o simplemente quieres aprender cómo construir aplicaciones React con TypeScript:

📩 **No dudes en contactarme** o abrir un issue. ¡Eres más que bienvenido a unirte!

## 🎓 Serie de TypeScript en LinkedIn

Este proyecto forma parte de mi serie educativa sobre TypeScript en LinkedIn, donde exploro:

- Fundamentos de TypeScript
- Patrones de diseño con tipos
- Integración con React
- Best practices y herramientas
- Casos de uso reales

🔗 [Sígueme en LinkedIn para más contenido](https://www.linkedin.com/in/egdev/)

## 📫 Contacto

<div align="center">

[![image](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/egdev/)
[![image](https://img.shields.io/badge/Instagram-purple?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/egdev6/)
![image](https://img.shields.io/badge/Egdev5285-8C9EFF?style=for-the-badge&logo=discord&logoColor=white)
[![image](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:egdev6@gmail.com)

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[stars-shield]: https://img.shields.io/github/stars/egdev6/ts-react-jsonplaceholder.svg?style=for-the-badge
[stars-url]: https://github.com/egdev6/ts-react-jsonplaceholder/stargazers
[issues-shield]: https://img.shields.io/github/issues/egdev6/ts-react-jsonplaceholder.svg?style=for-the-badge
[issues-url]: https://github.com/egdev6/ts-react-jsonplaceholder/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/egdev/
[demo-url]: #
[demo-shield]: https://img.shields.io/badge/-Demo-black.svg?style=for-the-badge&colorB=555
