const tools = [
    // === NUEVAS HERRAMIENTAS CON ICONOS ===
    {symbol: "VD", name: "Video Downloader", category: "descargas", description: "Extensión Chrome para descargar videos de múltiples sitios", url: "https://chromewebstore.google.com/detail/video-downloader-professi/elicpjhcidhpjomhibiffojpinpmmpil?hl=es-419", icon: "fas fa-download"},
    {symbol: "FS", name: "FiftySounds", category: "musica", description: "Música libre de derechos para proyectos audiovisuales", url: "https://www.fiftysounds.com/es/", icon: "fas fa-music"},
    {symbol: "LW", name: "Liveweave", category: "web", description: "Editor online HTML/CSS/JS en tiempo real con colaboración", url: "https://liveweave.com/#", icon: "fas fa-code"},
    {symbol: "30", name: "30 Web Projects", category: "codigo", description: "30 proyectos prácticos HTML/CSS/JS para aprender", url: "https://gitcode.com/gh_mirrors/30/30-Web-Projects-with-HTML-CSS-and-JavaScript", icon: "fas fa-project-diagram"},
    {symbol: "LM", name: "Logomaster AI", category: "diseno", description: "Crea logos profesionales con AI en minutos", url: "https://logomaster.ai/es/", icon: "fas fa-crown"},
    {symbol: "FP", name: "FreePlantillas", category: "recursos", description: "Plantillas CSS gratuitas para sitios web responsivos", url: "https://www.freeplantillas.com/plantillas-css-gratis.html", icon: "fas fa-palette"},
    {symbol: "FF", name: "Adobe Firefly", category: "diseno", description: "Genera y edita imágenes, videos y texto con AI creativa", url: "https://firefly.adobe.com/", icon: "fas fa-magic"},
    {symbol: "RF", name: "Renderforest", category: "video", description: "Crea intros y videos animados fácilmente", url: "https://www.renderforest.com/es/intro-videos", icon: "fas fa-play-circle"},
    {symbol: "CC", name: "CapCut", category: "video", description: "Editor de video online con efectos AI y transiciones", url: "https://www.capcut.com/my-edit", icon: "fas fa-video"},
    {symbol: "SQ", name: "SQL Easy", category: "bases", description: "Aprende SQL de forma interactiva con ejercicios prácticos", url: "https://www.sql-easy.com/es/tutorial/", icon: "fas fa-database"},
    {symbol: "V0", name: "V0.dev", category: "web", description: "Genera interfaces UI con React y Tailwind CSS mediante AI", url: "https://v0.dev/", icon: "fas fa-robot"},
    {symbol: "AF", name: "AIFINDY", category: "recursos", description: "Directorio actualizado de herramientas AI organizadas por categorías", url: "https://aifindy.com/", icon: "fas fa-search"},
    {symbol: "FB", name: "Flexbox Labs", category: "frameworks", description: "Practica CSS Flexbox con simulador interactivo", url: "https://flexboxlabs.netlify.app/", icon: "fas fa-th"},
    {symbol: "BT", name: "Bootstrap", category: "frameworks", description: "Framework CSS para diseño web responsivo y moderno", url: "https://getbootstrap.com/", icon: "fab fa-bootstrap"},
    {symbol: "PU", name: "PlantUML", category: "documentacion", description: "Crea diagramas UML a partir de texto simple", url: "https://plantuml.com/en-dark/", icon: "fas fa-project-diagram"},
    {symbol: "OV", name: "OverAPI", category: "documentacion", description: "Hojas de referencia rápida para desarrolladores", url: "https://overapi.com/", icon: "fas fa-book"},
    {symbol: "FK", name: "Freepik", category: "recursos", description: "Recursos gráficos gratuitos: vectores, fotos, iconos y más", url: "https://www.freepik.es/", icon: "fas fa-images"},
    {symbol: "GH", name: "GitHub", category: "git", description: "Plataforma de desarrollo colaborativo con control de versiones", url: "https://github.com", icon: "fab fa-github"},
    {symbol: "MD", name: "MDN Web Docs", category: "documentacion", description: "Documentación oficial de tecnologías web", url: "https://developer.mozilla.org", icon: "fab fa-firefox-browser"},

    // === ESCRITURA ===
    {symbol: "CG", name: "ChatGPT", category: "escritura", description: "Asistente universal para escritura y tareas", url: "https://chat.openai.com", icon: "fas fa-robot"},
    {symbol: "CL", name: "Claude", category: "escritura", description: "IA conversacional avanzada", url: "https://claude.ai", icon: "fas fa-comments"},
    {symbol: "GB", name: "Google Gemini", category: "escritura", description: "Búsqueda y escritura con datos en tiempo real", url: "https://gemini.google.com", icon: "fas fa-brain"},
    {symbol: "QB", name: "QuillBot", category: "escritura", description: "Parafraseador y corrector gramatical", url: "https://quillbot.com", icon: "fas fa-edit"},
    {symbol: "GR", name: "Grammarly", category: "escritura", description: "Corrector de gramática y estilo", url: "https://grammarly.com", icon: "fas fa-spell-check"},
    {symbol: "NT", name: "Notion AI", category: "escritura", description: "Asistente de escritura integrado", url: "https://notion.so", icon: "fas fa-sticky-note"},

    // === DISEÑO GRÁFICO ===
    {symbol: "CA", name: "Canva", category: "diseno", description: "Diseño gráfico con herramientas AI", url: "https://canva.com", icon: "fas fa-paint-brush"},
    {symbol: "AE", name: "Adobe Express", category: "diseno", description: "Diseño con Adobe Firefly AI", url: "https://express.adobe.com", icon: "fas fa-adobe"},
    {symbol: "ID", name: "Ideogram", category: "diseno", description: "Generador de imágenes desde texto", url: "https://ideogram.ai", icon: "fas fa-image"},
    {symbol: "FI", name: "Figma", category: "diseno", description: "Diseño de interfaces con AI", url: "https://figma.com", icon: "fab fa-figma"},
    {symbol: "PH", name: "Photopea", category: "diseno", description: "Photoshop online gratuito con AI", url: "https://photopea.com", icon: "fas fa-camera-retro"},

    // === PROGRAMACIÓN ===
    {symbol: "GC", name: "GitHub Copilot", category: "programacion", description: "Asistente de código en tiempo real", url: "https://github.com/features/copilot", icon: "fas fa-magic"},
    {symbol: "RP", name: "Replit", category: "programacion", description: "IDE con Ghostwriter AI", url: "https://replit.com", icon: "fas fa-terminal"},
    {symbol: "CD", name: "Codeium", category: "programacion", description: "Completado de código gratuito", url: "https://codeium.com", icon: "fas fa-code-branch"},
    {symbol: "CW", name: "CodeWhisperer", category: "programacion", description: "Generador de código de AWS", url: "https://aws.amazon.com/codewhisperer", icon: "fab fa-aws"},

    // === DESARROLLO WEB ===
    {symbol: "HO", name: "Hocoos", category: "web", description: "Constructor web con AI", url: "https://hocoos.com", icon: "fas fa-building"},
    {symbol: "ZY", name: "Zyro", category: "web", description: "Creador de sitios web con AI", url: "https://zyro.com", icon: "fas fa-laptop-code"},
    {symbol: "WF", name: "Webflow", category: "web", description: "Diseño web visual with AI", url: "https://webflow.com", icon: "fas fa-sitemap"},

    // === VIDEO ===
    {symbol: "CV", name: "Canva Video", category: "video", description: "Edición de video con AI", url: "https://canva.com/video", icon: "fas fa-video"},
    {symbol: "VE", name: "Veed.io", category: "video", description: "Editor de video online con AI", url: "https://veed.io", icon: "fas fa-film"},
    {symbol: "DE", name: "Descript", category: "video", description: "Edición de video por texto", url: "https://descript.com", icon: "fas fa-microphone-alt"},

    // === VOZ ===
    {symbol: "EL", name: "ElevenLabs", category: "voz", description: "Síntesis de voz ultra realista", url: "https://elevenlabs.io", icon: "fas fa-volume-up"},
    {symbol: "MU", name: "Murf AI", category: "voz", description: "Generador de voz profesional", url: "https://murf.ai", icon: "fas fa-headphones"},
    {symbol: "SP", name: "Speechify", category: "voz", description: "Texto a voz con voces naturales", url: "https://speechify.com", icon: "fas fa-book-reader"},

    // === APRENDIZAJE ===
    {symbol: "KH", name: "Khan Academy", category: "aprendizaje", description: "Plataforma educativa con AI tutor", url: "https://khanacademy.org", icon: "fas fa-graduation-cap"},
    {symbol: "DU", name: "Duolingo", category: "aprendizaje", description: "Aprendizaje de idiomas con AI", url: "https://duolingo.com", icon: "fas fa-language"},
    {symbol: "SO", name: "Socratic", category: "aprendizaje", description: "Ayuda con tareas por Google", url: "https://socratic.org", icon: "fas fa-question-circle"},
    {symbol: "BR", name: "Brilliant", category: "aprendizaje", description: "Matemáticas y ciencias interactivas", url: "https://brilliant.org", icon: "fas fa-calculator"},

    // === TRADUCCIÓN ===
    {symbol: "GT", name: "Google Translate", category: "traduccion", description: "Traductor universal gratuito", url: "https://translate.google.com", icon: "fas fa-globe-americas"},
    {symbol: "DL", name: "DeepL", category: "traduccion", description: "Traducción de alta calidad", url: "https://deepl.com", icon: "fas fa-language"},
    {symbol: "RS", name: "Reverso", category: "traduccion", description: "Traducción con contexto y ejemplos", url: "https://reverso.net", icon: "fas fa-exchange-alt"},

    // === 3D Y AR ===
    {symbol: "BL", name: "Blender", category: "3d", description: "Modelado 3D con AI y add-ons", url: "https://blender.org", icon: "fas fa-cube"},
    {symbol: "SL", name: "Spline", category: "3d", description: "Diseño 3D web con AI", url: "https://spline.design", icon: "fas fa-shapes"},
    {symbol: "VT", name: "Vectary", category: "3d", description: "Diseño 3D y AR sin código", url: "https://vectary.com", icon: "fas fa-vr-cardboard"},

    // === PRODUCTIVIDAD ===
    {symbol: "NT", name: "Notion", category: "productividad", description: "Workspace todo-en-uno con AI", url: "https://notion.so", icon: "fas fa-sticky-note"},
    {symbol: "OB", name: "Obsidian", category: "productividad", description: "Gestor de notas con plugins AI", url: "https://obsidian.md", icon: "fas fa-brain"},
    {symbol: "TK", name: "Taskade", category: "productividad", description: "Gestión de equipos con AI", url: "https://taskade.com", icon: "fas fa-tasks"}
];

let currentTools = [...tools];

function createPeriodicTable() {
    const table = document.getElementById('periodicTable');
    table.innerHTML = '';
    
    currentTools.forEach((tool, index) => {
        const element = document.createElement('div');
        element.className = `element ${tool.category}`;
        element.innerHTML = `
            <div class="element-icon"><i class="${tool.icon}"></i></div>
            <div class="element-name">${tool.name}</div>
            <div class="element-symbol">${tool.symbol}</div>
        `;
        element.onclick = () => showModal(tool);
        table.appendChild(element);
    });

    // Actualizar contador
    document.getElementById('counter').textContent = `${currentTools.length} herramientas disponibles`;
}

function showModal(tool) {
    document.getElementById('modalTitle').textContent = tool.name;
    document.getElementById('modalDescription').textContent = tool.description;
    document.getElementById('modalCategory').textContent = tool.category.charAt(0).toUpperCase() + tool.category.slice(1);
    document.getElementById('modalLink').href = tool.url;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function filterCategory(category) {
    // Remover clase active de todas las categorías
    document.querySelectorAll('.category').forEach(cat => cat.classList.remove('active'));
    
    if (category === 'all') {
        currentTools = [...tools];
        document.querySelector('[onclick="filterCategory(\'all\')"]').classList.add('active');
    } else {
        currentTools = tools.filter(tool => tool.category === category);
        document.querySelector(`[onclick="filterCategory('${category}')"]`).classList.add('active');
    }
    createPeriodicTable();
}

function searchTools(query) {
    if (query.trim() === '') {
        currentTools = [...tools];
    } else {
        currentTools = tools.filter(tool => 
            tool.name.toLowerCase().includes(query.toLowerCase()) ||
            tool.description.toLowerCase().includes(query.toLowerCase())
        );
    }
    createPeriodicTable();
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    createPeriodicTable();
    document.querySelector('[onclick="filterCategory(\'all\')"]').classList.add('active');
});