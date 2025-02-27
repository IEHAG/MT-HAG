const links = [
    {
        name: "Renderforest",
        url: "https://www.renderforest.com/es/intro-videos",
        description: "Plataforma en línea para crear intros y videos animados de forma sencilla. "
    }
    {
        name: "CapCut",
        url: "https://www.capcut.com/my-edit",
        description: "Editor de video en línea que permite crear y editar videos con herramientas avanzadas como efectos, transiciones y AI. Es ideal para ediciones rápidas y profesionales."
    },
    {
        name: "SQL Easy",
        url: "https://www.sql-easy.com/es/tutorial/",
        description: "Es una plataforma interactiva para aprender SQL de forma práctica y sencilla. Ofrece ejercicios y explicaciones para mejorar la comprensión de consultas SQL."
    },
    {
        name: "V0.dev",
        url: "https://v0.dev/",
        description: "Es una plataforma para generar interfaces de usuario con React y Tailwind CSS mediante inteligencia artificial."
    },
    {
        name: "AIFINDY",
        url: "https://aifindy.com/",
        description: "Directorio actualizado de herramientas de inteligencia artificial organizadas por categorías."
    },
    {
        name: "Flexbox Labs",
        url: "https://flexboxlabs.netlify.app/",
        description: "Herramienta interactiva que te ayuda a visualizar y practicar el uso de CSS Flexbox, facilitando el diseño de interfaces responsivas."
    },
    {
        name: "Bootstrap",
        url: "https://getbootstrap.com/",
        description: "Es un framework de CSS que facilita el diseño de sitios web responsivos y modernos."
    },
    {
        name: "PlantUML",
        url: "https://plantuml.com/en-dark/",
        description: "Herramienta para crear diagramas UML a partir de texto, utilizando un lenguaje de marcado simple. Es ideal para documentar sistemas visualmente de manera rápida y eficiente."
    },
    {
        name: "OverAPI",
        url: "https://overapi.com/",
        description: "Sitio web que recopila hojas de referencia rápida para desarrolladores, abarcando diversos lenguajes de programación y tecnologías. Es una herramienta útil para tener acceso a información concisa y esencial de manera rápida"
    },
    
    {
        name: "Freepik",
        url: "https://www.freepik.es/",
        description: "Plataforma que ofrece recursos gráficos gratuitos y premium, incluyendo vectores, fotos, iconos, plantillas y más. Es ideal para diseñadores y creativos que buscan imágenes de alta calidad para sus proyectos"
    },
    {
        name: "GitHub",
        url: "https://github.com",
        description: "Plataforma de desarrollo colaborativo"
    },
    {
        name: "MDN Web Docs",
        url: "https://developer.mozilla.org",
        description: "Documentación de tecnologías web"
    }
    
];

let currentSort = {
    field: 'name',
    order: 'asc'
};

function createLinkRow(link) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${link.name}</td>
        <td><a href="${link.url}" target="_blank">${link.url}</a></td>
        <td>${link.description}</td>
        <td>
            <button class="visit-button" data-url="${link.url}">
                Visitar
            </button>
            <button class="copy-button" data-url="${link.url}">
                📋
            </button>
        </td>
    `;
    
    // Eventos interactivos
    row.addEventListener('click', (e) => {
        if (!e.target.tagName === 'BUTTON') {
            row.classList.toggle('selected');
        }
    });

    return row;
}

function sortLinks(field) {
    if (currentSort.field === field) {
        currentSort.order = currentSort.order === 'asc' ? 'desc' : 'asc';
    } else {
        currentSort.field = field;
        currentSort.order = 'asc';
    }

    links.sort((a, b) => {
        if (a[field] > b[field]) return currentSort.order === 'asc' ? 1 : -1;
        if (a[field] < b[field]) return currentSort.order === 'asc' ? -1 : 1;
        return 0;
    });

    renderTable();
}

function renderTable() {
    const tableBody = document.getElementById('linksTableBody');
    tableBody.innerHTML = '';
    
    links.forEach(link => {
        tableBody.appendChild(createLinkRow(link));
    });

    // Actualizar indicadores de ordenamiento
    document.querySelectorAll('th[data-sort]').forEach(header => {
        header.innerHTML = header.dataset.sort + 
            (currentSort.field === header.dataset.sort ? 
            (currentSort.order === 'asc' ? ' ▲' : ' ▼') : ' ▲');
    });

    // Eventos de botones
    document.querySelectorAll('.visit-button').forEach(button => {
        button.addEventListener('click', (e) => {
            window.open(e.target.dataset.url, '_blank');
        });
    });

    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', (e) => {
            navigator.clipboard.writeText(e.target.dataset.url);
            e.target.textContent = '✓ Copiado!';
            setTimeout(() => {
                e.target.textContent = '📋';
            }, 2000);
        });
    });
}

// Eventos de ordenamiento
document.querySelectorAll('th[data-sort]').forEach(header => {
    header.addEventListener('click', () => {
        sortLinks(header.dataset.sort);
    });
});

document.addEventListener('DOMContentLoaded', renderTable);