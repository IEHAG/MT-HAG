const schedule = {
    "11.2": [
        { day: "Lunes", time: "1:00 PM - 6:00 PM", subject: "Preprensa Digital para Medios Impresos-Instructor SENA" },
        { day: "Jueves", time: "1:00 PM - 6:00 PM", subject: "Preprensa Digital para Medios Impresos-Docente HAG" },
        { day: "Descansos", time: "3:14 PM - 3:45 PM", subject: "Días  Miércoles y Viernes" }
    ],
    "10.1": [
        { day: "Martes", time: "1:00 PM - 6:00 PM", subject: "Programación de Software-Instructor SENA" },
        { day: "Martes", time: "2:00 PM - 3:00 PM", subject: "Revisión Proyectos Y Trabajo Conjunto- Instructor SENA y Docente HAG" },
        { day: "Miércoles", time: "1:00 PM - 6:00 PM", subject: "Programación de Software-Docente HAG" },
        { day: "Descansos", time: "3:14 PM - 3:45 PM", subject: "Días Martes y Miércoles" }
    ],
    "10.2": [
        { day: "Lunes", time: "1:00 PM - 6:00 PM", subject: "Preprensa Digital para Medios Impresos-Docente HAG" },
        { day: "Martes", time: "1:00 PM - 6:00 PM", subject: "Preprensa Digital para Medios Impresos-Instructor SENA" },
        { day: "Martes", time: "4:00 PM - 5:00 PM", subject: "Revisión Proyectos Y Trabajo Conjunto- Instructor SENA y Docente HAG" },
        { day: "Descansos", time: "3:14 PM - 3:45 PM", subject: "Días Lunes y Martes" }
    ],
    "11.1": [
        { day: "Miércoles", time: "1:00 PM - 6:00 PM", subject: "Programación de Software-Instructor SENA" },
        { day: "Viernes", time: "1:00 PM - 6:00 PM", subject: "Programación de Software-Docente HAG" },
        { day: "Descansos", time: "3:14 PM - 3:45 PM", subject: "Días  Miércoles y Viernes" }
    ]
};

// Fusionar con horarios públicos guardados desde el dashboard
function loadPublicSchedules() {
    try {
        const raw = localStorage.getItem('publicSchedules');
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function getMergedSchedule() {
    const merged = JSON.parse(JSON.stringify(schedule));
    const extra = loadPublicSchedules();
    extra.forEach(item => {
        if (!merged[item.grade]) merged[item.grade] = [];
        merged[item.grade].push({ day: item.day, time: item.time, subject: item.subject });
    });
    return merged;
}

// Helpers para filtros
const DAYS = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]; // por si se usa futuro

function getAllGrades() {
    return Object.keys(schedule);
}

function getAllDays() {
    const set = new Set();
    Object.values(schedule).forEach(list => list.forEach(i => set.add(i.day)));
    return Array.from(set);
}

function displaySchedule(filters = {}) {
    const scheduleSection = document.getElementById('schedule');
    if (!scheduleSection) return;
    scheduleSection.innerHTML = '';

    const order = ["10.1", "11.1", "10.2", "11.2"]; // orden preferido
    const { grade = '', day = '', search = '' } = filters;
    const searchLower = (search || '').trim().toLowerCase();
    const data = getMergedSchedule();

    order.forEach((gradeKey, index) => {
        if (!data[gradeKey]) return;
        if (grade && gradeKey !== grade) return;

        const filtered = data[gradeKey].filter(item => {
            const matchesDay = !day || item.day === day;
            const text = `${item.day} ${item.time} ${item.subject}`.toLowerCase();
            const matchesSearch = !searchLower || text.includes(searchLower);
            return matchesDay && matchesSearch;
        });

        if (filtered.length === 0) return;

        const gradeElement = document.createElement('div');
        gradeElement.className = 'schedule-card';
        gradeElement.style.animation = `slideIn 0.5s ease-out ${index * 0.2}s forwards`;
        gradeElement.style.opacity = '0';

        const classesHTML = filtered.map(c => {
            const subj = c.subject.toLowerCase();
            let bg = 'linear-gradient(135deg, #495057 0%, #6c757d 100%)'; // otros
            if (subj.includes('programación')) bg = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)';
            else if (subj.includes('preprensa')) bg = 'linear-gradient(135deg, #6a00f4 0%, #b5179e 100%)';
            else if (subj.includes('descanso')) bg = 'linear-gradient(135deg, #2d6a4f 0%, #52b788 100%)';
            return `
            <div class="schedule-item" style="background: ${bg};">
                <div class="schedule-content">
                    <h4 class="day">${c.day}</h4>
                    <div class="time"><i class="fas fa-clock"></i> ${c.time}</div>
                    <div class="subject"><i class="fas fa-book"></i> ${c.subject}</div>
                </div>
            </div>
            `;
        }).join('');

        gradeElement.innerHTML = `
            <h3 class="grade-title">Grado ${gradeKey}</h3>
            <div class="classes-container">${classesHTML}</div>
        `;
        scheduleSection.appendChild(gradeElement);
    });
}

// Agregamos los estilos CSS requeridos
const styles = document.createElement('style');
styles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(-50px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .schedule-card {
        margin: 20px;
        padding: 15px;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        background: #f8f9fa;
        border: 2px solid #dee2e6;
    }
    
    .grade-title {
        color: #1e3c72;
        text-align: center;
        margin-bottom: 15px;
        font-size: 1.5em;
        font-weight: bold;
    }
    
    .schedule-item {
        margin: 10px 0;
        padding: 15px;
        border-radius: 10px;
        color: white;
        transition: transform 0.3s ease;
    }
    
    .schedule-item:hover {
        transform: scale(1.02);
        box-shadow: 0 6px 12px rgba(0,0,0,0.15);
    }
    
    .schedule-content {
        display: grid;
        gap: 8px;
    }

    /* Optimización para impresión */
    @media print {
        body { background: #fff; }
        .back-button, .schedule-toolbar, .schedule-legend { display: none !important; }
        .schedule-card { page-break-inside: avoid; border-color: #ccc; }
        .schedule-item { box-shadow: none; }
    }
`;
document.head.appendChild(styles);

function initFilters() {
    const gradeFilter = document.getElementById('gradeFilter');
    const dayFilter = document.getElementById('dayFilter');
    const searchFilter = document.getElementById('searchFilter');
    const resetBtn = document.getElementById('resetFilters');
    const printBtn = document.getElementById('printSchedule');

    if (gradeFilter) {
        // populate grades
        getAllGrades().forEach(g => {
            const opt = document.createElement('option');
            opt.value = g;
            opt.textContent = g;
            gradeFilter.appendChild(opt);
        });
        gradeFilter.addEventListener('change', () => applyFilters());
    }

    if (dayFilter) {
        getAllDays().forEach(d => {
            const opt = document.createElement('option');
            opt.value = d;
            opt.textContent = d;
            dayFilter.appendChild(opt);
        });
        dayFilter.addEventListener('change', () => applyFilters());
    }

    if (searchFilter) {
        searchFilter.addEventListener('input', () => applyFilters());
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (gradeFilter) gradeFilter.value = '';
            if (dayFilter) dayFilter.value = '';
            if (searchFilter) searchFilter.value = '';
            displaySchedule();
        });
    }

    if (printBtn) {
        printBtn.addEventListener('click', () => window.print());
    }
}

function applyFilters() {
    const grade = (document.getElementById('gradeFilter') || {}).value || '';
    const day = (document.getElementById('dayFilter') || {}).value || '';
    const search = (document.getElementById('searchFilter') || {}).value || '';
    displaySchedule({ grade, day, search });
}

document.addEventListener('DOMContentLoaded', () => {
    displaySchedule();
    initFilters();
});
