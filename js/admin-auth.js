// Sistema de autenticación para administrador
class AdminAuth {
    constructor() {
        this.adminCredentials = {
            username: 'admin',
            password: 'admin123' // En producción, esto debería ser más seguro
        };
        this.init();
    }

    init() {
        // Verificar si ya está autenticado
        if (this.isAuthenticated()) {
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
