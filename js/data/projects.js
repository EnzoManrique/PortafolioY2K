// =========================================
// SISTEMA DINÁMICO DE CERTIFICADOS
// =========================================

// Cuando agregues un pdf y su captura de pantalla a la carpeta assets/img/certificados,
// simplemente escribe sus nombres exactos aquí abajo:
const misCertificados = [
    {
        pdf: 'curso_fullstack.pdf', // <-- Tu certificado real para descargar
        img: 'curso_fullstack.png'  // <-- La captura de pantalla que tomaste (puede ser .png o .jpg)
    }
];

// Base de datos de proyectos simulada
const projectsDb = {
    'simulador-fichas': {
        windowTitle: 'Detalles del Proyecto: Simulador_Fichas.exe',
        mainTitle: 'Simulador de Fichas de Póker',
        description: 'Una aplicación robusta para la gestión y simulación de stacks de fichas de póker. Permite visualizar, calcular balances y organizar distribuciones de fichas con exactitud matemática orientada a torneos de póker texas holdem.',
        techStack: 'Java (Spring Boot), Hibernate, PostgreSQL, JWT, Docker, Git.',
        role: 'Desarrollador Backend Independiente',
        githubLink: '#',
        docLink: '#',
        images: [] // Sin imágenes todavía, usará placeholders
    },
    'gestor-stock': {
        windowTitle: 'Detalles del Proyecto: Gestor_Stock.php',
        mainTitle: 'Gestor Stock e Inventario',
        description: `Este sistema de Gestión de Ventas y Control de Inventario nace desde un proyecto academico, ha sido diseñado como una solución web integral para negocios
        con el propósito principal de digitalizar la operación comercial, garantizar la integridad del stock
        y ofrecer reportes precisos para la toma de decisiones.<br><br>
        <b>Gestión de Inventario:</b> Control detallado con alertas automáticas cuando las existencias son bajas.<br><br>
        <b>Operación de Ventas:</b> Registro multi-producto con cálculo automático de totales y validación de disponibilidad en tiempo real.<br><br>
        <b>Administración de Accesos:</b> Estructura basada en roles para separar las funciones del Administrador (control total) de las del Empleado (operativo).<br><br>
        El proyecto sigue el patrón de diseño MVC (Modelo-Vista-Controlador), lo que separa la lógica de negocio de la interfaz de usuario, facilitando el mantenimiento.<br><br>
        <b>Stack Tecnológico:</b> Combina un frontend dinámico en JavaScript (AJAX/Fetch) con un backend en PHP 7.4 y una base de datos MySQL 8.0. <br><br>
        <b>Comunicación:</b> Utiliza peticiones asíncronas para actualizar la información sin necesidad de recargar la página completa, mejorando la experiencia del usuario.<br><br>
        El núcleo del sistema utiliza MySQL 8.0 bajo un modelo normalizado para eliminar redundancias. La lógica de negocio no solo reside en el código, sino que está integrada en la base de datos mediante:<br><br> 
        -Triggers antes y despues de realizar una venta para validar y descontar stock, calcular subtotales y actualizar el total de la venta. <br><br>
        -Vistas para generar reportes consolidados y alertas automáticas de stock bajo para el Dashboard
        -Procedimientos guardados que optimizan el cálculo de ganancias netas y facturación por rangos de fechas en una sola consulta<br><br>`,
        techStack: 'PHP nativo, MySQL, HTML5, CSS3, JavaScript (Vanilla).',
        role: 'Desarrollador Full Stack Jr.',
        githubLink: 'https://github.com/EnzoManrique/Gestor-Stock-Ventas',
        docLink: 'https://github.com/EnzoManrique/Gestor-Stock-Ventas/blob/main/README.md',
        images: [
            'assets/img/proyectoUch/index.png',
            'assets/img/proyectoUch/inventario.png',
            'assets/img/proyectoUch/realizarVenta.png',
            'assets/img/proyectoUch/clientes.png',
            'assets/img/proyectoUch/estadisticas.png',
            'assets/img/proyectoUch/ventas.png'
        ]
    },
    'ttm-apk': {
        windowTitle: 'Detalles del Proyecto: TTM.apk (App Android)',
        mainTitle: 'TTM - Trailer Tracker Manager',
        description: `Esta aplicación móvil nativa nace de la necesidad de digitalizar las operaciones comerciales en terreno. 
        Ha sido diseñada como una solución Android integral para negocios con el propósito principal de agilizar la creación de pre-ventas (cotizaciones), 
        garantizar la disponibilidad de stock sin depender de internet y ofrecer reportes estadísticos visuales.<br><br>

        <b>Catálogo y Cotizaciones:</b> Control detallado de inventario y listas de precios múltiples en tiempo real, permitiendo seleccionar productos y 
        generar documentos profesionales (en formato PDF o Excel) listos para enviar por WhatsApp al instante.<br><br>

        <b>Arquitectura Offline-First:</b> El sistema no necesita conexión permanente para operar. Las lecturas, escrituras y el descuento de stock ocurren en una base de datos local rápida,
        sincronizando copias de seguridad a Google Drive de forma invisible en segundo plano solo cuando hay red.<br><br>

        El proyecto sigue el patrón de diseño oficial recomendado por Google: MVVM (Model-View-ViewModel). Esto separa completamente la lógica visual de los datos de negocio, 
        previniendo cierres inesperados de la app y garantizando un código totalmente mantenible.<br><br>

        <b>Stack Tecnológico:</b> Combina una interfaz gráfica puramente declarativa y fluida construida en Jetpack Compose (Kotlin) con estética Material Design 3, y un backend local en SQLite/Room optimizado para dispositivos móviles.<br><br>

        <b>Comunicación:</b> Utiliza Kotlin Coroutines / Flows para manejar peticiones asíncronas y observar los cambios de datos en tiempo real sin bloquear la pantalla principal ni afectar la fluidez del usuario.<br><br>

        El núcleo de persistencia utiliza Room Database estructurado relacionalmente para cruzar clientes, productos y pedidos al instante. La lógica no solo reside en la vista, sino que se apoya en operaciones locales profundas:<br><br>

        -Consultas transaccionales en los DAOs que actualizan dinámicamente el precio total del carro virtual según cambien los ítems.<br><br>
        -Visualizaciones analíticas que compilan históricos de venta mediante gráficas de Vico Charts sin requerir tiempos de carga web molestos.<br><br>
        -Archivado nativo usando librerías (iTextG, Apache POI) para escribir reportes binarios directo al almacenamiento del teléfono para dar absoluta autonomía comercial.<br><br>`,
        techStack: 'Kotlin Nativo, Jetpack Compose, Arch Components (Room, ViewModel, DataStore, WorkManager), iTextG SDK, Google Drive API.',
        role: 'Desarrollador Mobile Android Jr.',
        githubLink: 'https://github.com/EnzoManrique/TrailerApp',
        docLink: 'https://github.com/EnzoManrique/TrailerApp/blob/main/README.md',
        images: ['assets/img/proyectoTTM/home.png',
            'assets/img/proyectoTTM/home2.png',
            'assets/img/proyectoTTM/inventario.png',
            'assets/img/proyectoTTM/venta.png',
            'assets/img/proyectoTTM/generarVenta.png',
            'assets/img/proyectoTTM/promocion.png',
            'assets/img/proyectoTTM/edicionPromocion.png',
        ]
    }
};
