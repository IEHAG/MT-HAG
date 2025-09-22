const proyectosData = [
    {
        title: "Desarrollo de Software",
        description: "Proyecto enfocado en la creación de aplicaciones innovadoras",
        requirements: [
            "Implementación de metodologías ágiles",
            "Uso de tecnologías modernas",
            "Documentación del proceso"
        ],
        link: "https://drive.google.com/file/d/1Guus5IjODrpaMNLim70Re7xtXH53QSZJ/view"
    },
    {
        title: "Diseño y Preprensa",
        description: "Proyecto de diseño y preparación de materiales impresos",
        requirements: [
            "Diseño creativo",
            "Optimización para impresión",
            "Control de calidad"
        ],
        link: "https://drive.google.com/file/d/1Guus5IjODrpaMNLim70Re7xtXH53QSZJ/view"
    }
];

function displayProyectos() {
    const proyectosSection = document.getElementById('proyectos');
    
    proyectosData.forEach(proyecto => {
        const proyectoElement = document.createElement('div');
        proyectoElement.className = 'content-card';
        
        const requirementsList = proyecto.requirements
            .map(req => `<li>${req}</li>`)
            .join('');

        proyectoElement.innerHTML = `
            <h3>${proyecto.title}</h3>
            <p>${proyecto.description}</p>
            <h4>Requisitos:</h4>
            <ul class="requirements-list">
            ${requirementsList}
            </ul>
            <button class="project-button" onclick="window.open('${proyecto.link}', '_blank')">
            <span>Conoce el Proyecto</span>
            <i class="fas fa-chevron-circle-right"></i>
            </button>
        `;
        
        // Add styles for the button
        const style = document.createElement('style');
        style.textContent = `
            .project-button {
            background: linear-gradient(45deg, #2196F3, #00BCD4);
            border: none;
            border-radius: 25px;
            color: white;
            padding: 12px 24px;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            }

            .project-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
            background: linear-gradient(45deg, #00BCD4, #2196F3);
            }

            .project-button i {
            transition: transform 0.3s ease;
            }

            .project-button:hover i {
            transform: translateX(5px);
            }
        `;
        document.head.appendChild(style);
        
        proyectosSection.appendChild(proyectoElement);
        });
    }

    document.addEventListener('DOMContentLoaded', displayProyectos);