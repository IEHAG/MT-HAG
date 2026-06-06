const materialsData = [
    {
        title: "Programación de Software — Grado 10-1",
        program: "prog",
        items: [
            { name: "Víctor Cañola", role: "Docente HAG", downloadUrl: "/materials/guia-algoritmos.pdf", driveUrl: "https://goo.su/08zYK" },
            { name: "John Riaño", role: "Instructor SENA", downloadUrl: "/materials/manual-javascript.pdf", driveUrl: "https://goo.su/08zYK" },
        ],
    },
    {
        title: "Programación de Software — Grado 11-1",
        program: "prog",
        items: [
            { name: "Víctor Cañola", role: "Docente HAG", downloadUrl: "/materials/desarrollo-web.pdf", driveUrl: "https://drive.google.com/drive/folders/17VH6V6G1LufK0cq-bRDHRGSEkZlJ8Uu3Meyfgf02WR3iyii3XdPC1l4NvM78SMrV-U_UayP2?usp=sharing" },
            { name: "Carlos Andrés", role: "Instructor SENA", downloadUrl: "/materials/bases-datos.pdf", driveUrl: "4" },
        ],
    },
    {
        title: "Preprensa Digital — Grado 10-2",
        program: "prep",
        items: [
            { name: "Víctor Cañola", role: "Docente HAG", downloadUrl: "/materials/fundamentos-diseno.pdf", driveUrl: "https://drive.google.com/drive/folders/1KziQ3hLBSzz7UWKaYsZ_ioJ4xevtxtTG?usp=sharing" },
            { name: "Daniel Yepes", role: "Instructor SENA", downloadUrl: "/materials/software-diseno.pdf", driveUrl: "https://drive.google.com/drive/folders/1fBn7ZjrF1OcqsJ4WDWyiBPbytNcEa2Bv" },
        ],
    },
    {
        title: "Preprensa Digital — Grado 11-2",
        program: "prep",
        items: [
            { name: "Víctor Cañola", role: "Docente HAG", downloadUrl: "/materials/control-calidad.pdf", driveUrl: "https://drive.google.com/drive/folders/1IYscZPyYwfkNuxJcTOV0lyHiJjozBSiz?usp=sharing" },
            { name: "Ana Pérez", role: "Instructor SENA", downloadUrl: "#", driveUrl: "https://drive.google.com/drive/folders/1wIFfqyUn6VQtzeU9MiW-a6IduVGQYr1A?usp=sharing" },
            { name: "HAGONOTICIAS", role: "Periódico", downloadUrl: "/materials/gestion-color.pdf", driveUrl: "https://drive.google.com/drive/folders/1eBzQH-HwUCvByhubGgYyCrJu-ASgS3HR?usp=sharing" },
        ],
    },
]

const programIcons = { prog: '💻', prep: '🎨' }
const roleColors = {
    'Docente HAG': { bg: '#003366', text: '#fff' },
    'Instructor SENA': { bg: '#00AA44', text: '#fff' },
    'Periódico': { bg: '#DC143C', text: '#fff' },
}

function displayMaterials() {
    const grid = document.getElementById('materials')
    if (!grid) return

    grid.innerHTML = materialsData.map(cat => {
        const icon = programIcons[cat.program] || '📚'
        const programLabel = cat.program === 'prog' ? 'Programación' : 'Preprensa'

        const itemsHtml = cat.items.map(item => {
            const colors = roleColors[item.role] || { bg: '#64748b', text: '#fff' }
            const initial = item.name.charAt(0)

            return `
                <div class="material-teacher">
                    <div class="teacher-info">
                        <div class="teacher-avatar" style="background:${colors.bg};color:${colors.text}">${initial}</div>
                        <div>
                            <div class="teacher-name">${item.name}</div>
                            <div class="teacher-role">${item.role}</div>
                        </div>
                    </div>
                    <div class="teacher-actions">
                        <a href="${item.driveUrl}" target="_blank" class="btn-drive"><i class="fas fa-folder-open"></i> Drive</a>
                        <a href="${item.downloadUrl}" class="btn-download" download><i class="fas fa-download"></i> PDF</a>
                    </div>
                </div>
            `
        }).join('')

        return `
            <div class="material-card">
                <div class="material-card-header">
                    <div class="card-icon ${cat.program}">${icon}</div>
                    <h3>${cat.title}</h3>
                </div>
                <div class="material-list">${itemsHtml}</div>
            </div>
        `
    }).join('')
}

document.addEventListener('DOMContentLoaded', displayMaterials)
