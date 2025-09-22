const planesData = [
    {
        grade: "10-1",
        subject: "Programación de Software",
        activities: [
            "Desarrollo de algoritmos básicos",
            "Implementación de estructuras de datos",
            "Ejercicios de lógica de programación"
        ]
    },
    {
        grade: "11-1",
        subject: "Desarrollo Web",
        activities: [
            "Creación de páginas web responsive",
            "Implementación de JavaScript",
            "Desarrollo de aplicaciones web"
        ]
    },
    {
        grade: "10-2",
        subject: "Preprensa Digital",
        activities: [
            "Diseño de materiales impresos",
            "Manejo de software de diseño",
            "Preparación de archivos para impresión"
        ]
    },
    {
        grade: "11-2",
        subject: "Medios Impresos",
        activities: [
            "Control de calidad en impresión",
            "Gestión de color",
            "Acabados de impresión"
        ]
    }
];

function displayPlanes() {
    const planesSection = document.getElementById('planes');
    
    planesData.forEach(plan => {
        const planElement = document.createElement('div');
        planElement.className = 'content-card';
        
        const activitiesList = plan.activities
            .map(activity => `<li>${activity}</li>`)
            .join('');

        planElement.innerHTML = `
            <h3>Grado ${plan.grade}</h3>
            <h4>${plan.subject}</h4>
            <ul class="activities-list">
                ${activitiesList}
            </ul>
            <a href="https://www.iehectorabadgomez.edu.co/index2.php?id=93702&idmenutipo=7334" class="button">Planes de Mejoramiento</a>
        `;
        
        planesSection.appendChild(planElement);
    });
}

document.addEventListener('DOMContentLoaded', displayPlanes);