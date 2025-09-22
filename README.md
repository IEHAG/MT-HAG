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
├── css/                    # Hojas de estilo
│   ├── style.css          # Estilos principales
│   ├── admin.css          # Estilos del panel de administración
│   ├── chatbot.css        # Estilos del chatbot
│   └── ...                # Otros archivos CSS
├── js/                     # Scripts JavaScript
│   ├── main.js            # Script principal
│   ├── admin-auth.js      # Autenticación de administrador
│   ├── admin-dashboard.js # Funcionalidades del dashboard
│   └── ...                # Otros scripts
├── pages/                  # Páginas del sitio web
│   ├── programacion.html  # Página de programación
│   ├── preprensa.html     # Página de preprensa
│   ├── material.html      # Página de materiales
│   └── ...                # Otras páginas
├── libs/                   # Librerías externas
└── index.html             # Página principal
```

## 🔐 Acceso al Panel de Administración

### Credenciales por defecto:
- **Usuario**: `admin`
- **Contraseña**: `admin123`

### Acceso:
1. Visita la página principal
2. Haz clic en el botón de configuración (⚙️) en la esquina superior derecha
3. Ingresa las credenciales de administrador
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
2. **Abrir** `index.html` en un navegador web
3. **Navegar** por las diferentes secciones
4. **Acceder al panel de administración** usando las credenciales

## 🔧 Personalización

### Cambiar Credenciales de Administrador
Edita el archivo `js/admin-auth.js` y modifica:
```javascript
this.adminCredentials = {
    username: 'tu_usuario',
    password: 'tu_contraseña_segura'
};
```

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