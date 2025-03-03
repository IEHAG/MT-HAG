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

function displaySchedule() {
    const scheduleSection = document.getElementById('schedule');
    scheduleSection.innerHTML = ''; // Limpiar contenido previo

    // Definimos el orden deseado
    const order = ["10.1", "11.1", "10.2", "11.2"];
    
    order.forEach((grade, index) => {
        // Solo se crea el elemento si existe en el objeto schedule
        if (schedule[grade]) {
            const classes = schedule[grade];
            const gradeElement = document.createElement('div');
            gradeElement.className = 'schedule-card';
            gradeElement.style.animation = `slideIn 0.5s ease-out ${index * 0.2}s forwards`;
            gradeElement.style.opacity = '0';

            let classesHTML = classes.map(c => `
                <div class="schedule-item" 
                     style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);">
                    <div class="schedule-content">
                        <h4 class="day">${c.day}</h4>
                        <div class="time">
                            <i class="fas fa-clock"></i> ${c.time}
                        </div>
                        <div class="subject">
                            <i class="fas fa-book"></i> ${c.subject}
                        </div>
                    </div>
                </div>
            `).join('');

            gradeElement.innerHTML = `
                <h3 class="grade-title">Grado ${grade}</h3>
                <div class="classes-container">
                    ${classesHTML}
                </div>
            `;

            scheduleSection.appendChild(gradeElement);
        }
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
`;
document.head.appendChild(styles);

document.addEventListener('DOMContentLoaded', displaySchedule);
