// Dashboard del administrador
class AdminDashboard {
    constructor() {
        this.auth = new AdminAuth();
        this.currentSection = 'dashboard';
        this.students = this.loadStudents();
        this.materials = this.loadMaterials();
        this.schedules = this.loadSchedules();
        this.menuItems = this.loadMenuItems();
        this.init();
    }

    init() {
        // Verificar autenticación
        if (!this.auth.isAuthenticated()) {
            window.location.href = 'login.html';
            return;
        }

        // Configurar eventos
        this.setupEventListeners();
        this.loadDashboardData();
        this.updateUserInfo();
    }

    setupEventListeners() {
        // Navegación del sidebar
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const section = e.currentTarget.dataset.section;
                this.showSection(section);
            });
        });

        // Botón de logout
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.auth.logout());
        }

        // Tabs de contenido
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tab = e.currentTarget.dataset.tab;
                this.switchTab(tab);
            });
        });

        // Formularios
        this.setupForms();
    }

    setupForms() {
        // Formulario de agregar estudiante
        const addStudentForm = document.getElementById('addStudentForm');
        if (addStudentForm) {
            addStudentForm.addEventListener('submit', (e) => this.handleAddStudent(e));
        }

        // Formulario de configuración general
        const generalConfigForm = document.getElementById('generalConfigForm');
        if (generalConfigForm) {
            generalConfigForm.addEventListener('submit', (e) => this.handleGeneralConfig(e));
        }

        // Formulario de seguridad
        const securityConfigForm = document.getElementById('securityConfigForm');
        if (securityConfigForm) {
            securityConfigForm.addEventListener('submit', (e) => this.handleSecurityConfig(e));
        }

        // Formulario de nuevo horario (público)
        const addScheduleForm = document.getElementById('addScheduleForm');
        if (addScheduleForm) {
            addScheduleForm.addEventListener('submit', (e) => this.handleAddPublicSchedule(e));
        }

        // Formulario de botón de menú
        const menuItemForm = document.getElementById('menuItemForm');
        if (menuItemForm) {
            menuItemForm.addEventListener('submit', (e) => this.handleSaveMenuItem(e));
        }
    }

    showSection(sectionName) {
        // Ocultar todas las secciones
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Remover clase active de todos los nav-items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });

        // Mostrar sección seleccionada
        const targetSection = document.getElementById(`${sectionName}-section`);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Activar nav-item correspondiente
        const navItem = document.querySelector(`[data-section="${sectionName}"]`);
        if (navItem) {
            navItem.classList.add('active');
        }

        // Actualizar título de la página
        const pageTitle = document.getElementById('pageTitle');
        if (pageTitle) {
            pageTitle.textContent = this.getSectionTitle(sectionName);
        }

        this.currentSection = sectionName;

        // Cargar datos específicos de la sección
        this.loadSectionData(sectionName);
    }

    getSectionTitle(sectionName) {
        const titles = {
            'dashboard': 'Dashboard',
            'estudiantes': 'Gestión de Estudiantes',
            'contenido': 'Gestión de Contenido',
            'horarios': 'Gestión de Horarios',
            'materiales': 'Gestión de Materiales',
            'configuracion': 'Configuración'
        };
        return titles[sectionName] || 'Dashboard';
    }

    loadSectionData(sectionName) {
        switch (sectionName) {
            case 'estudiantes':
                this.loadStudentsGrid();
                break;
            case 'menu':
                this.loadMenuItemsList();
                break;
            case 'contenido':
                this.loadContentTabs();
                break;
            case 'horarios':
                this.loadScheduleCalendar();
                break;
            case 'materiales':
                this.loadMaterialsGrid();
                break;
        }
    }

    // ---- Menú principal (Index) ----
    loadMenuItems() {
        const saved = localStorage.getItem('siteMenuItems');
        return saved ? JSON.parse(saved) : [];
    }

    saveMenuItems() {
        localStorage.setItem('siteMenuItems', JSON.stringify(this.menuItems));
    }

    loadMenuItemsList() {
        const listEl = document.getElementById('menuItemsList');
        if (!listEl) return;
        if (!this.menuItems.length) {
            listEl.innerHTML = '<div class="content-item"><div class="content-info">No hay botones aún. Usa "Agregar botón".</div></div>';
            return;
        }
        listEl.innerHTML = this.menuItems.map(item => `
            <div class="content-item">
                <div class="content-icon"><i class="fas fa-link"></i></div>
                <div class="content-info">
                    <div class="content-title">${item.title}</div>
                    <div class="content-description">${item.href} (${item.target || '_self'})</div>
                </div>
                <div class="content-actions">
                    <button class="btn-primary" onclick="window.dashboard.editMenuItem('${item.id}')"><i class="fas fa-edit"></i> Editar</button>
                    <button class="btn-secondary" onclick="window.dashboard.deleteMenuItem('${item.id}')"><i class="fas fa-trash"></i> Eliminar</button>
                </div>
            </div>
        `).join('');
    }

    handleSaveMenuItem(e) {
        e.preventDefault();
        const id = (document.getElementById('menuItemId') || {}).value;
        const title = (document.getElementById('menuTitle') || {}).value || '';
        const icon = (document.getElementById('menuIcon') || {}).value || '';
        const href = (document.getElementById('menuHref') || {}).value || '';
        const target = (document.getElementById('menuTarget') || {}).value || '_self';

        if (!title || !href) {
            this.showNotification('Título y enlace son obligatorios', 'warning');
            return;
        }

        if (id) {
            // update
            this.menuItems = this.menuItems.map(x => x.id === id ? { ...x, title, icon, href, target } : x);
        } else {
            // create
            this.menuItems.push({ id: Date.now().toString(), title, icon, href, target });
        }

        this.saveMenuItems();
        this.closeModal('menuItemModal');
        this.loadMenuItemsList();
        this.showNotification('Botón guardado', 'success');
    }

    editMenuItem(id) {
        const item = this.menuItems.find(x => x.id === id);
        if (!item) return;
        const titleEl = document.getElementById('menuModalTitle');
        if (titleEl) titleEl.textContent = 'Editar botón';
        (document.getElementById('menuItemId') || {}).value = item.id;
        (document.getElementById('menuTitle') || {}).value = item.title;
        (document.getElementById('menuIcon') || {}).value = item.icon || '';
        (document.getElementById('menuHref') || {}).value = item.href;
        (document.getElementById('menuTarget') || {}).value = item.target || '_self';
        this.openModal('menuItemModal');
    }

    deleteMenuItem(id) {
        if (!confirm('¿Eliminar este botón?')) return;
        this.menuItems = this.menuItems.filter(x => x.id !== id);
        this.saveMenuItems();
        this.loadMenuItemsList();
        this.showNotification('Botón eliminado', 'success');
    }

    prepareNewMenuItem() {
        const titleEl = document.getElementById('menuModalTitle');
        if (titleEl) titleEl.textContent = 'Nuevo botón';
        (document.getElementById('menuItemId') || {}).value = '';
        (document.getElementById('menuTitle') || {}).value = '';
        (document.getElementById('menuIcon') || {}).value = '';
        (document.getElementById('menuHref') || {}).value = '';
        (document.getElementById('menuTarget') || {}).value = '_self';
        this.openModal('menuItemModal');
    }

    loadDashboardData() {
        // Cargar estadísticas
        this.updateStats();
        this.loadRecentActivity();
        this.updateVisitsStats();
    }

    updateStats() {
        document.getElementById('totalStudents').textContent = this.students.length;
        document.getElementById('totalMaterials').textContent = this.materials.length;
        document.getElementById('totalSchedules').textContent = this.schedules.length;
    }

    updateVisitsStats() {
        // 2024 fijo a 590
        const el2024 = document.getElementById('visits2024Number');
        if (el2024) el2024.textContent = '590';

        // 2025 toma del localStorage del contador global (clave siteVisitsCount)
        const el2025 = document.getElementById('visits2025Number');
        if (el2025) {
            const raw = localStorage.getItem('siteVisitsCount');
            let count = 355; // default
            if (raw !== null) {
                const parsed = parseInt(raw, 10);
                if (!isNaN(parsed)) count = parsed;
            }
            el2025.textContent = String(count);
        }
    }

    loadRecentActivity() {
        const activities = [
            {
                icon: 'fas fa-user-plus',
                title: 'Nuevo estudiante agregado',
                time: 'Hace 2 horas',
                color: 'var(--success-color)'
            },
            {
                icon: 'fas fa-file-plus',
                title: 'Material actualizado',
                time: 'Hace 4 horas',
                color: 'var(--secondary-color)'
            },
            {
                icon: 'fas fa-calendar-plus',
                title: 'Horario modificado',
                time: 'Hace 1 día',
                color: 'var(--warning-color)'
            },
            {
                icon: 'fas fa-cog',
                title: 'Configuración actualizada',
                time: 'Hace 2 días',
                color: 'var(--dark-gray)'
            }
        ];

        const activityList = document.getElementById('activityList');
        if (activityList) {
            activityList.innerHTML = activities.map(activity => `
                <div class="activity-item">
                    <div class="activity-icon" style="background: ${activity.color}">
                        <i class="${activity.icon}"></i>
                    </div>
                    <div class="activity-content">
                        <div class="activity-title">${activity.title}</div>
                        <div class="activity-time">${activity.time}</div>
                    </div>
                </div>
            `).join('');
        }
    }

    loadStudentsGrid() {
        const studentsGrid = document.getElementById('studentsGrid');
        if (studentsGrid) {
            studentsGrid.innerHTML = this.students.map(student => `
                <div class="student-card">
                    <img src="${student.photo}" alt="${student.name}" class="student-photo">
                    <div class="student-name">${student.name}</div>
                    <div class="student-program">${student.program}</div>
                    <div class="student-actions">
                        <button class="edit-btn" onclick="editStudent('${student.id}')">
                            <i class="fas fa-edit"></i> Editar
                        </button>
                        <button class="delete-btn" onclick="deleteStudent('${student.id}')">
                            <i class="fas fa-trash"></i> Eliminar
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    loadContentTabs() {
        // Cargar páginas
        const pagesList = document.getElementById('pagesList');
        if (pagesList) {
            const pages = [
                { title: 'Programación de Software', description: 'Página principal de programación', status: 'Activa' },
                { title: 'Preprensa Digital', description: 'Página principal de preprensa', status: 'Activa' },
                { title: 'Material', description: 'Página de materiales', status: 'Activa' },
                { title: 'Horario', description: 'Página de horarios', status: 'Activa' }
            ];

            pagesList.innerHTML = pages.map(page => `
                <div class="content-item">
                    <div class="content-icon">
                        <i class="fas fa-file-alt"></i>
                    </div>
                    <div class="content-info">
                        <div class="content-title">${page.title}</div>
                        <div class="content-description">${page.description} - ${page.status}</div>
                    </div>
                    <div class="content-actions">
                        <button class="btn-primary" onclick="editPage('${page.title}')">
                            <i class="fas fa-edit"></i> Editar
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Cargar materiales
        this.loadMaterialsList();
    }

    loadMaterialsList() {
        const materialsList = document.getElementById('materialsList');
        if (materialsList) {
            materialsList.innerHTML = this.materials.map(material => `
                <div class="content-item">
                    <div class="content-icon">
                        <i class="fas fa-book"></i>
                    </div>
                    <div class="content-info">
                        <div class="content-title">${material.title}</div>
                        <div class="content-description">${material.description}</div>
                    </div>
                    <div class="content-actions">
                        <button class="btn-primary" onclick="editMaterial('${material.id}')">
                            <i class="fas fa-edit"></i> Editar
                        </button>
                        <button class="btn-secondary" onclick="deleteMaterial('${material.id}')">
                            <i class="fas fa-trash"></i> Eliminar
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    loadMaterialsGrid() {
        const materialsGrid = document.getElementById('materialsGrid');
        if (materialsGrid) {
            materialsGrid.innerHTML = this.materials.map(material => `
                <div class="student-card">
                    <div class="content-icon" style="width: 60px; height: 60px; margin: 0 auto 15px;">
                        <i class="fas fa-book"></i>
                    </div>
                    <div class="student-name">${material.title}</div>
                    <div class="student-program">${material.type}</div>
                    <div class="student-actions">
                        <button class="edit-btn" onclick="editMaterial('${material.id}')">
                            <i class="fas fa-edit"></i> Editar
                        </button>
                        <button class="delete-btn" onclick="deleteMaterial('${material.id}')">
                            <i class="fas fa-trash"></i> Eliminar
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    loadScheduleCalendar() {
        const scheduleCalendar = document.getElementById('scheduleCalendar');
        if (scheduleCalendar) {
            scheduleCalendar.innerHTML = `
                <div class="config-card">
                    <h3>Calendario de Horarios</h3>
                    <p>Aquí se mostrará el calendario de horarios. Esta funcionalidad se puede expandir según las necesidades.</p>
                    <div class="action-buttons">
                        <button class="action-btn" onclick="createSchedule()">
                            <i class="fas fa-plus"></i> Crear Nuevo Horario
                        </button>
                    </div>
                    <div style="margin-top:12px; color: var(--dark-gray); font-size: 0.9rem;">
                        Total registros públicos: <strong id="publicSchedulesCount">0</strong>
                    </div>
                </div>
            `;
        }

        // Mostrar conteo de horarios públicos
        const countEl = document.getElementById('publicSchedulesCount');
        if (countEl) {
            const list = this.loadPublicSchedules();
            countEl.textContent = String(list.length);
        }
    }

    // --- Horarios Públicos (para página horario.html) ---
    loadPublicSchedules() {
        const raw = localStorage.getItem('publicSchedules');
        try { return raw ? JSON.parse(raw) : []; } catch { return []; }
    }

    savePublicSchedules(list) {
        localStorage.setItem('publicSchedules', JSON.stringify(list));
    }

    handleAddPublicSchedule(e) {
        e.preventDefault();
        const grade = (document.getElementById('scheduleGrade') || {}).value || '';
        const day = (document.getElementById('scheduleDay') || {}).value || '';
        const time = (document.getElementById('scheduleTime') || {}).value || '';
        const subject = (document.getElementById('scheduleSubject') || {}).value || '';

        if (!grade || !day || !time || !subject) {
            this.showNotification('Completa todos los campos del horario', 'warning');
            return;
        }

        const list = this.loadPublicSchedules();
        list.push({ id: Date.now().toString(), grade, day, time, subject });
        this.savePublicSchedules(list);
        this.closeModal('addScheduleModal');
        this.showNotification('Horario agregado', 'success');

        // Actualizar conteo en sección horarios
        const countEl = document.getElementById('publicSchedulesCount');
        if (countEl) countEl.textContent = String(list.length);
    }

    switchTab(tabName) {
        // Remover clase active de todos los tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Ocultar todos los panes
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });

        // Activar tab seleccionado
        const tabBtn = document.querySelector(`[data-tab="${tabName}"]`);
        if (tabBtn) {
            tabBtn.classList.add('active');
        }

        // Mostrar pane correspondiente
        const tabPane = document.getElementById(`${tabName}-tab`);
        if (tabPane) {
            tabPane.classList.add('active');
        }
    }

    handleAddStudent(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const student = {
            id: Date.now().toString(),
            name: formData.get('studentName') || document.getElementById('studentName').value,
            photo: 'assets/images/default-student.png', // Imagen por defecto
            program: formData.get('studentProgram') || document.getElementById('studentProgram').value
        };

        this.students.push(student);
        this.saveStudents();
        this.closeModal('addStudentModal');
        this.loadStudentsGrid();
        this.updateStats();
        
        // Mostrar notificación de éxito
        this.showNotification('Estudiante agregado exitosamente', 'success');
    }

    handleGeneralConfig(e) {
        e.preventDefault();
        // Aquí se guardaría la configuración general
        this.showNotification('Configuración guardada exitosamente', 'success');
    }

    handleSecurityConfig(e) {
        e.preventDefault();
        // Aquí se cambiaría la contraseña
        this.showNotification('Contraseña cambiada exitosamente', 'success');
    }

    updateUserInfo() {
        const user = this.auth.getCurrentUser();
        if (user) {
            const adminName = document.getElementById('adminName');
            if (adminName) {
                adminName.textContent = user.username;
            }
        }
    }

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    }

    showNotification(message, type = 'info') {
        // Crear notificación temporal
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'var(--success-color)' : 'var(--secondary-color)'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            z-index: 1001;
            animation: slideInRight 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Remover después de 3 segundos
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Funciones de carga y guardado de datos
    loadStudents() {
        const saved = localStorage.getItem('adminStudents');
        return saved ? JSON.parse(saved) : [
            { id: '1', name: 'Juan Pérez', photo: 'assets/images/default-student.png', program: 'Programación de Software' },
            { id: '2', name: 'María García', photo: 'assets/images/default-student.png', program: 'Preprensa Digital' }
        ];
    }

    saveStudents() {
        localStorage.setItem('adminStudents', JSON.stringify(this.students));
    }

    loadMaterials() {
        const saved = localStorage.getItem('adminMaterials');
        return saved ? JSON.parse(saved) : [
            { id: '1', title: 'Introducción a la Programación', description: 'Material básico de programación', type: 'Documento' },
            { id: '2', title: 'Diseño Gráfico', description: 'Fundamentos del diseño', type: 'Presentación' }
        ];
    }

    saveMaterials() {
        localStorage.setItem('adminMaterials', JSON.stringify(this.materials));
    }

    loadSchedules() {
        const saved = localStorage.getItem('adminSchedules');
        return saved ? JSON.parse(saved) : [
            { id: '1', title: 'Horario Programación', description: 'Horario de clases de programación' },
            { id: '2', title: 'Horario Preprensa', description: 'Horario de clases de preprensa' }
        ];
    }

    saveSchedules() {
        localStorage.setItem('adminSchedules', JSON.stringify(this.schedules));
    }
}

// Funciones globales para los botones
function showSection(sectionName) {
    if (window.dashboard) {
        window.dashboard.showSection(sectionName);
    }
}

function openModal(modalId) {
    if (window.dashboard) {
        window.dashboard.openModal(modalId);
    }
}

function closeModal(modalId) {
    if (window.dashboard) {
        window.dashboard.closeModal(modalId);
    }
}

function editStudent(id) {
    console.log('Editar estudiante:', id);
    // Implementar edición de estudiante
}

function deleteStudent(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este estudiante?')) {
        if (window.dashboard) {
            window.dashboard.students = window.dashboard.students.filter(s => s.id !== id);
            window.dashboard.saveStudents();
            window.dashboard.loadStudentsGrid();
            window.dashboard.updateStats();
            window.dashboard.showNotification('Estudiante eliminado exitosamente', 'success');
        }
    }
}

function editMaterial(id) {
    console.log('Editar material:', id);
    // Implementar edición de material
}

function deleteMaterial(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este material?')) {
        if (window.dashboard) {
            window.dashboard.materials = window.dashboard.materials.filter(m => m.id !== id);
            window.dashboard.saveMaterials();
            window.dashboard.loadMaterialsList();
            window.dashboard.loadMaterialsGrid();
            window.dashboard.updateStats();
            window.dashboard.showNotification('Material eliminado exitosamente', 'success');
        }
    }
}

function editPage(title) {
    console.log('Editar página:', title);
    // Implementar edición de página
}

function createSchedule() {
    console.log('Crear horario');
    // Implementar creación de horario
}

// Inicializar dashboard cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    window.dashboard = new AdminDashboard();
});

// Cerrar modales al hacer clic fuera de ellos
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});
