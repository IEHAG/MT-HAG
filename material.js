const materialsData = [
    {
        title: "Programación de Software - Grado 10-1",
        items: [
            {
                name: "Docente HAG",
                downloadUrl: "/materials/guia-algoritmos.pdf",
                driveUrl: "https://goo.su/08zYK"
            },
            {
                name: "Instructor SENA",
                downloadUrl: "/materials/manual-javascript.pdf",
                driveUrl: "https://goo.su/08zYK"
            }
        ]
    },
    {
        title: "Programación de Software - Grado 11-1",
        items: [
            {
                name: "Docente HAG",
                downloadUrl: "/materials/desarrollo-web.pdf",
                driveUrl: "https://drive.google.com/drive/folders/17VH6V6G1LufK0cq-bRDHRGSEkZlJ8Uu3Meyfgf02WR3iyii3XdPC1l4NvM78SMrV-U_UayP2?usp=sharing"
            },
            {
                name: "Instructor SENA",
                downloadUrl: "/materials/bases-datos.pdf",
                driveUrl: "4"
            }
        ]
    },
    {
        title: "Preprensa Digital para Medios Impresos - Grado 10-2",
        items: [
            {
                name: "Docente HAG",
                downloadUrl: "/materials/fundamentos-diseno.pdf",
                driveUrl: "https://drive.google.com/drive/folders/your-folder-id-5"
            },
            {
                name: "Instructor SENA",
                downloadUrl: "/materials/software-diseno.pdf",
                driveUrl: "https://drive.google.com/drive/folders/1fBn7ZjrF1OcqsJ4WDWyiBPbytNcEa2Bv"
            }
        ]
    },
    {
        title: "Preprensa Digital para Medios Impresos - Grado 11-2",
        items: [
            {
                name: "Docente HAG",
                downloadUrl: "/materials/control-calidad.pdf",
                driveUrl: "https://drive.google.com/drive/folders/1IYscZPyYwfkNuxJcTOV0lyHiJjozBSiz?usp=sharing"
            },
            {
                name: "Instructor SENA",
                downloadUrl: "#",
                driveUrl: "https://drive.google.com/drive/folders/1wIFfqyUn6VQtzeU9MiW-a6IduVGQYr1A?usp=sharing"
            },
            {
                name: "Periódico HAGONOTICIAS",
                downloadUrl: "/materials/gestion-color.pdf",
                driveUrl: "https://drive.google.com/drive/folders/1eBzQH-HwUCvByhubGgYyCrJu-ASgS3HR?usp=sharing"
            }
        ]
    }
];

function displayMaterials() {
    const materialsSection = document.getElementById('materials');
    
    materialsData.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'content-card';
        
        const materialsList = category.items
            .map(item => `
                <div class="material-item">
                    <h4>${item.name}</h4>
                    <div class="material-buttons">
                        <a href="${item.downloadUrl}" class="material-button download" download>
                            <i class="icon">📥</i> Descargar
                        </a>
                        <a href="${item.driveUrl}" class="material-button drive" target="_blank">
                            <i class="icon">📁</i> Drive
                        </a>
                    </div>
                </div>
            `).join('');

        categoryElement.innerHTML = `
            <h3>${category.title}</h3>
            <div class="materials-list">
                ${materialsList}
            </div>
        `;
        
        materialsSection.appendChild(categoryElement);
    });
}

document.addEventListener('DOMContentLoaded', displayMaterials);