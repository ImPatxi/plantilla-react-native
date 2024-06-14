# Plantilla App

Este documento proporciona una descripción general de la estructura de carpetas y archivos del proyecto Plantilla, diseñado con React Native. Este README tiene como objetivo facilitar a los desarrolladores la comprensión y el manejo de la estructura del proyecto para el desarrollo y mantenimiento efectivos de la aplicación.

## Estructura del Proyecto

A continuación se detalla la organización del directorio del proyecto:

plantilla/
│
├── src/                           # Código fuente de la aplicación
│   ├── components/                # Componentes reutilizables en varias vistas
│   │   └── .gitkeep               # Mantiene la carpeta en el repositorio aunque esté vacía
│   ├── navigation/                # Configuración de la navegación para la app
│   │   └── .gitkeep               # Mantiene la carpeta en el repositorio aunque esté vacía
│   ├── views/                     # Contiene todas las vistas específicas del proyecto
│   │   ├── Auth/                  # Pantallas de autenticación
│   │   │   ├── Login.js           # Pantalla de login
│   │   │   ├── Register.js        # Pantalla de registro
│   │   │   └── ForgotPassword.js  # Pantalla para recuperar contraseña
│   │   ├── App/                   # Pantallas principales de la app
│   │   │   ├── Home.js            # Pantalla principal
│   │   │   ├── SOS.js             # Pantalla de emergencia SOS
│   │   │   ├── Cameras.js         # Pantalla de cámaras de seguridad
│   │   │   └── Locks.js           # Pantalla de control de cerraduras
│   │   └── Drawer/                # Vistas accesibles desde el menú lateral (drawer)
│   │       ├── Profile.js         # Pantalla de perfil de usuario
│   │       ├── SharedUsers.js     # Pantalla para usuarios compartidos
│   │       ├── VirtualKeyboards.js# Pantalla de teclados virtuales
│   │       ├── Events.js          # Pantalla de eventos
│   │       ├── Help.js            # Pantalla de ayuda
│   │       └── Logout.js          # Función para cerrar sesión
│   ├── utils/                     # Herramientas y utilidades generales
│   │   └── .gitkeep               # Mantiene la carpeta en el repositorio aunque esté vacía
│   ├── resources/                 # Recursos estáticos como imágenes y fuentes
│   │   └── .gitkeep               # Mantiene la carpeta en el repositorio aunque esté vacía
│   ├── store/                     # Gestión de estado Redux (si se utiliza)
│   │   ├── reducers/              # Reducers de Redux
│   │   │   └── index.js           # Combinador de todos los reducers
│   │   ├── actions/               # Acciones de Redux
│   │   │   └── index.js           # Exportación de todas las acciones
│   ├── constants/                 # Constantes usadas en la app
│   │   ├── Colors.js              # Definiciones de colores
│   │   └── Strings.js             # Cadenas de texto centralizadas
│
├── android/                       # Código específico de Android
├── ios/                           # Código específico de iOS
├── node_modules/                  # Módulos de Node.js
├── index.js                       # Punto de entrada de la aplicación
└── App.js                         # Componente raíz de la aplicación
