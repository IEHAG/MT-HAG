# Media Técnica - I.E. Héctor Abad Gómez

Sistema web para la gestión de la Media Técnica de la Institución Educativa Héctor Abad Gómez, incluyendo un panel de administración completo.

## 🚀 Características

- **Sitio Web Principal**: Página web completa con navegación a todas las secciones
- **Panel de Administración**: Dashboard completo para gestión de contenido
- **Sistema de Autenticación**: Login seguro para administradores
- **Gestión de Estudiantes**: CRUD completo para estudiantes
- **Gestión de Contenido**: Administración de materiales, horarios y páginas
- **Diseño Responsivo**: Compatible con dispositivos móviles y desktop

## 📁 Estructura del Proyecto

```
MT-HAG/
├── admin/                    # Panel de administración
│   ├── login.html           # Página de inicio de sesión
│   └── dashboard.html       # Dashboard principal
├── assets/                  # Recursos multimedia
│   ├── images/             # Imágenes (logos, fotos de estudiantes)
│   ├── videos/             # Videos del proyecto
│   └── documents/          # Documentos y archivos
├── src/                     # Código fuente organizado en módulos
│   ├── js/
│   │   ├── admin/
│   │   │   ├── auth.js          # Autenticación (cred.s desde .env)
│   │   │   ├── dashboard.js     # Orquestador del Dashboard
│   │   │   ├── login.js         # Entry point login
│   │   │   └── modules/
│   │   │       ├── students.js  # CRUD estudiantes
│   │   │       ├── materials.js # CRUD materiales
│   │   │       ├── schedules.js # CRUD horarios
│   │   │       ├── menu.js      # CRUD menú principal
│   │   │       └── settings.js  # Configuración
│   │   ├── utils/
│   │   │   ├── toast.js         # Sistema de notificaciones
│   │   │   ├── storage.js       # localStorage wrapper
│   │   │   └── dom.js           # Helpers DOM
│   │   ├── main.js              # Home (modal, submenu)
│   │   ├── chatbot.js           # Chatbot con OpenAI
│   │   └── site-menu.js         # Menú dinámico desde admin
│   └── css/
│       ├── malla.css            # CSS unificado de mallas
│       └── ...                  # (los demás CSS se mantienen en css/)
├── css/                    # Hojas de estilo (legacy)
│   ├── style.css          # Estilos principales
│   ├── admin.css          # Estilos del panel de administración
│   ├── chatbot.css        # Estilos del chatbot
│   └── ...                # Otros archivos CSS
├── js/                     # Scripts (legacy, para páginas no migradas)
├── pages/                  # Páginas del sitio web
│   ├── programacion.html  # Página de programación
│   ├── preprensa.html     # Página de preprensa
│   ├── material.html      # Página de materiales
│   └── ...                # Otras páginas
├── public/                 # Archivos públicos estáticos
├── libs/                   # Librerías externas
├── index.html             # Página principal
├── vite.config.js         # Configuración de Vite
└── .env.example           # Variables de entorno (template)
```

## 🔐 Acceso al Panel de Administración

### Credenciales:
Las credenciales se configuran vía variables de entorno en el archivo `.env`:
```env
VITE_ADMIN_USER=adminhag@gmail.com
VITE_ADMIN_PASS=CAÑOLA2027*
```

### Acceso:
1. Visita la página principal
2. Haz clic en el botón de configuración (⚙️) en la esquina superior derecha
3. Ingresa las credenciales configuradas en `.env`
4. Accede al dashboard completo

## 🛠️ Funcionalidades del Panel de Administración

### Dashboard Principal
- Estadísticas generales del sistema
- Actividad reciente
- Acciones rápidas
- Notificaciones

### Gestión de Estudiantes
- Agregar nuevos estudiantes
- Editar información existente
- Eliminar estudiantes
- Visualización en tarjetas

### Gestión de Contenido
- Administrar páginas del sitio
- Gestionar materiales educativos
- Controlar horarios
- Organizar contenido por categorías

### Configuración
- Información general de la institución
- Cambio de contraseñas
- Configuraciones del sistema

## 🎨 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS
- **JavaScript (ES6+)**: Funcionalidad interactiva
- **Font Awesome**: Iconografía
- **LocalStorage**: Persistencia de datos
- **Responsive Design**: Diseño adaptable

## 📱 Diseño Responsivo

El sitio web está optimizado para:
- 📱 Dispositivos móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1440px+)

## 🚀 Instalación y Uso

1. **Clonar o descargar** el proyecto
2. **Instalar dependencias**: `npm install`
3. **Copiar `.env.example` a `.env`** y configurar credenciales:
   ```bash
   cp .env.example .env
   ```
4. **Desarrollo**: `npm run dev` (servidor con hot-reload)
5. **Producción**: `npm run build` (genera `dist/`)
6. **Abrir** `index.html` o `dist/index.html` en un navegador

## 🔧 Personalización

### Cambiar Credenciales de Administrador
Edita el archivo `.env` y modifica:
```env
VITE_ADMIN_USER=tu_usuario
VITE_ADMIN_PASS=tu_contraseña_segura
```

> **Nota de seguridad**: Las credenciales se cargan desde variables de entorno. 
> NUNCA subas el archivo `.env` al repositorio (ya está en `.gitignore`).
> Para producción real, implementa un backend con autenticación server-side.

### Agregar Nuevas Secciones
1. Crea el archivo HTML en la carpeta `pages/`
2. Actualiza la navegación en `index.html`
3. Agrega los estilos necesarios en `css/style.css`

### Personalizar Colores
Modifica las variables CSS en `css/style.css`:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... más variables */
}
```

## 📊 Características del Dashboard

- **Interfaz Intuitiva**: Diseño limpio y fácil de usar
- **Navegación por Secciones**: Sidebar con acceso rápido
- **Gestión de Datos**: CRUD completo para todas las entidades
- **Notificaciones**: Sistema de alertas y confirmaciones
- **Persistencia**: Los datos se guardan en LocalStorage
- **Seguridad**: Sistema de autenticación con sesiones

## 🎯 Próximas Mejoras

- [ ] Integración con base de datos
- [ ] Sistema de roles de usuario
- [ ] Exportación de datos
- [ ] Backup automático
- [ ] Temas personalizables
- [ ] API REST para integraciones

## 👨‍💻 Desarrollado por

**Docente Victor Cañola**  
Institución Educativa Héctor Abad Gómez

## 📄 Licencia

© 2025 - Todos los derechos reservados

---

*Para soporte técnico o consultas, contacta al administrador del sistema.*
## 🔒 Aviso de Licencia y Derechos

Este proyecto es propiedad del Docente Victor Cañola (Institución Educativa Héctor Abad Gómez). Todos los derechos reservados. No se autoriza su copia, redistribución o modificación sin permiso escrito del titular.