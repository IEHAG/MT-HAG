// Sistema de autenticación para administrador
class AdminAuth {
    constructor() {
        this.adminCredentials = {
            // Credenciales solicitadas por el usuario
            username: 'adminhag@gmail.com',
            password: 'CAÑOLA2027*' // Nota: para producción mover a backend/variables de entorno
        };
        this.init();
    }

    init() {
        // Verificar si ya está autenticado y redirigir según la página actual
        const path = window.location.pathname || '';
        const isLoginPage = /\/admin\/login\.html$/i.test(path) || path.endsWith('/admin/') || path.endsWith('/admin');
        const isAuthenticated = this.isAuthenticated();

        if (isAuthenticated && isLoginPage) {
            this.redirectToDashboard();
            return;
        }

        // Configurar el formulario de login
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }
    }

    handleLogin(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('errorMessage');

        // Limpiar mensaje de error anterior
        errorMessage.style.display = 'none';

        // Validar credenciales
        if (username === this.adminCredentials.username && password === this.adminCredentials.password) {
            // Guardar sesión
            this.saveSession(username);
            this.redirectToDashboard();
        } else {
            this.showError('Credenciales incorrectas. Inténtalo de nuevo.');
        }
    }

    showError(message) {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    saveSession(username) {
        const sessionData = {
            username: username,
            loginTime: new Date().toISOString(),
            isAuthenticated: true
        };
        localStorage.setItem('adminSession', JSON.stringify(sessionData));
    }

    isAuthenticated() {
        const sessionData = localStorage.getItem('adminSession');
        if (!sessionData) return false;

        try {
            const session = JSON.parse(sessionData);
            // Verificar si la sesión no ha expirado (24 horas)
            const loginTime = new Date(session.loginTime);
            const now = new Date();
            const hoursDiff = (now - loginTime) / (1000 * 60 * 60);
            
            return session.isAuthenticated && hoursDiff < 24;
        } catch (error) {
            return false;
        }
    }

    redirectToDashboard() {
        window.location.href = 'dashboard.html';
    }

    logout() {
        localStorage.removeItem('adminSession');
        window.location.href = 'login.html';
    }

    getCurrentUser() {
        const sessionData = localStorage.getItem('adminSession');
        if (sessionData) {
            try {
                return JSON.parse(sessionData);
            } catch (error) {
                return null;
            }
        }
        return null;
    }
}

// Inicializar autenticación cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    new AdminAuth();
});

// Función global para logout
function logout() {
    const auth = new AdminAuth();
    auth.logout();
}
