// Datos de la malla curricular
const curriculumData = [
    // GRADO 10 - DOCENTE PAR
    // Primer Período
    {
        week: 1,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Introducción al Diseño",
        subtopics: "Conceptos básicos, línea, punto, plano, formas básicas",
        competence: "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "484989 - 01 PREPARAR EQUIPOS Y MATERIALES PARA REALIZAR PRUEBAS DE COLOR SEGÚN ORDEN DE PRODUCCIÓN"
    },
    {
        week: 2,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Positivo y Negativo",
        subtopics: "Aplicaciones en diseño gráfico",
        competence: "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "484990 - 05 VERIFICAR CALIDAD DE LA PRUEBA DE COLOR SEGÚN ESTÁNDARES INTERNACIONALES"
    },
    {
        week: 3,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Introducción a la Teoría del Color",
        subtopics: "Círculo cromático, colores primarios",
        competence: "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "484991 - 02 IDENTIFICAR CARACTERÍSTICAS DEL ARCHIVO DIGITAL DE ACUERDO A LA NORMATIVIDAD VIGENTE Y MEDIO DE SALIDA"
    },
    {
        week: 4,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Introducción a la Teoría del Color",
        subtopics: "Colores análogos, tríadas y complementarios",
        competence: "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "484991 - 02 IDENTIFICAR CARACTERÍSTICAS DEL ARCHIVO DIGITAL DE ACUERDO A LA NORMATIVIDAD VIGENTE Y MEDIO DE SALIDA"
    },
    {
        week: 5,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Psicología del Color",
        subtopics: "Significados y aplicaciones del color",
        competence: "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "484992 - 03 CALIBRAR DISPOSITIVOS DE PRUEBAS DE COLOR DE ACUERDO CON EL MEDIO DE SALIDA"
    },
    {
        week: 6,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Psicología del Color",
        subtopics: "Saturación y luminosidad",
        competence: "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "484992 - 03 CALIBRAR DISPOSITIVOS DE PRUEBAS DE COLOR DE ACUERDO CON EL MEDIO DE SALIDA"
    },
    {
        week: 7,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Teoría de la Imagen",
        subtopics: "Semiótica, Gestalt y retórica de la imagen",
        competence: "291301051 - PREPARAR IMÁGENES DIGITALES PARA LA DIAGRAMACIÓN DE ACUERDO CON LAS ESPECIFICACIONES SOLICITDAS.",
        learningResult: "484978 - 06 VERIFICAR QUE LAS CARACTERÍSTICAS DE LAS IMÁGENES DIGITALES CUMPLAN CON LOS REQUERIMIENTOS DEL MEDIO DE SALIDA"
    },
    {
        week: 8,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Tipografía",
        subtopics: "Partes de las letras y psicología de la tipografía",
        competence: "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "484993 - 04 ELABORAR PRUEBA DE COLOR PARA APROBACIÓN DEL CLIENTE SEGÚN ORDEN DE PRODUCCIÓN"
    },
    {
        week: 9,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Formatos de Imagen",
        subtopics: "Resolución, tamaño y formatos digitales",
        competence: "291301051 - PREPARAR IMÁGENES DIGITALES PARA LA DIAGRAMACIÓN DE ACUERDO CON LAS ESPECIFICACIONES SOLICITDAS.",
        learningResult: "484978 - 06 VERIFICAR QUE LAS CARACTERÍSTICAS DE LAS IMÁGENES DIGITALES CUMPLAN CON LOS REQUERIMIENTOS DEL MEDIO DE SALIDA"
    },
    {
        week: 10,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Edición de Imágenes",
        subtopics: "Herramientas básicas de software de edición",
        competence: "291301051 - PREPARAR IMÁGENES DIGITALES PARA LA DIAGRAMACIÓN DE ACUERDO CON LAS ESPECIFICACIONES SOLICITDAS.",
        learningResult: "484979 - 03 EDITAR MODELOS DE COLOR, RESOLUCIÓN, TAMAÑOS, FORMATOS DE IMÁGENES DIGITALES DE ACUERDO AL MEDIO DE SALIDA"
    },
    {
        week: 11,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Edición de Imágenes",
        subtopics: "Modelos de color RGB y CMYK",
        competence: "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "484979 - 03 EDITAR MODELOS DE COLOR, RESOLUCIÓN, TAMAÑOS, FORMATOS DE IMÁGENES DIGITALES DE ACUERDO AL MEDIO DE SALIDA"
    },
    {
        week: 12,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Composición Fotográfica",
        subtopics: "Planos, angulaciones y composición",
        competence: "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "484980 - 04 APLICAR HERRAMIENTAS DEL SOFTWARE DE EDICIÓN DE IMÁGENES DE ACUERDO A LOS REQUERIMIENTOS DEL PRODUCTO"
    },
    {
        week: 13,
        grade: "10",
        period: 1,
        role: "docente",
        topic: "Prácticas de Illustrator y Photoshop",
        subtopics: "Aplicaciones básicas y avanzadas",
        competence: "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "484980 - 04 APLICAR HERRAMIENTAS DEL SOFTWARE DE EDICIÓN DE IMÁGENES DE ACUERDO A LOS REQUERIMIENTOS DEL PRODUCTO"
    },
    {
        week: 14,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Evaluación y Repaso",
        subtopics: "Integración de conceptos del primer período",
        competence: "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "484980 - 04 APLICAR HERRAMIENTAS DEL SOFTWARE DE EDICIÓN DE IMÁGENES DE ACUERDO A LOS REQUERIMIENTOS DEL PRODUCTO"
    },
    // Segundo Período
    {
        week: 15,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Diseño Básico",
        subtopics: "Aplicaciones en proyectos reales",
        competence: "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "Elaborar pruebas de color según requerimiento del cliente"
    },
    {
        week: 16,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Producción Digital",
        subtopics: "Diseño editorial y diagramación",
        competence: "291301051",
        learningResult: "Preparar imágenes digitales para la diagramación de acuerdo con las especificaciones solicitadas"
    },
    {
        week: 17,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Herramientas de Diseño",
        subtopics: "Uso de software especializado",
        competence: "484989 - 01",
        learningResult: "PREPARAR EQUIPOS Y MATERIALES PARA REALIZAR PRUEBAS DE COLOR SEGÚN ORDEN DE PRODUCCIÓN"
    },
    {
        week: 18,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Color en Diseño Gráfico",
        subtopics: "Aplicaciones en medios digitales e impresos",
        competence: "484991 - 02",
        learningResult: "IDENTIFICAR CARACTERÍSTICAS DEL ARCHIVO DIGITAL DE ACUERDO A LA NORMATIVIDAD VIGENTE Y MEDIO DE SALIDA"
    },
    {
        week: 19,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Tipografía Avanzada",
        subtopics: "Familias tipográficas y su uso",
        competence: "484993 - 04",
        learningResult: "ELABORAR PRUEBA DE COLOR PARA APROBACIÓN DEL CLIENTE SEGÚN ORDEN DE PRODUCCIÓN"
    },
    {
        week: 20,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Composición y Diseño Digital",
        subtopics: "Principios de maquetación",
        competence: "484980 - 04",
        learningResult: "Aplicar herramientas del software de edición de imágenes de acuerdo a los requerimientos del producto"
    },
    {
        week: 21,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Gestión del Color",
        subtopics: "Perfilado de color y calibración de dispositivos",
        competence: "484992 - 03",
        learningResult: "Calibrar dispositivos de pruebas de color de acuerdo con el medio de salida"
    },
    {
        week: 22,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Pruebas de Impresión",
        subtopics: "Calidad y ajustes finales",
        competence: "291301053",
        learningResult: "Elaborar pruebas de color según requerimiento del cliente"
    },
    {
        week: 23,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Producción Digital",
        subtopics: "Optimización para medios impresos y digitales",
        competence: "484991 - 02",
        learningResult: "Identificar características del archivo digital de acuerdo a la normatividad vigente y medio de salida"
    },
    {
        week: 24,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Evaluación de Calidad",
        subtopics: "Estándares internacionales",
        competence: "484993 - 04",
        learningResult: "Elaborar prueba de color para aprobación del cliente según orden de producción"
    },
    {
        week: 25,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Producción Audiovisual",
        subtopics: "Edición y animación básica",
        competence: "484980 - 04",
        learningResult: "Aplicar herramientas del software de edición de imágenes de acuerdo a los requerimientos del producto"
    },
    {
        week: 26,
        grade: "10",
        period: 2,
        role: "docente",
        topic: "Postproducción",
        subtopics: "Retoque y corrección de imágenes",
        competence: "484992 - 03",
        learningResult: "Calibrar dispositivos de pruebas de color de acuerdo con el medio de salida"
    },
    {
        week: 27,
        grade: "10",
        period: 3,
        role: "docente",
        topic: "Proyecto Intermedio",
        subtopics: "Aplicación de conceptos en un proyecto práctico",
        competence: "-",
        learningResult: "-"
    },
    {
        week: 28,
        grade: "10",
        period: 3,
        role: "docente",
        topic: "Evaluación y Repaso",
        subtopics: "Integración de conceptos del segundo período",
        competence: "-",
        learningResult: "-"
    },
    // GRADO 10 - DOCENTE PAR
    // Tercer Período
    {
        "week": 29,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Proyecto Final",
        "subtopics": "Definición y planificación del proyecto",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "Elaborar pruebas de color según requerimiento del cliente"
    },
    {
        "week": 30,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Producción Digital",
        "subtopics": "Desarrollo de identidad visual",
        "competence": "484991 - 02",
        "learningResult": "Identificar características del archivo digital de acuerdo a la normatividad vigente y medio de salida"
    },
    {
        "week": 31,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Evaluación de Calidad",
        "subtopics": "Normas ISO en impresión",
        "competence": "484993 - 04",
        "learningResult": "Elaborar prueba de color para aprobación del cliente según orden de producción"
    },
    {
        "week": 32,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Desarrollo de Portafolio",
        "subtopics": "Presentación profesional",
        "competence": "484980 - 04",
        "learningResult": "Aplicar herramientas del software de edición de imágenes de acuerdo a los requerimientos del producto"
    },
    {
        "week": 33,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Exposición de Proyectos",
        "subtopics": "Pruebas y ajustes finales",
        "competence": "484992 - 03",
        "learningResult": "Calibrar dispositivos de pruebas de color de acuerdo con el medio de salida"
    },
    {
        "week": 34,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Aplicación de conceptos de diseño en proyectos prácticos",
        "subtopics": "Desarrollo y mejora de trabajos finales",
        "competence": "-",
        "learningResult": "-"
    },
    {
        "week": 35,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Aplicación de conceptos de diseño en proyectos prácticos",
        "subtopics": "Desarrollo y mejora de trabajos finales",
        "competence": "-",
        "learningResult": "-"
    },
    {
        "week": 36,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Aplicación de conceptos de diseño en proyectos prácticos",
        "subtopics": "Desarrollo y mejora de trabajos finales",
        "competence": "-",
        "learningResult": "-"
    },
    {
        "week": 37,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Revisión y culminación de proyectos",
        "subtopics": "Optimización y presentación final",
        "competence": "-",
        "learningResult": "-"
    },
    {
        "week": 38,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Revisión y culminación de proyectos",
        "subtopics": "Optimización y presentación final",
        "competence": "-",
        "learningResult": "-"
    },
    {
        "week": 39,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Evaluación y Retroalimentación",
        "subtopics": "Revisión de aprendizajes, mejoras y cierre del curso",
        "competence": "-",
        "learningResult": "-"
    },
    {
        "week": 40,
        "grade": "10",
        "period": 3,
        "role": "docente",
        "topic": "Evaluación y Retroalimentación",
        "subtopics": "Revisión de aprendizajes, mejoras y cierre del curso",
        "competence": "-",
        "learningResult": "-"
    },
    // GRADO 11 - Docente Par 
    // Primer Período 
    {
        "week": 1,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Inducción inicial",
        "competence": "291301061 - PLANEAR Y EJECUTAR PROYECTOS DE DISEÑO SEGÚN REQUERIMIENTOS DEL CLIENTE.",
        "learningResult": "29130106101 - INDUCCIÓN INICIAL."
    },
    {
        "week": 2,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Revisión equipos de trabajo",
        "competence": "291301061 - PLANEAR Y EJECUTAR PROYECTOS DE DISEÑO SEGÚN REQUERIMIENTOS DEL CLIENTE.",
        "learningResult": "29130106102 - REVISIÓN EQUIPOS DE TRABAJO."
    },
    {
        "week": 3,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Revisión Ideas de proyecto",
        "competence": "291301061 - PLANEAR Y EJECUTAR PROYECTOS DE DISEÑO SEGÚN REQUERIMIENTOS DEL CLIENTE.",
        "learningResult": "29130106103 - REVISIÓN IDEAS DE PROYECTO."
    },
    {
        "week": 4,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Lluvia de ideas - MoodBoard",
        "competence": "291301061 - PLANEAR Y EJECUTAR PROYECTOS DE DISEÑO SEGÚN REQUERIMIENTOS DEL CLIENTE.",
        "learningResult": "29130106104 - LLUVIA DE IDEAS - MOODBOARD."
    },
    {
        "week": 5,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Creación del nombre",
        "competence": "291301061 - PLANEAR Y EJECUTAR PROYECTOS DE DISEÑO SEGÚN REQUERIMIENTOS DEL CLIENTE.",
        "learningResult": "29130106105 - CREACIÓN DEL NOMBRE."
    },
    {
        "week": 6,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Creación del Logo",
        "competence": "291301061 - PLANEAR Y EJECUTAR PROYECTOS DE DISEÑO SEGÚN REQUERIMIENTOS DEL CLIENTE.",
        "learningResult": "29130106106 - CREACIÓN DEL LOGO."
    },
    {
        "week": 7,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Creación de Manual de marca",
        "competence": "291301061 - PLANEAR Y EJECUTAR PROYECTOS DE DISEÑO SEGÚN REQUERIMIENTOS DEL CLIENTE.",
        "learningResult": "29130106107 - CREACIÓN DE MANUAL DE MARCA."
    },
    {
        "week": 8,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Brief",
        "competence": "291301061 - PLANEAR Y EJECUTAR PROYECTOS DE DISEÑO SEGÚN REQUERIMIENTOS DEL CLIENTE.",
        "learningResult": "29130106108 - BRIEF."
    },
    {
        "week": 9,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Introducción a brief",
        "competence": "291301061 - PLANEAR Y EJECUTAR PROYECTOS DE DISEÑO SEGÚN REQUERIMIENTOS DEL CLIENTE.",
        "learningResult": "29130106109 - INTRODUCCIÓN A BRIEF."
    },
    {
        "week": 10,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Qué es un brief y su importancia en el diseño",
        "competence": "291301061 - PLANEAR Y EJECUTAR PROYECTOS DE DISEÑO SEGÚN REQUERIMIENTOS DEL CLIENTE.",
        "learningResult": "29130106110 - QUÉ ES UN BRIEF Y SU IMPORTANCIA EN EL DISEÑO."
    },
    {
        "week": 11,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Investigación de Mercado",
        "competence": "291301062 - ANALIZAR LAS NECESIDADES DEL MERCADO PARA PROPONER SOLUCIONES DE DISEÑO.",
        "learningResult": "29130106201 - INVESTIGACIÓN DE MERCADO."
    },
    {
        "week": 12,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Definición de Objetivos",
        "competence": "291301062 - ANALIZAR LAS NECESIDADES DEL MERCADO PARA PROPONER SOLUCIONES DE DISEÑO.",
        "learningResult": "29130106202 - DEFINICIÓN DE OBJETIVOS."
    },
    {
        "week": 13,
        "grade": "11",
        "period": 1,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Análisis de la Competencia",
        "competence": "291301062 - ANALIZAR LAS NECESIDADES DEL MERCADO PARA PROPONER SOLUCIONES DE DISEÑO.",
        "learningResult": "29130106203 - ANÁLISIS DE LA COMPETENCIA."
    },
    {
        "week": 14,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Perfil del cliente",
        "competence": "291301062 - ANALIZAR LAS NECESIDADES DEL MERCADO PARA PROPONER SOLUCIONES DE DISEÑO.",
        "learningResult": "29130106204 - PERFIL DEL CLIENTE."
    },
    // GRADO 11 - Docente Par 
    // Segundo Período 
    {
        "week": 15,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Técnicas de generación de ideas",
        "competence": "291301062 - ANALIZAR LAS NECESIDADES DEL MERCADO PARA PROPONER SOLUCIONES DE DISEÑO.",
        "learningResult": "29130106205 - TÉCNICAS DE GENERACIÓN DE IDEAS."
    },
    {
        "week": 16,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Aplicar el diseño gráfico en el brief",
        "competence": "291301062 - ANALIZAR LAS NECESIDADES DEL MERCADO PARA PROPONER SOLUCIONES DE DISEÑO.",
        "learningResult": "29130106206 - APLICAR EL DISEÑO GRÁFICO EN EL BRIEF."
    },
    {
        "week": 17,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Redes Sociales: Introducción a las Redes",
        "competence": "291301062 - ANALIZAR LAS NECESIDADES DEL MERCADO PARA PROPONER SOLUCIONES DE DISEÑO.",
        "learningResult": "29130106207 - REDES SOCIALES: INTRODUCCIÓN A LAS REDES."
    },
    {
        "week": 18,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Analizar las plataformas",
        "competence": "291301062 - ANALIZAR LAS NECESIDADES DEL MERCADO PARA PROPONER SOLUCIONES DE DISEÑO.",
        "learningResult": "29130106208 - ANALIZAR LAS PLATAFORMAS."
    },
    {
        "week": 19,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Planilla de publicación",
        "competence": "291301062 - ANALIZAR LAS NECESIDADES DEL MERCADO PARA PROPONER SOLUCIONES DE DISEÑO.",
        "learningResult": "29130106209 - PLANILLA DE PUBLICACIÓN."
    },
    {
        "week": 20,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Diseño web",
        "competence": "291301062 - ANALIZAR LAS NECESIDADES DEL MERCADO PARA PROPONER SOLUCIONES DE DISEÑO.",
        "learningResult": "29130106210 - DISEÑO WEB."
    },
    {
        "week": 21,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Introducción a HTML, etiquetas, atributos",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106301 - INTRODUCCIÓN A HTML, ETIQUETAS, ATRIBUTOS."
    },
    {
        "week": 22,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Introducción al CSS, cómo dar estilo a tu web",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106302 - INTRODUCCIÓN AL CSS, CÓMO DAR ESTILO A TU WEB."
    },
    {
        "week": 23,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Diseño web adaptable y responsivo",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106303 - DISEÑO WEB ADAPTABLE Y RESPONSIVO."
    },
    {
        "week": 24,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Diseño UI: jerarquía, color, tipografía, botones, iconos, navegación",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106304 - DISEÑO UI: JERARQUÍA, COLOR, TIPOGRAFÍA, BOTONES, ICONOS, NAVEGACIÓN."
    },
    {
        "week": 25,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Optimización de imágenes para la web",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106305 - OPTIMIZACIÓN DE IMÁGENES PARA LA WEB."
    },
    {
        "week": 26,
        "grade": "11",
        "period": 2,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Despliegue y gestión de un sitio web",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106306 - DESPLIEGUE Y GESTIÓN DE UN SITIO WEB."
    },
    {
        "week": 27,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Hosting",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106307 - HOSTING."
    },
    {
        "week": 28,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Dominio",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106308 - DOMINIO."
    },
    // GRADO 11 - Docente Par 
    // Tercer Período 
    {
        "week": 29,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Machote",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106309 - MACHOTE."
    },
    {
        "week": 30,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Periódico o Libro",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106310 - PERIÓDICO O LIBRO."
    },
    {
        "week": 31,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Afiche",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106311 - AFICHE."
    },
    {
        "week": 32,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Papelería Comercial",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106312 - PAPELERÍA COMERCIAL."
    },
    {
        "week": 33,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Planificación del proyecto final",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106313 - PLANIFICACIÓN DEL PROYECTO FINAL."
    },
    {
        "week": 34,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Desarrollo del proyecto",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106314 - DESARROLLO DEL PROYECTO."
    },
    {
        "week": 35,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Revisión y ajustes",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106315 - REVISIÓN Y AJUSTES."
    },
    {
        "week": 36,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Presentación del proyecto final",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106316 - PRESENTACIÓN DEL PROYECTO FINAL."
    },
    {
        "week": 37,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Evaluación del proyecto final",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106317 - EVALUACIÓN DEL PROYECTO FINAL."
    },
    {
        "week": 38,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Autoevaluación",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106318 - AUTOEVALUACIÓN."
    },
    {
        "week": 39,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Cierre de curso",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106319 - CIERRE DE CURSO."
    },
    {
        "week": 40,
        "grade": "11",
        "period": 3,
        "role": "docente",
        "topic": "Proyecto",
        "subtopics": "Reflexión final",
        "competence": "291301063 - IMPLEMENTAR ESTRATEGIAS DE DISEÑO WEB.",
        "learningResult": "29130106320 - REFLEXIÓN FINAL."
    },
    // ... otros datos del docente SENA ....................................... ...


    // GRADO 10 - Instructor Sena
    // Primer Período
    {
        week: 1,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Illustrator",
        subtopics: "Introducción a Software de vectorización, Mover, acercar, crear mesa de trabajo, uso de guías, selección y selección directa, copiar, pegar, duplicar.",
        competence: "291301051 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "29130105101 - PREPARAR EQUIPOS Y MATERIALES PARA REALIZAR PRUEBAS DE COLOR SEGÚN ORDEN DE PRODUCCIÓN"
    },
    {
        week: 2,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Illustrator",
        subtopics: "Creación y edición de formas: Círculo, cuadrado, estrella, líneas y pinceles.",
        competence: "291301051 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "29130105102 - PREPARAR EQUIPOS Y MATERIALES PARA REALIZAR PRUEBAS DE COLOR SEGÚN ORDEN DE PRODUCCIÓN"
    },
    {
        week: 3,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Illustrator",
        subtopics: "Composición de las Formas, Buscatrazos - Creador de formas.",
        competence: "291301051 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "29130105103 - PREPARAR EQUIPOS Y MATERIALES PARA REALIZAR PRUEBAS DE COLOR SEGÚN ORDEN DE PRODUCCIÓN"
    },
    {
        week: 4,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Illustrator",
        subtopics: "Creación y edición de vectores: Herramienta Pluma, pluma de curvatura y nodos.",
        competence: "291301051 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "29130105104 - PREPARAR EQUIPOS Y MATERIALES PARA REALIZAR PRUEBAS DE COLOR SEGÚN ORDEN DE PRODUCCIÓN"
    },
    {
        week: 5,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Illustrator",
        subtopics: "Creación y edición de vectores: Herramienta Pluma, pluma de curvatura y nodos.",
        competence: "291301051 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "29130105104 - PREPARAR EQUIPOS Y MATERIALES PARA REALIZAR PRUEBAS DE COLOR SEGÚN ORDEN DE PRODUCCIÓN"
    },
    {
        week: 6,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Illustrator",
        subtopics: "Uso de Capas y organización de proyecto: Enviar adelante y atrás, reflejar, girar.",
        competence: "291301051 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "29130105105 - PREPARAR EQUIPOS Y MATERIALES PARA REALIZAR PRUEBAS DE COLOR SEGÚN ORDEN DE PRODUCCIÓN"
    },
    {
        week: 7,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Illustrator",
        subtopics: "Uso de Capas y organización de proyecto: Enviar adelante y atrás, reflejar, girar.",
        competence: "291301051 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "29130105105 - PREPARAR EQUIPOS Y MATERIALES PARA REALIZAR PRUEBAS DE COLOR SEGÚN ORDEN DE PRODUCCIÓN"
    },
    {
        week: 8,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Illustrator",
        subtopics: "Aplicación de colores y degradados: Prueba de Color, Semitono de color.",
        competence: "291301051 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "29130105106 - PREPARAR EQUIPOS Y MATERIALES PARA REALIZAR PRUEBAS DE COLOR SEGÚN ORDEN DE PRODUCCIÓN"
    },
    {
        week: 9,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Illustrator",
        subtopics: "Aplicación de colores y degradados: Prueba de Color, Semitono de color.",
        competence: "291301051 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "29130105106 - PREPARAR EQUIPOS Y MATERIALES PARA REALIZAR PRUEBAS DE COLOR SEGÚN ORDEN DE PRODUCCIÓN"
    },
    {
        week: 10,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Illustrator",
        subtopics: "Aplicación de colores y degradados: Prueba de Color, Semitono de color.",
        competence: "291301051 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "29130105106 - PREPARAR EQUIPOS Y MATERIALES PARA REALIZAR PRUEBAS DE COLOR SEGÚN ORDEN DE PRODUCCIÓN"
    },
    {
        week: 11,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Illustrator",
        subtopics: "Herramienta de textos y tipografías: Tracking, interlineado, caja de texto y texto libre y texto en curvas.",
        competence: "291301051 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "29130105107 - PREPARAR EQUIPOS Y MATERIALES PARA REALIZAR PRUEBAS DE COLOR SEGÚN ORDEN DE PRODUCCIÓN"
    },
    {
        week: 12,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Illustrator",
        subtopics: "Herramienta de textos y tipografías: Tracking, interlineado, caja de texto y texto libre y texto en curvas.",
        competence: "291301051 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "29130105107 - PREPARAR EQUIPOS Y MATERIALES PARA REALIZAR PRUEBAS DE COLOR SEGÚN ORDEN DE PRODUCCIÓN"
    },
    {
        week: 13,
        grade: "10",
        period: 1,
        role: "instructor",
        topic: "Illustrator",
        subtopics: "Herramienta de textos y tipografías: Tracking, interlineado, caja de texto y texto libre y texto en curvas.",
        competence: "291301051 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "29130105107 - PREPARAR EQUIPOS Y MATERIALES PARA REALIZAR PRUEBAS DE COLOR SEGÚN ORDEN DE PRODUCCIÓN"
    },
    {
        week: 14,
        grade: "10",
        period: 2,
        role: "instructor",
        topic: "Illustrator",
        subtopics: "Herramienta de textos y tipografías: Tracking, interlineado, caja de texto y texto libre y texto en curvas.",
        competence: "291301051 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        learningResult: "29130105107 - PREPARAR EQUIPOS Y MATERIALES PARA REALIZAR PRUEBAS DE COLOR SEGÚN ORDEN DE PRODUCCIÓN"
    },

    // GRADO 10 - Instructor Sena
    // Segundo Período
    {
        "week": 15,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Exportación y optimización: Extensiones y Formatos, empaquetar, machote.",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "29130105301"
    },
    {
        "week": 16,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Exportación y optimización: Extensiones y Formatos, empaquetar, machote.",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "29130105301"
    },
    {
        "week": 17,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Exportación y optimización: Extensiones y Formatos, empaquetar, machote.",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "29130105301"
    },
    {
        "week": 18,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Exportación y optimización: Extensiones y Formatos, empaquetar, machote.",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "29130105301"
    },
    {
        "week": 19,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Exportación y optimización: Extensiones y Formatos, empaquetar, machote.",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "29130105301"
    },
    {
        "week": 20,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Exportación y optimización: Extensiones y Formatos, empaquetar, machote.",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "29130105301"
    },
    {
        "week": 21,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Elaboración de pruebas de color según requerimiento del cliente.",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "29130105302"
    },
    {
        "week": 22,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Elaboración de pruebas de color según requerimiento del cliente.",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "29130105302"
    },
    {
        "week": 23,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Elaboración de pruebas de color según requerimiento del cliente.",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "29130105302"
    },
    {
        "week": 24,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Elaboración de pruebas de color según requerimiento del cliente.",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "29130105302"
    },
    {
        "week": 25,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Elaboración de pruebas de color según requerimiento del cliente.",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "29130105302"
    },
    {
        "week": 26,
        "grade": "10",
        "period": 2,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Elaboración de pruebas de color según requerimiento del cliente.",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "29130105302"
    },
    {
        "week": 27,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Elaboración de pruebas de color según requerimiento del cliente.",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "29130105302"
    },
    {
        "week": 28,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Elaboración de pruebas de color según requerimiento del cliente.",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "29130105302"
    },
    // GRADO 10 - Instructor Sena 
    // Tercer Período 
    {
        "week": 29,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Evaluación final de composición gráfica y ajustes de diagramación.",
        "competence": "291301051 - PREPARAR IMÁGENES DIGITALES PARA LA DIAGRAMACIÓN DE ACUERDO CON LAS ESPECIFICACIONES SOLICITADAS.",
        "learningResult": "29130105108 - EVALUACIÓN FINAL DE COMPOSICIÓN GRÁFICA Y AJUSTES DE DIAGRAMACIÓN."
    },
    {
        "week": 30,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Evaluación final de composición gráfica y ajustes de diagramación.",
        "competence": "291301051 - PREPARAR IMÁGENES DIGITALES PARA LA DIAGRAMACIÓN DE ACUERDO CON LAS ESPECIFICACIONES SOLICITADAS.",
        "learningResult": "29130105108 - EVALUACIÓN FINAL DE COMPOSICIÓN GRÁFICA Y AJUSTES DE DIAGRAMACIÓN."
    },
    {
        "week": 31,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Evaluación final de composición gráfica y ajustes de diagramación.",
        "competence": "291301051 - PREPARAR IMÁGENES DIGITALES PARA LA DIAGRAMACIÓN DE ACUERDO CON LAS ESPECIFICACIONES SOLICITADAS.",
        "learningResult": "29130105108 - EVALUACIÓN FINAL DE COMPOSICIÓN GRÁFICA Y AJUSTES DE DIAGRAMACIÓN."
    },
    {
        "week": 32,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Evaluación final de composición gráfica y ajustes de diagramación.",
        "competence": "291301051 - PREPARAR IMÁGENES DIGITALES PARA LA DIAGRAMACIÓN DE ACUERDO CON LAS ESPECIFICACIONES SOLICITADAS.",
        "learningResult": "29130105108 - EVALUACIÓN FINAL DE COMPOSICIÓN GRÁFICA Y AJUSTES DE DIAGRAMACIÓN."
    },
    {
        "week": 33,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Evaluación final de composición gráfica y ajustes de diagramación.",
        "competence": "291301051 - PREPARAR IMÁGENES DIGITALES PARA LA DIAGRAMACIÓN DE ACUERDO CON LAS ESPECIFICACIONES SOLICITADAS.",
        "learningResult": "29130105108 - EVALUACIÓN FINAL DE COMPOSICIÓN GRÁFICA Y AJUSTES DE DIAGRAMACIÓN."
    },
    {
        "week": 34,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Evaluación final de composición gráfica y ajustes de diagramación.",
        "competence": "291301051 - PREPARAR IMÁGENES DIGITALES PARA LA DIAGRAMACIÓN DE ACUERDO CON LAS ESPECIFICACIONES SOLICITADAS.",
        "learningResult": "29130105108 - EVALUACIÓN FINAL DE COMPOSICIÓN GRÁFICA Y AJUSTES DE DIAGRAMACIÓN."
    },
    {
        "week": 35,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Evaluación final de composición gráfica y ajustes de diagramación.",
        "competence": "291301051 - PREPARAR IMÁGENES DIGITALES PARA LA DIAGRAMACIÓN DE ACUERDO CON LAS ESPECIFICACIONES SOLICITADAS.",
        "learningResult": "29130105108 - EVALUACIÓN FINAL DE COMPOSICIÓN GRÁFICA Y AJUSTES DE DIAGRAMACIÓN."
    },
    {
        "week": 36,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Presentación de proyectos finales.",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "29130105303 - PRESENTACIÓN DE PROYECTOS FINALES."
    },
    {
        "week": 37,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Presentación de proyectos finales.",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "29130105303 - PRESENTACIÓN DE PROYECTOS FINALES."
    },
    {
        "week": 38,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Presentación de proyectos finales.",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "29130105303 - PRESENTACIÓN DE PROYECTOS FINALES."
    },
    {
        "week": 39,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Presentación de proyectos finales.",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "29130105303 - PRESENTACIÓN DE PROYECTOS FINALES."
    },
    {
        "week": 40,
        "grade": "10",
        "period": 3,
        "role": "instructor",
        "topic": "Illustrator",
        "subtopics": "Presentación de proyectos finales.",
        "competence": "291301053 - ELABORAR PRUEBAS DE COLOR SEGÚN REQUERIMIENTO DEL CLIENTE.",
        "learningResult": "29130105303 - PRESENTACIÓN DE PROYECTOS FINALES."
    },
    // GRADO 11 - Instructor SENA  
    // Primer Período  
    {
        "week": 1,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Photoshop",
        "subtopics": "Introducción a la Edición de Imágenes: Herramientas básicas, capas y ajustes.",
        "competence": "291301061 - UTILIZAR SOFTWARE DE EDICIÓN GRÁFICA.",
        "learningResult": "29130106101 - INTRODUCCIÓN A LA EDICIÓN DE IMÁGENES."
    },
    {
        "week": 2,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Photoshop",
        "subtopics": "Retoque y Manipulación Fotográfica: Máscaras, recortes y fotomontaje.",
        "competence": "291301061 - UTILIZAR SOFTWARE DE EDICIÓN GRÁFICA.",
        "learningResult": "29130106102 - RETOQUE Y MANIPULACIÓN FOTOGRÁFICA."
    },
    {
        "week": 3,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Photoshop",
        "subtopics": "Creación de Efectos Visuales: Filtros, iluminación y texturas.",
        "competence": "291301061 - UTILIZAR SOFTWARE DE EDICIÓN GRÁFICA.",
        "learningResult": "29130106103 - CREACIÓN DE EFECTOS VISUALES."
    },
    {
        "week": 4,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Photoshop",
        "subtopics": "Diseño de Interfaces Gráficas: Botones, fondos y elementos UI/UX.",
        "competence": "291301061 - UTILIZAR SOFTWARE DE EDICIÓN GRÁFICA.",
        "learningResult": "29130106104 - DISEÑO DE INTERFACES GRÁFICAS."
    },
    {
        "week": 5,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Photoshop",
        "subtopics": "Animación en Photoshop: GIFs y banners animados.",
        "competence": "291301061 - UTILIZAR SOFTWARE DE EDICIÓN GRÁFICA.",
        "learningResult": "29130106105 - ANIMACIÓN EN PHOTOSHOP."
    },
    {
        "week": 6,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Photoshop",
        "subtopics": "Creación de Portadas y Publicidad: Diseño para redes y marketing.",
        "competence": "291301061 - UTILIZAR SOFTWARE DE EDICIÓN GRÁFICA.",
        "learningResult": "29130106106 - CREACIÓN DE PORTADAS Y PUBLICIDAD."
    },
    {
        "week": 7,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Photoshop",
        "subtopics": "Optimización de Imágenes para Web: Resolución, formatos y peso.",
        "competence": "291301061 - UTILIZAR SOFTWARE DE EDICIÓN GRÁFICA.",
        "learningResult": "29130106107 - OPTIMIZACIÓN DE IMÁGENES PARA WEB."
    },
    {
        "week": 8,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Photoshop",
        "subtopics": "Proyecto Integrador: Creación de una pieza gráfica completa.",
        "competence": "291301061 - UTILIZAR SOFTWARE DE EDICIÓN GRÁFICA.",
        "learningResult": "29130106108 - PROYECTO INTEGRADOR."
    },
    {
        "week": 9,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Photoshop",
        "subtopics": "Evaluación de Diseño y Ajustes Finales.",
        "competence": "291301061 - UTILIZAR SOFTWARE DE EDICIÓN GRÁFICA.",
        "learningResult": "29130106109 - EVALUACIÓN DE DISEÑO Y AJUSTES FINALES."
    },
    {
        "week": 10,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Photoshop",
        "subtopics": "Presentación de Proyectos.",
        "competence": "291301061 - UTILIZAR SOFTWARE DE EDICIÓN GRÁFICA.",
        "learningResult": "29130106110 - PRESENTACIÓN DE PROYECTOS."
    },
    {
        "week": 11,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Premiere Pro",
        "subtopics": "Edición de Video: Importación, línea de tiempo y cortes.",
        "competence": "291301062 - UTILIZAR SOFTWARE DE EDICIÓN DE VIDEO.",
        "learningResult": "29130106201 - EDICIÓN DE VIDEO."
    },
    {
        "week": 12,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Premiere Pro",
        "subtopics": "Montaje de Secuencias: Transiciones y efectos básicos.",
        "competence": "291301062 - UTILIZAR SOFTWARE DE EDICIÓN DE VIDEO.",
        "learningResult": "29130106202 - MONTAJE DE SECUENCIAS."
    },
    {
        "week": 13,
        "grade": "11",
        "period": 1,
        "role": "instructor",
        "topic": "Premiere Pro",
        "subtopics": "Integración de Audio: Sincronización, edición y efectos de sonido.",
        "competence": "291301062 - UTILIZAR SOFTWARE DE EDICIÓN DE VIDEO.",
        "learningResult": "29130106203 - INTEGRACIÓN DE AUDIO."
    },
    {
        "week": 14,
        "grade": "11",
        "period": 2,
        "role": "instructor",
        "topic": "Premiere Pro",
        "subtopics": "Corrección de Color: Ajustes de luz y colorimetría.",
        "competence": "291301062 - UTILIZAR SOFTWARE DE EDICIÓN DE VIDEO.",
        "learningResult": "29130106204 - CORRECCIÓN DE COLOR."
    },
    // GRADO 11 - Instructor SENA  
    // Segundo Período  
    {
        "week": 15,
        "grade": "11",
        "period": 2,
        "role": "instructor",
        "topic": "Premiere Pro",
        "subtopics": "Exportación de Videos: Formatos y configuraciones óptimas.",
        "competence": "291301062 - UTILIZAR SOFTWARE DE EDICIÓN DE VIDEO.",
        "learningResult": "29130106205 - EXPORTACIÓN DE VIDEOS."
    },
    {
        "week": 16,
        "grade": "11",
        "period": 2,
        "role": "instructor",
        "topic": "Premiere Pro",
        "subtopics": "Edición avanzada: Técnicas de corte dinámico.",
        "competence": "291301062 - UTILIZAR SOFTWARE DE EDICIÓN DE VIDEO.",
        "learningResult": "29130106206 - EDICIÓN AVANZADA."
    },
    {
        "week": 17,
        "grade": "11",
        "period": 2,
        "role": "instructor",
        "topic": "Premiere Pro",
        "subtopics": "Efectos y transiciones avanzadas.",
        "competence": "291301062 - UTILIZAR SOFTWARE DE EDICIÓN DE VIDEO.",
        "learningResult": "29130106207 - EFECTOS Y TRANSICIONES AVANZADAS."
    },
    {
        "week": 18,
        "grade": "11",
        "period": 2,
        "role": "instructor",
        "topic": "Premiere Pro",
        "subtopics": "Introducción a Motion Graphics con After Effects.",
        "competence": "291301062 - UTILIZAR SOFTWARE DE EDICIÓN DE VIDEO.",
        "learningResult": "29130106208 - INTRODUCCIÓN A MOTION GRAPHICS."
    },
    {
        "week": 19,
        "grade": "11",
        "period": 2,
        "role": "instructor",
        "topic": "After Effects",
        "subtopics": "Animación de texto y gráficos.",
        "competence": "291301062 - UTILIZAR SOFTWARE DE EDICIÓN DE VIDEO.",
        "learningResult": "29130106209 - ANIMACIÓN DE TEXTO Y GRÁFICOS."
    },
    {
        "week": 20,
        "grade": "11",
        "period": 2,
        "role": "instructor",
        "topic": "After Effects",
        "subtopics": "Creación de efectos especiales.",
        "competence": "291301062 - UTILIZAR SOFTWARE DE EDICIÓN DE VIDEO.",
        "learningResult": "29130106210 - CREACIÓN DE EFECTOS ESPECIALES."
    },
    {
        "week": 21,
        "grade": "11",
        "period": 2,
        "role": "instructor",
        "topic": "After Effects",
        "subtopics": "Animaciones avanzadas y cinemática.",
        "competence": "291301062 - UTILIZAR SOFTWARE DE EDICIÓN DE VIDEO.",
        "learningResult": "29130106211 - ANIMACIONES AVANZADAS Y CINEMÁTICA."
    },
    {
        "week": 22,
        "grade": "11",
        "period": 2,
        "role": "instructor",
        "topic": "After Effects",
        "subtopics": "Integración de elementos 3D.",
        "competence": "291301062 - UTILIZAR SOFTWARE DE EDICIÓN DE VIDEO.",
        "learningResult": "29130106212 - INTEGRACIÓN DE ELEMENTOS 3D."
    },
    {
        "week": 23,
        "grade": "11",
        "period": 2,
        "role": "instructor",
        "topic": "Premiere Pro",
        "subtopics": "Flujo de trabajo para edición profesional.",
        "competence": "291301062 - UTILIZAR SOFTWARE DE EDICIÓN DE VIDEO.",
        "learningResult": "29130106213 - FLUJO DE TRABAJO PROFESIONAL."
    },
    {
        "week": 24,
        "grade": "11",
        "period": 2,
        "role": "instructor",
        "topic": "Premiere Pro",
        "subtopics": "Narrativa audiovisual y edición en documentales.",
        "competence": "291301062 - UTILIZAR SOFTWARE DE EDICIÓN DE VIDEO.",
        "learningResult": "29130106214 - NARRATIVA AUDIOVISUAL."
    },
    {
        "week": 25,
        "grade": "11",
        "period": 2,
        "role": "instructor",
        "topic": "Premiere Pro",
        "subtopics": "Proyecto intermedio: Creación de un cortometraje.",
        "competence": "291301062 - UTILIZAR SOFTWARE DE EDICIÓN DE VIDEO.",
        "learningResult": "29130106215 - PROYECTO INTERMEDIO."
    },
    {
        "week": 26,
        "grade": "11",
        "period": 2,
        "role": "instructor",
        "topic": "Proyecto",
        "subtopics": "Planificación y conceptualización del proyecto final.",
        "competence": "291301063 - DESARROLLAR PROYECTOS AUDIOVISUALES.",
        "learningResult": "29130106301 - PLANIFICACIÓN DEL PROYECTO."
    },
    {
        "week": 27,
        "grade": "11",
        "period": 3,
        "role": "instructor",
        "topic": "Proyecto",
        "subtopics": "Desarrollo del guion y storyboard.",
        "competence": "291301063 - DESARROLLAR PROYECTOS AUDIOVISUALES.",
        "learningResult": "29130106302 - DESARROLLO DEL GUION Y STORYBOARD."
    },
    {
        "week": 28,
        "grade": "11",
        "period": 3,
        "role": "instructor",
        "topic": "Proyecto",
        "subtopics": "Producción de contenido visual y audiovisual.",
        "competence": "291301063 - DESARROLLAR PROYECTOS AUDIOVISUALES.",
        "learningResult": "29130106303 - PRODUCCIÓN DE CONTENIDO VISUAL Y AUDIOVISUAL."
    },
    // GRADO 11 - Instructor SENA  
    // Tercer Período  
    {
        "week": 29,
        "grade": "11",
        "period": 3,
        "role": "instructor",
        "topic": "Proyecto",
        "subtopics": "Diseño de identidad gráfica del proyecto.",
        "competence": "291301063 - DESARROLLAR PROYECTOS AUDIOVISUALES.",
        "learningResult": "29130106304 - DISEÑO DE IDENTIDAD GRÁFICA."
    },
    {
        "week": 30,
        "grade": "11",
        "period": 3,
        "role": "instructor",
        "topic": "Proyecto",
        "subtopics": "Edición inicial y ajustes de contenido.",
        "competence": "291301063 - DESARROLLAR PROYECTOS AUDIOVISUALES.",
        "learningResult": "29130106305 - EDICIÓN Y AJUSTES INICIALES."
    },
    {
        "week": 31,
        "grade": "11",
        "period": 3,
        "role": "instructor",
        "topic": "Proyecto",
        "subtopics": "Revisión intermedia y correcciones.",
        "competence": "291301063 - DESARROLLAR PROYECTOS AUDIOVISUALES.",
        "learningResult": "29130106306 - REVISIÓN INTERMEDIA."
    },
    {
        "week": 32,
        "grade": "11",
        "period": 3,
        "role": "instructor",
        "topic": "Proyecto",
        "subtopics": "Producción avanzada: Integración de elementos gráficos y efectos.",
        "competence": "291301063 - DESARROLLAR PROYECTOS AUDIOVISUALES.",
        "learningResult": "29130106307 - PRODUCCIÓN AVANZADA."
    },
    {
        "week": 33,
        "grade": "11",
        "period": 3,
        "role": "instructor",
        "topic": "Proyecto",
        "subtopics": "Postproducción: Color, sonido y retoques finales.",
        "competence": "291301063 - DESARROLLAR PROYECTOS AUDIOVISUALES.",
        "learningResult": "29130106308 - POSTPRODUCCIÓN."
    },
    {
        "week": 34,
        "grade": "11",
        "period": 3,
        "role": "instructor",
        "topic": "Proyecto",
        "subtopics": "Exportación y formatos finales para distintas plataformas.",
        "competence": "291301063 - DESARROLLAR PROYECTOS AUDIOVISUALES.",
        "learningResult": "29130106309 - EXPORTACIÓN Y FORMATOS FINALES."
    },
    {
        "week": 35,
        "grade": "11",
        "period": 3,
        "role": "instructor",
        "topic": "Proyecto",
        "subtopics": "Evaluación preliminar y ajustes finales.",
        "competence": "291301063 - DESARROLLAR PROYECTOS AUDIOVISUALES.",
        "learningResult": "29130106310 - EVALUACIÓN PRELIMINAR."
    },
    {
        "week": 36,
        "grade": "11",
        "period": 3,
        "role": "instructor",
        "topic": "Proyecto",
        "subtopics": "Desarrollo de los primeros prototipos multimedia.",
        "competence": "291301063 - DESARROLLAR PROYECTOS AUDIOVISUALES.",
        "learningResult": "29130106311 - DESARROLLO DE PROTOTIPOS MULTIMEDIA."
    },
    {
        "week": 37,
        "grade": "11",
        "period": 3,
        "role": "instructor",
        "topic": "Proyecto",
        "subtopics": "Revisión y ajustes según feedback del instructor.",
        "competence": "291301063 - DESARROLLAR PROYECTOS AUDIOVISUALES.",
        "learningResult": "29130106312 - AJUSTES SEGÚN FEEDBACK."
    },
    {
        "week": 38,
        "grade": "11",
        "period": 3,
        "role": "instructor",
        "topic": "Proyecto",
        "subtopics": "Presentación y evaluación del proyecto final.",
        "competence": "291301063 - DESARROLLAR PROYECTOS AUDIOVISUALES.",
        "learningResult": "29130106313 - PRESENTACIÓN Y EVALUACIÓN FINAL."
    },
    {
        "week": 39,
        "grade": "11",
        "period": 3,
        "role": "instructor",
        "topic": "Proyecto",
        "subtopics": "Preparación para exhibición o portafolio.",
        "competence": "291301063 - DESARROLLAR PROYECTOS AUDIOVISUALES.",
        "learningResult": "29130106314 - PREPARACIÓN PARA EXHIBICIÓN."
    },
    {
        "week": 40,
        "grade": "11",
        "period": 3,
        "role": "instructor",
        "topic": "Proyecto",
        "subtopics": "Autoevaluación y cierre de curso.",
        "competence": "291301063 - DESARROLLAR PROYECTOS AUDIOVISUALES.",
        "learningResult": "29130106315 - AUTOEVALUACIÓN Y CIERRE."
    },
    // fin de los períodos

]
// Información de los períodos
const periodInfo = [
    {
        period: 1,
        name: "PRIMER PERÍODO",
        dates: "26 de enero - 1 de mayo",
        weeks: "Semanas 1 - 13"
    },
    {
        period: 2,
        name: "SEGUNDO PERÍODO",
        dates: "04 de mayo - 21 de agosto",
        weeks: "Semanas 14 - 26"
    },
    {
        period: 3,
        name: "TERCER PERÍODO",
        dates: "24 de agosto - 04 de diciembre",
        weeks: "Semanas 27 - 40"
    }
];

const weekDates = {
    1: "26 al 30 de enero", 2: "02 al 06 de febrero", 3: "09 al 13 de febrero", 4: "16 al 20 de febrero", 5: "23 al 27 de febrero",
    6: "02 al 06 de marzo", 7: "09 al 13 de marzo", 8: "16 al 20 de marzo", 9: "23 al 27 de marzo", 10: "06 al 10 de abril",
    11: "13 al 17 de abril", 12: "20 al 24 de abril", 13: "27 de abril al 01 de mayo", 14: "04 al 08 de mayo", 15: "11 al 15 de mayo",
    16: "18 al 22 de mayo", 17: "25 al 29 de mayo", 18: "01 al 05 de junio", 19: "08 al 12 de junio", 20: "15 al 19 de junio",
    21: "13 al 17 de julio", 22: "20 al 24 de julio", 23: "27 al 31 de julio", 24: "03 al 07 de agosto", 25: "10 al 14 de agosto",
    26: "17 al 21 de agosto", 27: "24 al 28 de agosto", 28: "31 de agosto al 04 de sep", 29: "07 al 11 de septiembre", 30: "14 al 18 de septiembre",
    31: "21 al 25 de septiembre", 32: "28 de sep al 02 de octubre", 33: "12 al 16 de octubre", 34: "19 al 23 de octubre", 35: "26 al 30 de octubre",
    36: "02 al 06 de noviembre", 37: "09 al 13 de noviembre", 38: "16 al 20 de noviembre", 39: "23 al 27 de noviembre", 40: "30 de nov al 04 de dic"
};

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
    modalWeek.textContent = `Semana ${course.week} (${weekDates[course.week] || ''})`;
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
        item.week + " (" + (weekDates[item.week] || "") + ")", item.period, item.grade, item.role, item.topic, item.subtopics
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