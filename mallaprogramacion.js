// Datos de la malla curricular
const curriculumData = [
    // GRADO 10 - DOCENTE PAR
    // Primer Período
    {
        week: 1,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Estructura de un equipo de computo",
        subtopics: "*Partes del computador (Dispositivos de entrada y salida)\n*Partes del computador (Dispositivos de almacenamiento)\n*Partes del computador (Dispositivos de computación)\n*Partes del computador (Dispositivos de comunicación)",
        competence: "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "Conceptos básicos"
    },
    {
        week: 2,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Estructura de un equipo de computo",
        subtopics: "*Tipos de ordenadores (Super ordenador)\n*Tipos de ordenadores (Mainframe)\n*Tipos de ordenadores (Servidor)\n*Tipos de ordenadores (Ordenador personal)",
        competence: "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "Estructura de los computadores y Fundamentos de programación"
    },
    {
        week: 3,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Sistemas operativos",
        subtopics: "*Diferencia entre hardware y software\n*Sistemas operativos: Windows, Linux, Android",
        competence: "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "Estructura de los computadores y Fundamentos de programación"
    },
    {
        week: 4,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Sistemas operativos",
        subtopics: "Gestionar (Tipos de ficheros o carpetas: Creación de carpetas, comprimir y descomprimir archivos)",
        competence: "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "Estructura de los computadores y Fundamentos de programación"
    },
    {
        week: 5,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Sistemas operativos",
        subtopics: "Gestionar (Funciones básicas de editor de texto)",
        competence: "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "Estructura de los computadores y Fundamentos de programación"
    },
    {
        week: 6,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Sistemas operativos",
        subtopics: "Gestionar (Funciones básicas de hojas de cálculo)",
        competence: "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "Estructura de los computadores y Fundamentos de programación"
    },
    {
        week: 7,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Sistemas operativos",
        subtopics: "Gestionar correo electrónico y datos de la nube (Drive)",
        competence: "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "Estructura de los computadores y Fundamentos de programación"
    },
    {
        week: 8,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Lenguaje máquina",
        subtopics: "*Lenguajes de bajo nivel y alto nivel\n*Método de comunicación con las máquinas / lenguaje máquina",
        competence: "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "Estructura de los computadores y Fundamentos de programación"
    },
    {
        week: 9,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Lenguaje máquina",
        subtopics: "Código Binario",
        competence: "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "Estructura de los computadores y Fundamentos de programación"
    },
    {
        week: 10,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Análisis y Diagramación UML",
        subtopics: "*Definición de requisitos del sistema\n*Métodos de recolección de requerimientos\n*Características de los requerimientos",
        competence: "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 2. INTERPRETAR EL INFORME DE REQUISITOS DE LA SOLUCIÓN CONFORME A LA IDENTIFICACIÓN DE LAS NECESIDADES DEL NEGOCIO."
    },
    {
        week: 11,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Análisis y Diagramación UML",
        subtopics: "Requerimientos Funcionales",
        competence: "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 2. INTERPRETAR EL INFORME DE REQUISITOS DE LA SOLUCIÓN CONFORME A LA IDENTIFICACIÓN DE LAS NECESIDADES DEL NEGOCIO."
    },
    {
        week: 12,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Análisis y Diagramación UML",
        subtopics: "Requerimientos Funcionales",
        competence: "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 2. INTERPRETAR EL INFORME DE REQUISITOS DE LA SOLUCIÓN CONFORME A LA IDENTIFICACIÓN DE LAS NECESIDADES DEL NEGOCIO."
    },
    {
        week: 13,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Análisis y Diagramación UML",
        subtopics: "Requerimientos No funcionales",
        competence: "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 2. INTERPRETAR EL INFORME DE REQUISITOS DE LA SOLUCIÓN CONFORME A LA IDENTIFICACIÓN DE LAS NECESIDADES DEL NEGOCIO."
    },
    {
        week: 14,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Análisis y Diagramación UML",
        subtopics: "Proceso para definición de requisitos del sistema (INFORME)",
        competence: "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 2. INTERPRETAR EL INFORME DE REQUISITOS DE LA SOLUCIÓN CONFORME A LA IDENTIFICACIÓN DE LAS NECESIDADES DEL NEGOCIO."
    },
    // Segundo Período
    {
        week: 15,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Diagramas UML",
        subtopics: "*Definición\n*Diagramas de casos de uso",
        competence: "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 2. INTERPRETAR EL INFORME DE REQUISITOS DE LA SOLUCIÓN CONFORME A LA IDENTIFICACIÓN DE LAS NECESIDADES DEL NEGOCIO."
    },
    {
        week: 16,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Diagramas UML",
        subtopics: "*Diagrama de secuencia\n*Diagrama de flujo Nivel 0\n*Diagrama de flujo nivel 1\n*Generalidades Metodología SCRUM",
        competence: "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 2. INTERPRETAR EL INFORME DE REQUISITOS DE LA SOLUCIÓN CONFORME A LA IDENTIFICACIÓN DE LAS NECESIDADES DEL NEGOCIO."
    },
    {
        week: 17,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Metodologías de Desarrollo",
        subtopics: "*Diseño HTML 5\n*Definición\n*Estructura Html\n*Editores de texto (Visual Studio, Sublime Text, Brackets)",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 18,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "HTML",
        subtopics: "*Mi primera página (estructura Básica html)\n*Formato de letras (Colores, Alinear, Tipo, Tamaño)\n*Párrafos\n*Saltos de Línea",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 19,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Estructura Html",
        subtopics: "*Creación de Tablas\n*Enlaces\n*Insertar imágenes\n*Insertar videos\n*Enlazar una imagen",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 20,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Formularios",
        subtopics: "*Creación de formularios\n*Creación de botones",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 21,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Formularios",
        subtopics: "*Creación de inputs (tipos de inputs)\n*Envíos desde formularios",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 22,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Formularios",
        subtopics: "Atributos HTML 5",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 23,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "CSS",
        subtopics: "Definición",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 24,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Estructura CSS",
        subtopics: "*Mi primer Estilo (HTML y CSS - atributos html)\n*Estructura Css",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 25,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Estructura CSS",
        subtopics: "*Creación de Reglas\n*Trabajando con Id",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 26,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Estructura CSS",
        subtopics: "*Trabajando con Clases\n*Relación Con html y sus etiquetas",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 27,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Estructura CSS",
        subtopics: "*Incrustación de código css en html\n*Enlazando Css con HTML\n*Comentarios en css",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 28,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Trabajando con CSS",
        subtopics: "*Colores\n*Creación de reglas propias ID\n*Creación de Reglas comunes CLASS",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    // GRADO 10 - DOCENTE PAR
    // Tercer Período
    {
        "week": 29,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Trabajando con CSS",
        "subtopics": "*Medidas en css\n*Bordes y tablas con css y html\n*Creación de menú",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 30,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Trabajando con CSS",
        "subtopics": "Trabajando con imágenes",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 31,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Trabajando con CSS",
        "subtopics": "Cursor",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 32,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Trabajando con CSS",
        "subtopics": "Posicionamiento Absoluto y relativo",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 33,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Creación de página WEB",
        "subtopics": "Introducción",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 34,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Creación de página WEB",
        "subtopics": "Framework Bootstrap (Container, Row, Columnas, herramientas para uso)",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 35,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Creación de página WEB",
        "subtopics": "Framework Bootstrap (Container, Row, Columnas, herramientas para uso)",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 36,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Creación de página WEB",
        "subtopics": "Creación de página Web",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 37,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Creación de página WEB",
        "subtopics": "Examen final",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 38,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Creación de página WEB",
        "subtopics": "Introducción JavaScript",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 39,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Creación de página WEB",
        "subtopics": "Estructura JavaScript",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 40,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Empieza Proyecto Productivo",
        "subtopics": "Asesoría Instructor y Docente",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    // GRADO 11 - Docente Par 
    // Primer Período 
    {
        "week": 1,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Diseño- HTML 5 Refuerzo",
        "subtopics": "*Definición\n*Estructura Html\n*Editores de texto (Visual Studio, Sublime Text, Brackets)\n*Mi primera página (estructura Básica html)\n*Formato de letras (Colores, Alinear, Tipo, Tamaño)\n*Párrafos\n*Saltos de Línea",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE"
    },
    {
        "week": 2,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Diseño- HTML 5 Refuerzo",
        "subtopics": "*Creación de Tablas\n*Enlaces\n*Insertar imágenes\n*Insertar videos\n*Enlazar una imagen",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE"
    },
    {
        "week": 3,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Formularios",
        "subtopics": "*Creación de formularios\n*Creación de botones\n*Creación de inputs (tipos de inputs)",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE"
    },
    {
        "week": 4,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Formularios",
        "subtopics": "*Envíos desde formularios\n*Atributos HTML 5",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE"
    },
    {
        "week": 5,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "CSS",
        "subtopics": "*Definición\n*Estructura CSS\n*Mi primer Estilo (HTML y CSS - atributos html)\n*Estructura Css\n*Creación de Reglas",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE"
    },
    {
        "week": 6,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "CSS",
        "subtopics": "*Trabajando con Id\n*Trabajando con Clases\n*Relación Con html y sus etiquetas\n*Incrustación de código css en html\n*Enlazando Css con HTML\n*Comentarios en css",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE"
    },
    {
        "week": 7,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Trabajando con CSS",
        "subtopics": "*Colores\n*Creación de reglas propias ID\n*Creación de Reglas comunes CLASS\n*Medidas en css\n*Bordes y tablas con css y html",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE"
    },
    {
        "week": 8,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Trabajando con CSS",
        "subtopics": "*Creación de menú\n*Trabajando con imágenes\n*Cursor\n*Posicionamiento Absoluto y relativo",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE"
    },
    {
        "week": 9,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Creación de página WEB",
        "subtopics": "Introducción",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE"
    },
    {
        "week": 10,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Creación de página WEB",
        "subtopics": "Framework Bootstrap (Container, Row, Columnas, herramientas para uso)",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE"
    },
    {
        "week": 11,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Creación de página WEB",
        "subtopics": "Creación de página Web",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE"
    },
    {
        "week": 12,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Creación de página WEB",
        "subtopics": "Examen final",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE"
    },
    {
        "week": 13,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Creación de página WEB",
        "subtopics": "Introducción JavaScript",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE"
    },
    {
        "week": 14,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Creación de página WEB",
        "subtopics": "Estructura JavaScript",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE"
    },
    // GRADO 11 - Docente Par 
    // Segundo Período 
    {
        "week": 15,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Calidad Desarrollo de software",
        "subtopics": "Normas",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. INTERPRETAR EL INFORME DE REQUISITOS DE LA SOLUCIÓN CONFORME A LA IDENTIFICACIÓN DE LAS NECESIDADES DEL NEGOCIO"
    },
    {
        "week": 16,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Calidad Desarrollo de software",
        "subtopics": "Importancia de las necesidades del cliente (Requerimientos)",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. INTERPRETAR EL INFORME DE REQUISITOS DE LA SOLUCIÓN CONFORME A LA IDENTIFICACIÓN DE LAS NECESIDADES DEL NEGOCIO"
    },
    {
        "week": 17,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Calidad Desarrollo de software",
        "subtopics": "Importancia de la gestión de TI",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. INTERPRETAR EL INFORME DE REQUISITOS DE LA SOLUCIÓN CONFORME A LA IDENTIFICACIÓN DE LAS NECESIDADES DEL NEGOCIO"
    },
    {
        "week": 18,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Calidad Desarrollo de software",
        "subtopics": "Testeo o pruebas de software",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. INTERPRETAR EL INFORME DE REQUISITOS DE LA SOLUCIÓN CONFORME A LA IDENTIFICACIÓN DE LAS NECESIDADES DEL NEGOCIO"
    },
    {
        "week": 19,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Calidad Desarrollo de software",
        "subtopics": "Manual de usuario",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. INTERPRETAR EL INFORME DE REQUISITOS DE LA SOLUCIÓN CONFORME A LA IDENTIFICACIÓN DE LAS NECESIDADES DEL NEGOCIO"
    },
    {
        "week": 20,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Calidad Desarrollo de software",
        "subtopics": "Manual Técnico",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. INTERPRETAR EL INFORME DE REQUISITOS DE LA SOLUCIÓN CONFORME A LA IDENTIFICACIÓN DE LAS NECESIDADES DEL NEGOCIO"
    },
    {
        "week": 21,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Metodologías de desarrollo de software",
        "subtopics": "Definición",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. INTERPRETAR EL INFORME DE REQUISITOS DE LA SOLUCIÓN CONFORME A LA IDENTIFICACIÓN DE LAS NECESIDADES DEL NEGOCIO"
    },
    {
        "week": 22,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Metodologías Tradicionales",
        "subtopics": "Definición",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 2. INTERPRETAR EL INFORME DE REQUISITOS DE LA SOLUCIÓN CONFORME A LA IDENTIFICACIÓN DE LAS NECESIDADES DEL NEGOCIO"
    },
    {
        "week": 23,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Metodologías Tradicionales",
        "subtopics": "Metodología Waterfall",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*CONOCIMIENTOS DE PROCESO:\nSELECCIONAR EL ESTÁNDAR DE ESPECIFICACIÓN DE REQUISITOS.\nUSAR TÉCNICAS DE ANÁLISIS, PRIORIZACIÓN Y DEFINICIÓN DE REQUISITOS.\nELABORAR EL INFORME DE LOS REQUERIMIENTOS ASIGNADOS."
    },
    {
        "week": 24,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Metodologías Tradicionales",
        "subtopics": "Metodología Prototipado",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*CONOCIMIENTOS DE PROCESO:\nSELECCIONAR EL ESTÁNDAR DE ESPECIFICACIÓN DE REQUISITOS.\nUSAR TÉCNICAS DE ANÁLISIS, PRIORIZACIÓN Y DEFINICIÓN DE REQUISITOS.\nELABORAR EL INFORME DE LOS REQUERIMIENTOS ASIGNADOS."
    },
    {
        "week": 25,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Metodologías Tradicionales",
        "subtopics": "Metodología Espiral",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*CONOCIMIENTOS DE PROCESO:\nSELECCIONAR EL ESTÁNDAR DE ESPECIFICACIÓN DE REQUISITOS.\nUSAR TÉCNICAS DE ANÁLISIS, PRIORIZACIÓN Y DEFINICIÓN DE REQUISITOS.\nELABORAR EL INFORME DE LOS REQUERIMIENTOS ASIGNADOS."
    },
    {
        "week": 26,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Metodologías Tradicionales",
        "subtopics": "Metodología incremental",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*CONOCIMIENTOS DE PROCESO:\nSELECCIONAR EL ESTÁNDAR DE ESPECIFICACIÓN DE REQUISITOS.\nUSAR TÉCNICAS DE ANÁLISIS, PRIORIZACIÓN Y DEFINICIÓN DE REQUISITOS.\nELABORAR EL INFORME DE LOS REQUERIMIENTOS ASIGNADOS."
    },
    {
        "week": 27,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Metodologías Tradicionales",
        "subtopics": "Metodología RAD - Diseño rápido de aplicaciones",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*CONOCIMIENTOS DE PROCESO:\nSELECCIONAR EL ESTÁNDAR DE ESPECIFICACIÓN DE REQUISITOS.\nUSAR TÉCNICAS DE ANÁLISIS, PRIORIZACIÓN Y DEFINICIÓN DE REQUISITOS.\nELABORAR EL INFORME DE LOS REQUERIMIENTOS ASIGNADOS."
    },
    {
        "week": 28,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Metodologías Ágiles",
        "subtopics": "Definición",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*CONOCIMIENTOS DE PROCESO:\nSELECCIONAR EL ESTÁNDAR DE ESPECIFICACIÓN DE REQUISITOS.\nUSAR TÉCNICAS DE ANÁLISIS, PRIORIZACIÓN Y DEFINICIÓN DE REQUISITOS.\nELABORAR EL INFORME DE LOS REQUERIMIENTOS ASIGNADOS."
    },
    // GRADO 11 - Docente Par 
    // Tercer Período 
    {
        "week": 29,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Metodologías Ágiles",
        "subtopics": "Kaban",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*CONOCIMIENTOS DE PROCESO:\nSELECCIONAR EL ESTÁNDAR DE ESPECIFICACIÓN DE REQUISITOS.\nUSAR TÉCNICAS DE ANÁLISIS, PRIORIZACIÓN Y DEFINICIÓN DE REQUISITOS.\nELABORAR EL INFORME DE LOS REQUERIMIENTOS ASIGNADOS."
    },
    {
        "week": 30,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Metodologías Ágiles",
        "subtopics": "SCRUM",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*CONOCIMIENTOS DE PROCESO:\nSELECCIONAR EL ESTÁNDAR DE ESPECIFICACIÓN DE REQUISITOS.\nUSAR TÉCNICAS DE ANÁLISIS, PRIORIZACIÓN Y DEFINICIÓN DE REQUISITOS.\nELABORAR EL INFORME DE LOS REQUERIMIENTOS ASIGNADOS."
    },
    {
        "week": 31,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Metodologías Ágiles",
        "subtopics": "*LEAN\n*XP - Programación EXTREMA",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*CONOCIMIENTOS DE PROCESO:\nSELECCIONAR EL ESTÁNDAR DE ESPECIFICACIÓN DE REQUISITOS.\nUSAR TÉCNICAS DE ANÁLISIS, PRIORIZACIÓN Y DEFINICIÓN DE REQUISITOS.\nELABORAR EL INFORME DE LOS REQUERIMIENTOS ASIGNADOS."
    },
    {
        "week": 32,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Proyecto de formación (Entregables)",
        "subtopics": "1. Descripción del proyecto (Diapositivas, PowerPoint, Video) (Planteamiento del problema.\n2. Justificación.\n3. Objetivo General.\n4. Objetivos específicos, Impactos (Ambiental, Social, económico, Tecnológico).\n5. Usuarios directos e indirectos.\n6. Valor del proyecto.\n7. Metodología.",
        "competence": "ETAPA PRÁCTICA",
        "learningResult": "*APLICAR EN LA RESOLUCIÓN DE PROBLEMAS REALES DEL SECTOR PRODUCTIVO, LOS CONOCIMIENTOS, HABILIDADES Y DESTREZAS PERTINENTES A LAS COMPETENCIAS DEL PROGRAMA DE FORMACIÓN ASUMIENDO ESTRATEGIAS Y METODOLOGÍAS DE AUTOGESTIÓN"
    },
    {
        "week": 33,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Proyecto de formación (Entregables)",
        "subtopics": "2. Definición de requisitos para el sistema (funcionales, no funcionales) Se puede utilizar un formato para definición de requerimientos.",
        "competence": "ETAPA PRÁCTICA",
        "learningResult": "*APLICAR EN LA RESOLUCIÓN DE PROBLEMAS REALES DEL SECTOR PRODUCTIVO, LOS CONOCIMIENTOS, HABILIDADES Y DESTREZAS PERTINENTES A LAS COMPETENCIAS DEL PROGRAMA DE FORMACIÓN ASUMIENDO ESTRATEGIAS Y METODOLOGÍAS DE AUTOGESTIÓN"
    },
    {
        "week": 40,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Proyecto de formación (Entregables)",
        "subtopics": "10. Manual del Usuario",
        "competence": "ETAPA PRÁCTICA",
        "learningResult": "*APLICAR EN LA RESOLUCIÓN DE PROBLEMAS REALES DEL SECTOR PRODUCTIVO, LOS CONOCIMIENTOS, HABILIDADES Y DESTREZAS PERTINENTES A LAS COMPETENCIAS DEL PROGRAMA DE FORMACIÓN ASUMIENDO ESTRATEGIAS Y METODOLOGÍAS DE AUTOGESTIÓN"
    },
    // ... otros datos del docente SENA ....................................... ...
    // GRADO 10 - Instructor Sena
    // Primer Período
    {
        week: 1,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Fundamentos de programación",
        subtopics: "*Instalación de herramientas (Pseint, Flujo)\n*Definición de lógica\n*Instrucción y programación (Conocer qué es la programación)\n*Tipos de algoritmo (vida cotidiana y computacional)",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 2,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Fundamentos de programación",
        subtopics: "*Definición de algoritmos\n*Flujogramas\n*Simbología Flujograma",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 3,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Seudocódigo",
        subtopics: "*Definición\n*Código Fuente y código ejecutable\n*Lenguajes Compilados e interpretados",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 4,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Seudocódigo",
        subtopics: "PseInt (Definición, Palabras reservadas, comentarios)",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 5,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Seudocódigo",
        subtopics: "Variables y datos",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 6,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Seudocódigo",
        subtopics: "Instrucciones Básicas (operadores)",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 7,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Cálculos Comunes",
        subtopics: "Operadores Aritméticos",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 8,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Cálculos Comunes",
        subtopics: "Operación de promedio (acumuladores y contadores)",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 9,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Cálculos Comunes",
        subtopics: "Operaciones de Adiciones y descuentos",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 10,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Cálculos Comunes",
        subtopics: "Operación de Módulos (mod)",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 11,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Instrucciones de control algorítmicas",
        subtopics: "Algoritmos",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 12,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Instrucciones de control algorítmicas",
        subtopics: "Instrucción estructural (Pseint)",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 13,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Instrucciones de control algorítmicas",
        subtopics: "Instrucción estructural (Php)",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        week: 14,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Instrucciones de control algorítmicas",
        subtopics: "Instrucción estructural (JavaScript)",
        competence: "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        learningResult: "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },

    // GRADO 10 - Instructor Sena
    // Segundo Período
    {
        "week": 15,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Instrucciones de control algorítmicas",
        "subtopics": "Instrucción condicional (Pseint, JavaScript, Php)",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 16,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Instrucciones de control algorítmicas",
        "subtopics": "Instrucción condicional anidada (Pseint, JavaScript, Php)",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 17,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Instrucciones de control algorítmicas",
        "subtopics": "Ciclo Para (PseInt, JavaScript, php)",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 18,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Instrucciones de control algorítmicas",
        "subtopics": "Ciclo Mientras (PseInt, JavaScript, php)",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 19,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Instrucciones de control algorítmicas",
        "subtopics": "Ciclo Repetir (PseInt, JavaScript, php)",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 20,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Instrucciones de control algorítmicas",
        "subtopics": "Funciones (JavaScript, php)",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 21,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Instrucciones de control algorítmicas",
        "subtopics": "Arreglos (JavaScript, Php)",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 22,
        "grade": "10",
        "period": 2,
        " role": "instructor",
        "topic": "Instrucciones de control algorítmicas",
        "subtopics": "Matrices (JavaScript, php)",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "RAP 1. RESOLVER PROCESOS LÓGICOS A TRAVÉS DE LA IMPLEMENTACIÓN DE ALGORITMOS Y EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 23,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "BD - Bases de datos Relacionales",
        "subtopics": "*Historias de las bases de datos\n*Definición Bases de datos relacionales\n*Definición Bases de datos no relacionales\n*Definición SQL y MySql\n*Definición otros lenguajes (Oracle, PostgreSQL, etc.)",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 2. PROGRAMAR SENTENCIAS SQL EN UN SISTEMA MANEJADOR DE BASES DE DATOS SEGÚN REQUERIMIENTOS DEL CLIENTE."
    },
    {
        "week": 24,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Lenguaje de definición de datos (MySql)",
        "subtopics": "*Introducción\n*Tipos de datos\n*¿Qué es una primary Key?\n*¿Qué es una Foreing Key?\n*Definición Filas y Columnas\n*Agregar y Quitar Columnas\n*Eliminar Tablas\n*Truncar tablas",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 2. PROGRAMAR SENTENCIAS SQL EN UN SISTEMA MANEJADOR DE BASES DE DATOS SEGÚN REQUERIMIENTOS DEL CLIENTE."
    },
    {
        "week": 25,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Diseño de base de datos",
        "subtopics": "*Introducción\n*Diccionario de datos\n*Cardinalidad (Relaciones 1:1, 1:n, n:n)\n*Modelo relacional\n*Modelo Entidad - Relación\n*Entidades Fuertes y Débiles\n*Herencia y Agregación\n*Normalización (1ra, 2da, 3ra)",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 2. PROGRAMAR SENTENCIAS SQL EN UN SISTEMA MANEJADOR DE BASES DE DATOS SEGÚN REQUERIMIENTOS DEL CLIENTE."
    },
    {
        "week": 26,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Desarrollo Query MySql",
        "subtopics": "*Introducción\n*Creación de una base de datos (créate Database, Use, Delete, Charset)\n*Creación de una tabla (Create, Delete, NULL, AI)",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 2. PROGRAMAR SENTENCIAS SQL EN UN SISTEMA MANEJADOR DE BASES DE DATOS SEGÚN REQUERIMIENTOS DEL CLIENTE."
    },
    {
        "week": 27,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Alter table",
        "subtopics": "* Agregar y Quitar Primary Keys\n*Agregar y Quitar Foreing Keys\n*Cambiar nombre de una columna\n*Cambiar Tipo de datos",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 2. PROGRAMAR SENTENCIAS SQL EN UN SISTEMA MANEJADOR DE BASES DE DATOS SEGÚN REQUERIMIENTOS DEL CLIENTE."
    },
    {
        "week": 28,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "DDL - Lenguaje de definición de datos",
        "subtopics": "* Definición\n*Sentencias de creación(Tablas, Vistas, procedimientos almacenados, disparadores) \n*Sentencias de Modificación(Tablas, Vistas, procedimientos almacenados, disparadores) \n*Sentencias de Borrado Drop and Truncate(Tablas, Vistas, procedimientos almacenados, disparadores)",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 1. CONSTRUIR LA BASE DE DATOS SEGÚN REQUERIMIENTOS DEL CLIENTE."
    },
    // GRADO 10 - Instructor Sena 
    // Tercer Período 

    {
        "week": 29,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "DML - Lenguaje de manipulación de datos",
        "subtopics": "*Definición\n*Inserción de datos\n*Insert y Where\n*Consultas de datos SELECT",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 1. CONSTRUIR LA BASE DE DATOS SEGÚN REQUERIMIENTOS DEL CLIENTE."
    },
    {
        "week": 30,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "DML - Lenguaje de manipulación de datos",
        "subtopics": "*Consulta de datos de una tabla (SELECT * FROM)\n*Consulta de algunos datos de la tabla (SELECT --- , --- FROM )\n*Creación de una Base de datos - EJEMPLO\n*Creación de una base de datos y manipulación - EXAMEN",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 1. CONSTRUIR LA BASE DE DATOS SEGÚN REQUERIMIENTOS DEL CLIENTE."
    },
    {
        "week": 31,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Desarrollo en lenguaje y bases de datos",
        "subtopics": "*Lenguajes de programación\n*Lenguajes de programación más usados",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 32,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Desarrollo en lenguaje y bases de datos",
        "subtopics": "Diferencias entre la programación web y programación de escritorio",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 33,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Desarrollo en lenguaje y bases de datos",
        "subtopics": "Introducción a la programación",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 34,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Desarrollo en lenguaje y bases de datos",
        "subtopics": "Introducción a la programación web",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 35,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Desarrollo en lenguaje y bases de datos",
        "subtopics": "¿Qué es PHP, JavaScript, Java?",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 36,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Desarrollo en lenguaje y bases de datos",
        "subtopics": "Generalidades de PHP, JavaScript, Java",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 37,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Desarrollo en lenguaje y bases de datos",
        "subtopics": "Introducción a PHP, JavaScript, Java",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 38,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Desarrollo en lenguaje y bases de datos",
        "subtopics": "Estructura del lenguaje de programación",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 39,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Desarrollo en lenguaje y bases de datos",
        "subtopics": "Introducción a relaciones PHP y HTML",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 40,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Desarrollo en lenguaje y bases de datos",
        "subtopics": "Envíos de HTML y PHP",
        "competence": "DESARROLLO DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    // GRADO 11 - Instructor SENA  
    // Primer Período  
    {
        "week": 1,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Php y HTML",
        "subtopics": "Conceptos",
        "competence": "*DESARROLLO DE LA SOLUCIÓN DE SOFTWARE\n*ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 2,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Php y HTML",
        "subtopics": "Llamados, inserción de código php en html",
        "competence": "*DESARROLLO DE LA SOLUCIÓN DE SOFTWARE\n*ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 3,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Php y HTML",
        "subtopics": "Conexión a la BD",
        "competence": "*DESARROLLO DE LA SOLUCIÓN DE SOFTWARE\n*ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 1. CONSTRUIR LA BASE DE DATOS SEGÚN REQUERIMIENTOS DEL CLIENTE."
    },
    {
        "week": 4,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Php y HTML",
        "subtopics": "Inserción de código MySql en php",
        "competence": "*DESARROLLO DE LA SOLUCIÓN DE SOFTWARE\n*ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 5,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Php y HTML",
        "subtopics": "CRUD: Inserción de datos desde php",
        "competence": "*DESARROLLO DE LA SOLUCIÓN DE SOFTWARE\n*ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 6,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Php y HTML",
        "subtopics": "CRUD: Consulta de datos desde php",
        "competence": "*DESARROLLO DE LA SOLUCIÓN DE SOFTWARE\n*ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 7,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Php y HTML",
        "subtopics": "CRUD: Modificación de datos desde php",
        "competence": "*DESARROLLO DE LA SOLUCIÓN DE SOFTWARE\n*ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 8,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Php y HTML",
        "subtopics": "CRUD: Eliminación de datos desde php",
        "competence": "*DESARROLLO DE LA SOLUCIÓN DE SOFTWARE\n*ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 9,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Php y HTML",
        "subtopics": "Inicio de sesión",
        "competence": "*DESARROLLO DE LA SOLUCIÓN DE SOFTWARE\n*ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 10,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Php y HTML",
        "subtopics": "Manejo de Sesiones",
        "competence": "*DESARROLLO DE LA SOLUCIÓN DE SOFTWARE\n*ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 11,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Php y HTML",
        "subtopics": "Manejo de datos extraídos de BD",
        "competence": "*DESARROLLO DE LA SOLUCIÓN DE SOFTWARE\n*ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 12,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Php y HTML",
        "subtopics": "Manejo de datos extraídos de BD",
        "competence": "*DESARROLLO DE LA SOLUCIÓN DE SOFTWARE\n*ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 13,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "POO",
        "subtopics": "Generalidades de la POO",
        "competence": "*DESARROLLO DE LA SOLUCIÓN DE SOFTWARE\n*ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 14,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "POO",
        "subtopics": "Generalidades de la POO",
        "competence": "*DESARROLLO DE LA SOLUCIÓN DE SOFTWARE\n*ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    // GRADO 11 - Instructor SENA  
    // Segundo Período  
    {
        "week": 15,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "POO",
        "subtopics": "Objetos, clases, utilidades, herencias",
        "competence": "*DESARROLLO DE LA SOLUCIÓN DE SOFTWARE\n*ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 16,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "POO",
        "subtopics": "Estructura de sats, Árboles",
        "competence": "*DESARROLLO DE LA SOLUCIÓN DE SOFTWARE\n*ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 17,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Bases de Datos",
        "subtopics": "Consultas Operadores de MySQL",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 18,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Bases de Datos",
        "subtopics": "Consultas Operadores de comparación",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 19,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Bases de Datos",
        "subtopics": "Consultas Operadores con cadena",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 20,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Bases de Datos",
        "subtopics": "Consultas Operadores Lógicos",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 21,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Bases de Datos",
        "subtopics": "Búsqueda Condicionada (WHERE, BETWEEN, LIKE, LIKE %%, IF)",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 22,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Bases de Datos",
        "subtopics": "Búsqueda Agrupada (ORDER BY)",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 23,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Bases de Datos",
        "subtopics": "Consulta Limitada",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 24,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Bases de Datos",
        "subtopics": "Consulta Inner Join",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 25,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Bases de Datos",
        "subtopics": "Consulta Left Join",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 26,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Bases de Datos",
        "subtopics": "Encriptación",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 27,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Bases de Datos",
        "subtopics": "Modificación de datos UPDATE",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 28,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Bases de Datos",
        "subtopics": "Eliminación de datos DELETE",
        "competence": "ADMINISTRACION DE BASES DE DATOS",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    // GRADO 11 - Instructor SENA  
    // Tercer Período  
    {
        "week": 29,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Bases de Datos",
        "subtopics": "*Lenguajes de programación\n*Lenguajes de programación más usados",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 30,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Bases de Datos",
        "subtopics": "*Diferencias entre la programación web y programación de escritorio\n*Introducción a la programación\n*Introducción a la programación web\n*Qué es php, JavaScript, Java?",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 31,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Bases de Datos",
        "subtopics": "*Generalidades de php, JavaScript, Java\n*Introducción a php, JavaScript, Java\n*Estructura del lenguaje de programación\n*Introducción a Relaciones php y html\n*Envíos de Html y php",
        "competence": "ESTABLECIMIENTO DE REQUISITOS DE LA SOLUCIÓN DE SOFTWARE",
        "learningResult": "*RAP 2. CREAR COMPONENTES FRONT-END DEL SOFTWARE DE ACUERDO CON LAS NECESIDADES DEL CLIENTE\n*RAP 3. CODIFICAR EL SOFTWARE EMPLEANDO EL LENGUAJE DE PROGRAMACIÓN SELECCIONADO."
    },
    {
        "week": 32,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Proyecto de formación (Entregables)",
        "subtopics": "1. Descripción del proyecto (Diapositivas, PowerPoint, Video) (Planteamiento del problema.\n2. Justificación.\n3. Objetivo General.\n4. Objetivos específicos, Impactos (Ambiental, Social, económico, Tecnológico).\n5. Usuarios directos e indirectos.\n6. Valor del proyecto.\n7. Metodología.",
        "competence": "ETAPA PRACTICA",
        "learningResult": "*APLICAR EN LA RESOLUCIÓN DE PROBLEMAS REALES DEL SECTOR PRODUCTIVO, LOS CONOCIMIENTOS, HABILIDADES Y DESTREZAS PERTINENTES A LAS COMPETENCIAS DEL PROGRAMA DE FORMACIÓN, ASUMIENDO ESTRATEGIAS Y METODOLOGÍAS DE AUTOGESTIÓN."
    },
    {
        "week": 33,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Proyecto de formación (Entregables)",
        "subtopics": "2. Definición de requisitos para el sistema (funcionales, no funcionales). Se puede utilizar un formato para definición de requerimientos.",
        "competence": "ETAPA PRACTICA",
        "learningResult": "*APLICAR EN LA RESOLUCIÓN DE PROBLEMAS REALES DEL SECTOR PRODUCTIVO, LOS CONOCIMIENTOS, HABILIDADES Y DESTREZAS PERTINENTES A LAS COMPETENCIAS DEL PROGRAMA DE FORMACIÓN, ASUMIENDO ESTRATEGIAS Y METODOLOGÍAS DE AUTOGESTIÓN."
    },
    {
        "week": 34,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Proyecto de formación (Entregables)",
        "subtopics": "3. Diagramación UML del sistema",
        "competence": "ETAPA PRACTICA",
        "learningResult": "*APLICAR EN LA RESOLUCIÓN DE PROBLEMAS REALES DEL SECTOR PRODUCTIVO, LOS CONOCIMIENTOS, HABILIDADES Y DESTREZAS PERTINENTES A LAS COMPETENCIAS DEL PROGRAMA DE FORMACIÓN, ASUMIENDO ESTRATEGIAS Y METODOLOGÍAS DE AUTOGESTIÓN."
    },
    {
        "week": 35,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Proyecto de formación (Entregables)",
        "subtopics": "4. Diccionario de datos",
        "competence": "ETAPA PRACTICA",
        "learningResult": "*APLICAR EN LA RESOLUCIÓN DE PROBLEMAS REALES DEL SECTOR PRODUCTIVO, LOS CONOCIMIENTOS, HABILIDADES Y DESTREZAS PERTINENTES A LAS COMPETENCIAS DEL PROGRAMA DE FORMACIÓN, ASUMIENDO ESTRATEGIAS Y METODOLOGÍAS DE AUTOGESTIÓN."
    },
    {
        "week": 36,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Proyecto de formación (Entregables)",
        "subtopics": "5. Modelo relacional de la BD",
        "competence": "ETAPA PRACTICA",
        "learningResult": "*APLICAR EN LA RESOLUCIÓN DE PROBLEMAS REALES DEL SECTOR PRODUCTIVO, LOS CONOCIMIENTOS, HABILIDADES Y DESTREZAS PERTINENTES A LAS COMPETENCIAS DEL PROGRAMA DE FORMACIÓN, ASUMIENDO ESTRATEGIAS Y METODOLOGÍAS DE AUTOGESTIÓN."
    },
    {
        "week": 37,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Proyecto de formación (Entregables)",
        "subtopics": "6. Prototipo del sistema",
        "competence": "ETAPA PRACTICA",
        "learningResult": "*APLICAR EN LA RESOLUCIÓN DE PROBLEMAS REALES DEL SECTOR PRODUCTIVO, LOS CONOCIMIENTOS, HABILIDADES Y DESTREZAS PERTINENTES A LAS COMPETENCIAS DEL PROGRAMA DE FORMACIÓN, ASUMIENDO ESTRATEGIAS Y METODOLOGÍAS DE AUTOGESTIÓN."
    },
    {
        "week": 38,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Proyecto de formación (Entregables)",
        "subtopics": "7. Inicio de sesión del sistema\n8. Crud del sistema (MVC)",
        "competence": "ETAPA PRACTICA",
        "learningResult": "*APLICAR EN LA RESOLUCIÓN DE PROBLEMAS REALES DEL SECTOR PRODUCTIVO, LOS CONOCIMIENTOS, HABILIDADES Y DESTREZAS PERTINENTES A LAS COMPETENCIAS DEL PROGRAMA DE FORMACIÓN, ASUMIENDO ESTRATEGIAS Y METODOLOGÍAS DE AUTOGESTIÓN."
    },
    {
        "week": 39,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Proyecto de formación (Entregables)",
        "subtopics": "9. Pruebas al sistema",
        "competence": "ETAPA PRACTICA",
        "learningResult": "*APLICAR EN LA RESOLUCIÓN DE PROBLEMAS REALES DEL SECTOR PRODUCTIVO, LOS CONOCIMIENTOS, HABILIDADES Y DESTREZAS PERTINENTES A LAS COMPETENCIAS DEL PROGRAMA DE FORMACIÓN, ASUMIENDO ESTRATEGIAS Y METODOLOGÍAS DE AUTOGESTIÓN."
    },
    {
        "week": 40,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Proyecto de formación (Entregables)",
        "subtopics": "10. Manual del Usuario",
        "competence": "ETAPA PRACTICA",
        "learningResult": "*APLICAR EN LA RESOLUCIÓN DE PROBLEMAS REALES DEL SECTOR PRODUCTIVO, LOS CONOCIMIENTOS, HABILIDADES Y DESTREZAS PERTINENTES A LAS COMPETENCIAS DEL PROGRAMA DE FORMACIÓN, ASUMIENDO ESTRATEGIAS Y METODOLOGÍAS DE AUTOGESTIÓN."
    }
    // fin de los períodos

]
// Información de los períodos
const periodInfo = [
    {
        period: 1,
        name: "PRIMER PERÍODO",
        dates: "20 de enero - 25 de abril",
        weeks: "Semanas 1 - 14"
    },
    {
        period: 2,
        name: "SEGUNDO PERÍODO",
        dates: "28 de abril - 15 de agosto",
        weeks: "Semanas 15 - 28"
    },
    {
        period: 3,
        name: "TERCER PERÍODO",
        dates: "18 de agosto - 28 de noviembre",
        weeks: "Semanas 29 - 40"
    }
];

// Función para generar la vista de cuadrícula
function generateGridView() {
    const gridContainer = document.getElementById('curriculumGrid');
    gridContainer.innerHTML = '';

    // Agrupar cursos por período y grado
    const coursesByPeriodAndGrade = {};

    periodInfo.forEach(period => {
        coursesByPeriodAndGrade[period.period] = {
            info: period,
            grade10: {
                docente: curriculumData.filter(course => course.period === period.period && course.grade === "10" && course.role === "docente"),
                instructor: curriculumData.filter(course => course.period === period.period && course.grade === "10" && course.role === "instructor")
            },
            grade11: {
                docente: curriculumData.filter(course => course.period === period.period && course.grade === "11" && course.role === "docente"),
                instructor: curriculumData.filter(course => course.period === period.period && course.grade === "11" && course.role === "instructor")
            }
        };
    });

    // Crear secciones para cada período
    for (let periodNum = 1; periodNum <= 3; periodNum++) {
        const periodData = coursesByPeriodAndGrade[periodNum];

        const periodSection = document.createElement('div');
        periodSection.className = 'period-section';
        periodSection.dataset.period = periodNum;

        const periodHeader = document.createElement('div');
        periodHeader.className = 'period-header';
        periodHeader.innerHTML = `
            <h2>${periodData.info.name} (${periodData.info.weeks})</h2>
            <span class="period-dates">${periodData.info.dates}</span>
        `;

        const periodContent = document.createElement('div');
        periodContent.className = 'period-content';

        const coursesGrid = document.createElement('div');
        coursesGrid.className = 'grid-container';

        // Añadir cursos de cada grado y rol
        ['grade10', 'grade11'].forEach(grade => {
            ['docente', 'instructor'].forEach(role => {
                periodData[grade][role].forEach(course => {
                    coursesGrid.appendChild(createCourseCard(course));
                });
            });
        });

        periodContent.appendChild(coursesGrid);
        periodSection.appendChild(periodHeader);
        periodSection.appendChild(periodContent);
        gridContainer.appendChild(periodSection);
    }
}

// Función para crear una tarjeta de curso
function createCourseCard(course) {
    const courseCard = document.createElement('div');
    courseCard.className = `course-card period-${course.period} ${course.role}`;
    courseCard.dataset.week = course.week;
    courseCard.dataset.grade = course.grade;
    courseCard.dataset.period = course.period;
    courseCard.dataset.role = course.role;

    courseCard.innerHTML = `
        <div class="course-week">Semana ${course.week}</div>
        <div class="course-title">${course.topic}</div>
        <div class="course-code">${course.subtopics}</div>
        <div class="course-details">
            <div>
                <span class="course-grade">Grado ${course.grade}°</span>
                <span class="course-role ${course.role}">${course.role === 'docente' ? 'Docente PAR' : 'Instructor SENA'}</span>
            </div>
        </div>
    `;

    courseCard.addEventListener('click', () => showCourseDetails(course));

    return courseCard;
}

// Función para generar la vista de lista
function generateListView() {
    const listContainer = document.getElementById('curriculumList');
    listContainer.innerHTML = '';

    // Agrupar cursos por período
    for (let periodNum = 1; periodNum <= 3; periodNum++) {
        const periodCourses = curriculumData.filter(course => course.period === periodNum);
        const periodInfo = getPeriodInfo(periodNum);

        const periodSection = document.createElement('div');
        periodSection.className = 'period-section-list';
        periodSection.dataset.period = periodNum;

        const periodHeader = document.createElement('div');
        periodHeader.className = 'period-header-list';
        periodHeader.innerHTML = `
            <span>${periodInfo.name} (${periodInfo.weeks})</span>
            <span>${periodInfo.dates}</span>
        `;

        const periodCoursesList = document.createElement('div');
        periodCoursesList.className = 'period-courses';

        // Ordenar cursos por semana
        periodCourses.sort((a, b) => a.week - b.week);

        periodCourses.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.className = `course-item period-${course.period} ${course.role}`;
            courseItem.dataset.week = course.week;
            courseItem.dataset.grade = course.grade;
            courseItem.dataset.period = course.period;
            courseItem.dataset.role = course.role;

            courseItem.innerHTML = `
                <div class="course-item-week">Semana ${course.week}</div>
                <div class="course-item-title">${course.topic}: ${course.subtopics}</div>
                <div class="course-item-grade">Grado ${course.grade}°</div>
                <div class="course-item-role">${course.role === 'docente' ? 'Docente PAR' : 'Instructor SENA'}</div>
            `;

            courseItem.addEventListener('click', () => showCourseDetails(course));
            periodCoursesList.appendChild(courseItem);
        });

        periodSection.appendChild(periodHeader);
        periodSection.appendChild(periodCoursesList);
        listContainer.appendChild(periodSection);
    }
}

// Función para obtener información del período
function getPeriodInfo(periodNum) {
    return periodInfo.find(p => p.period === periodNum);
}

// Función para mostrar detalles del curso en un modal
function showCourseDetails(course) {
    const modal = document.getElementById('courseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalWeek = document.getElementById('modalWeek');
    const modalGrade = document.getElementById('modalGrade');
    const modalPeriod = document.getElementById('modalPeriod');
    const modalCompetence = document.getElementById('modalCompetence');
    const modalLearningResult = document.getElementById('modalLearningResult');
    const modalRole = document.getElementById('modalRole');
    const modalSubtopics = document.getElementById('modalSubtopics');

    modalTitle.textContent = course.topic;
    modalWeek.textContent = `Semana ${course.week}`;
    modalGrade.textContent = `${course.grade}°`;

    const periodData = getPeriodInfo(course.period);
    modalPeriod.textContent = `${periodData.name} (${periodData.dates})`;

    modalCompetence.textContent = course.competence || 'No especificado';
    modalLearningResult.textContent = course.learningResult || 'No especificado';
    modalRole.textContent = course.role === 'docente' ? 'Docente PAR' : 'Instructor SENA';
    modalSubtopics.textContent = course.subtopics;

    modal.style.display = 'block';
}

// Función para aplicar filtros
function applyFilters() {
    const gradeFilter = document.getElementById('gradeFilter').value;
    const periodFilter = document.getElementById('periodFilter').value;
    const roleFilter = document.getElementById('roleFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Aplicar filtros en vista de cuadrícula
    const periodSections = document.querySelectorAll('.period-section');
    periodSections.forEach(section => {
        const periodNum = section.dataset.period;

        // Mostrar/ocultar sección según filtro de período
        if (periodFilter === 'all' || periodFilter === periodNum) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
            return;
        }

        // Filtrar tarjetas de curso
        const courseCards = section.querySelectorAll('.course-card');
        courseCards.forEach(card => {
            const cardGrade = card.dataset.grade;
            const cardRole = card.dataset.role;
            const cardTitle = card.querySelector('.course-title').textContent.toLowerCase();
            const cardSubtopics = card.querySelector('.course-code').textContent.toLowerCase();

            // Aplicar filtros
            const matchesGrade = gradeFilter === 'all' || gradeFilter === cardGrade;
            const matchesRole = roleFilter === 'all' || roleFilter === cardRole;
            const matchesSearch = searchTerm === '' ||
                cardTitle.includes(searchTerm) ||
                cardSubtopics.includes(searchTerm);

            // Mostrar u ocultar según los filtros
            if (matchesGrade && matchesRole && matchesSearch) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Aplicar filtros en vista de lista
    const periodSectionsList = document.querySelectorAll('.period-section-list');
    periodSectionsList.forEach(section => {
        const periodNum = section.dataset.period;

        // Mostrar/ocultar sección según filtro de período
        if (periodFilter === 'all' || periodFilter === periodNum) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
            return;
        }

        // Filtrar elementos de curso
        const courseItems = section.querySelectorAll('.course-item');
        let visibleItems = 0;

        courseItems.forEach(item => {
            const itemGrade = item.dataset.grade;
            const itemRole = item.dataset.role;
            const itemTitle = item.querySelector('.course-item-title').textContent.toLowerCase();

            // Aplicar filtros
            const matchesGrade = gradeFilter === 'all' || gradeFilter === itemGrade;
            const matchesRole = roleFilter === 'all' || roleFilter === itemRole;
            const matchesSearch = searchTerm === '' || itemTitle.includes(searchTerm);

            // Mostrar u ocultar según los filtros
            if (matchesGrade && matchesRole && matchesSearch) {
                item.style.display = '';
                visibleItems++;
            } else {
                item.style.display = 'none';
            }
        });

        // Ocultar sección si no hay elementos visibles
        if (visibleItems === 0) {
            section.style.display = 'none';
        }
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Generar vistas
    generateGridView();
    generateListView();

    // Configurar eventos
    document.getElementById('toggleView').addEventListener('click', () => {
        const gridContainer = document.getElementById('curriculumGrid');
        const listContainer = document.getElementById('curriculumList');

        if (gridContainer.style.display === 'none') {
            gridContainer.style.display = 'block';
            listContainer.style.display = 'none';
            document.getElementById('toggleView').textContent = 'Vista Lista';
        } else {
            gridContainer.style.display = 'none';
            listContainer.style.display = 'block';
            document.getElementById('toggleView').textContent = 'Vista Cuadrícula';
        }
    });

    document.getElementById('toggleFilters').addEventListener('click', () => {
        const filterPanel = document.getElementById('filterPanel');
        filterPanel.style.display = filterPanel.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('gradeFilter').addEventListener('change', applyFilters);
    document.getElementById('periodFilter').addEventListener('change', applyFilters);
    document.getElementById('roleFilter').addEventListener('change', applyFilters);
    document.getElementById('searchBtn').addEventListener('click', applyFilters);
    document.getElementById('searchInput').addEventListener('keyup', event => {
        if (event.key === 'Enter') {
            applyFilters();
        }
    });

    document.getElementById('resetFilters').addEventListener('click', () => {
        document.getElementById('gradeFilter').value = 'all';
        document.getElementById('periodFilter').value = 'all';
        document.getElementById('roleFilter').value = 'all';
        document.getElementById('searchInput').value = '';
        applyFilters();
    });

    // Configurar modal
    const modal = document.getElementById('courseModal');
    const closeBtn = document.getElementsByClassName('close')[0];

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', event => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


// Función para exportar la malla curricular en PDF
function exportarMallaPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Malla Curricular - Plan de Estudios", 14, 10);

    const columnas = ["Semana", "Periodo", "Grado", "Docente/Instructor", "Tema", "Subtema"];

    const filas = curriculumData.map(item => [
        item.week, item.period, item.grade, item.role, item.topic, item.subtopics
    ]);

    doc.autoTable({
        head: [columnas],
        body: filas,
        startY: 12,
        styles: { fontSize: 10, cellWidth: 'auto' }, // Aumenta el tamaño del texto y ajusta las celdas automáticamente
        margin: { top: 20 }
    });

    doc.save("Malla_Curricular.pdf");
}

// Agregar el evento al botón
document.getElementById("exportarPDF").addEventListener("click", exportarMallaPDF);