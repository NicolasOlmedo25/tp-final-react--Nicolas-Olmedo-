# tp-final-react--Nicolas-Olmedo-

# 🌟 PokeDex LITE - El Listado de Pokémon de la Primera Generación

¡Bienvenido a la PokeDex LITE Una aplicación web construida con **React y Vite** que consume la PokeAPI para mostrar y explorar los 151 Pokémon originales.

Desarrollado por: Nicolas Olmedo
Curso: Desarrollo Web FrontEnd - UTN

## ✨ Características Principales

- **Diseño Temático:** Interfaz de usuario inspirada en la Pokédex clásica, con fondos personalizados y buena estetica.
- **Navegación Fluida:** Transición instantánea entre Listado y Detalle (gracias a React Router DOM).
- **Estilos Profesionales:** Implementación de componentes de React-Bootstrap para un diseño limpio y responsive.

## 🎯 Funcionalidades

| 📜 | **Listado Completo** | Muestra los 151 Pokémon de Kanto. |
| 🔍 | **Búsqueda en Tiempo Real** | Filtra los Pokémon por nombre de manera instantánea. |
| ℹ️ | **Página de Detalle** | Perfil completo para cada Pokémon (Altura, Peso, Habilidades). |

## 🛠️ Tecnologías Utilizadas

| **Vite** | Tooling de desarrollo rápido. |
| **React** | Biblioteca principal para construir la interfaz. |
| **React-Bootstrap** | Componentes de UI listos para usar y diseño responsive. |
| **React Router DOM** | Gestión de rutas y navegación entre páginas. |
| **PokeAPI** | Fuente de datos de Pokémon. |

## ⚙️ Instalación y Ejecución

Cloná el repositorio:

git clone https://github.com/NicolasOlmedo25/tp-final-react--Nicolas-Olmedo-

Accedé al directorio del proyecto:

Bash

cd tp-final-react-mi-pokedex

Instalá las dependencias:

Bash

npm install

Ejecutá la aplicación en modo desarrollo:

Bash

npm run dev

Abrí tu navegador en http://localhost:5173 (o el puerto que indique la consola).

📁 Estructura del proyecto
Tu estructura sigue la convención estándar de React:

src/
├── components/ # Componentes reutilizables (Header, Card)
├── pages/ # Vistas principales (HomePage, ListadoPage, DetallePage)
├── images/ # Recursos de diseño (fondos, etc.)
├── App.jsx # Componente raíz y configuración de rutas
├── main.jsx # Punto de entrada de la aplicación
└── style.css # Estilos globales y clases temáticas personalizadas

📡 API utilizada
Datos obtenidos de la PokeAPI.

Endpoint principal utilizado:

https://pokeapi.co/api/v2/pokemon
