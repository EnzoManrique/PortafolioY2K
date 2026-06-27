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
        description: `Una aplicación robusta para la gestión y simulación de stacks de fichas de póker, orientada a partidas y torneos de Texas Hold'em. Diseñada con un fuerte enfoque en escalabilidad, calidad de software y buenas prácticas backend.<br><br>
        <b>Arquitectura y Patrones de Diseño:</b><br>
        - <b>Patrones GoF (Gang of Four):</b> Aplicación de patrones clásicos para resolver la lógica compleja. Uso del patrón <b>State</b> para el ciclo de vida y los estados de las salas de juego, <b>Strategy</b> para ejecutar dinámicamente las reglas de validación de usuarios y códigos de sala, y <b>Builder</b> para la creación limpia e inmutable de objetos.<br>
        - <b>Arquitectura multicapa (N-Tier):</b> Separación estricta de responsabilidades (Controladores, Servicios, Repositorios) garantizando un código modular e inyectando dependencias mediante el contenedor <b>Singleton</b> de Spring (IoC).<br>
        - <b>Patrones Estructurales y de Comportamiento:</b> Uso intensivo del patrón <b>DTO (Data Transfer Object)</b> para proteger el dominio, y <b>Chain of Responsibility</b> nativo en los filtros de Spring Security para la autorización de tokens.<br>
        - <b>Manejo Centralizado de Excepciones:</b> Respuestas API estandarizadas y consistentes mediante <code>@ControllerAdvice</code> para un control robusto de errores HTTP.<br><br>
        <b>Gestión de Salas (Rooms):</b> Sistema avanzado de validación de salas mediante códigos únicos. Los jugadores se unen a partidas privadas con validaciones transaccionales de capacidad y sincronización de estado.<br><br>
        <b>Identidad y Seguridad (JWT):</b> Flujo de autenticación <i>stateless</i> que protege los endpoints, garantizando que cada acción dentro del juego esté firmada y estrictamente asociada al jugador correspondiente.<br><br>
        <b>Estado Actual:</b> El núcleo del backend se encuentra completamente operativo, mientras que el cliente Frontend está en proceso de rediseño de experiencia de usuario (UX/UI).`,
        techStack: 'Java (Spring Boot), Spring Security, Hibernate, PostgreSQL, JWT, Arquitectura REST, Docker, Git.',
        role: 'Desarrollador Backend Integrador',
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
    },
    'agent-botanic': {
        windowTitle: 'Detalles del Proyecto: Agente_Botanico.exe',
        mainTitle: 'Agente Botánico',
        description: `Asistente personal para el cuidado de plantas, pensado mobile-first y potenciado por inteligencia artificial. Identifica plantas desde una foto, recuerda los riegos, alerta sobre eventos climáticos extremos y sugiere productos reales del catálogo de Mercado Libre Argentina.<br><br>
        <b>Inteligencia Artificial Multimodal:</b> Utiliza el ecosistema de Vercel AI SDK junto con Gemini 2.5 Flash para reconocimiento visual de plantas y GPT-4o-mini para el agente conversacional, gestionado a través de Vercel AI Gateway.<br><br>
        <b>Interacciones Inteligentes:</b> El chat incluye tools que permiten al agente consultar el clima local en tiempo real (Open-Meteo), listar tus plantas, diagnosticar problemas y mostrar productos sugeridos en un carrusel dinámico.<br><br>
        <b>Arquitectura Serverless:</b> Construido con Next.js 16 (App Router, Server Actions) y React 19. Persistencia de datos mediante Neon Postgres sin ORM, autenticación robusta con Auth.js (OAuth/Credenciales), y soporte i18n para inglés y español.<br><br>
        <b>PWA y Experiencia Mobile:</b> Diseño mobile-first fluido utilizando Tailwind CSS y shadcn/ui, instalable como aplicación nativa (PWA) para estar siempre a mano.`,
        techStack: 'Next.js 16, React 19, Vercel AI SDK, Gemini Vision, Neon Postgres, Tailwind CSS, Auth.js.',
        role: 'Desarrollador Full Stack / AI Engineer',
        githubLink: 'https://github.com/EnzoManrique/agent-botanic',
        docLink: 'https://agent-botanic.vercel.app/',
        images: [
            'assets/img/proyectoBotanic/inicio.png',
            'assets/img/proyectoBotanic/inicio2.png',
            'assets/img/proyectoBotanic/jardin.png',
            'assets/img/proyectoBotanic/detalle_planta.png',
            'assets/img/proyectoBotanic/escanear.png',
            'assets/img/proyectoBotanic/escanear2.png',
            'assets/img/proyectoBotanic/escanear3.png',
            'assets/img/proyectoBotanic/agente.png'
        ]
    }
};
