document.addEventListener("DOMContentLoaded", () => {
    initBubbles();
    initNavigation();

    // Carga la sección de inicio con una pequeña demora para que corra coordinado con la aparición de la ventana
    setTimeout(() => {
        loadContent('home');
    }, 400);
});

// Contorno de HTML en template strings para cada sección
const contentData = {
    home: `
        <div class="msn-container">
            <!-- 1. Encabezado de Perfil (Estilo MSN) -->
            <div class="msn-header">
                <div class="msn-avatar-container">
                    <div class="msn-avatar">
                        <img src="assets/img/mi-avatar.jpeg" alt="Avatar de Enzo">
                    </div>
                    <div class="msn-status-dot"></div>
                </div>
                
                <div class="msn-info">
                    <h2 class="msn-nickname">Enzo <span class="msn-status-text">(Conectado)</span></h2>
                    <p class="msn-personal-msg">🚀 Construyendo código en Java y Spring || Buscando mi primer rol en IT || Games & Code 24/7</p>
                    <p class="msn-listening-msg">🎵 Escuchando: Here Come The Sun - Remastered 2009 - The Beatles || 🎮 Counter-Strike (Dust 2)</p>
                </div>
            </div>

            <!-- 2. Ventana de Historial de Chat (La Biografía) -->
            <div class="msn-chat-window">
                <div class="msn-chat-scroll">
                    <div class="msn-chat-nudge">
                        <span style="color:gray">(Zumbido)</span> Enzo te acaba de enviar un zumbido!
                    </div>
                    
                    <div class="msn-msg-group">
                        <span class="msn-sender">Enzo dice:</span>
                        <div class="msn-bubble">
                            ¡Hola! Soy desarrollador backend especializado en Java y el ecosistema Spring. Me apasiona resolver problemas lógicos y crear estructuras robustas.
                        </div>
                    </div>
                    
                    <div class="msn-msg-group">
                        <span class="msn-sender">Enzo dice:</span>
                        <div class="msn-bubble">
                            Mi formación combina lo mejor de dos mundos: la base analítica de la Licenciatura en Sistemas 
                            (estoy cursando el 4to año en la Univ. Champagnat)
                            y la agilidad práctica de un Bootcamp Full Stack de 600hs.
                        </div>
                    </div>
                    
                    <div class="msn-msg-group">
                        <span class="msn-sender">Enzo dice:</span>
                        <div class="msn-bubble">
                            A nivel tecnológico, mi terreno natural es el Backend: respiro Java, Spring Boot, PHP y SQL (MySQL), y 
                            actualmente estoy integrando Docker y Spring Security a mi arsenal. Para el Front-End, soy cien por ciento práctico: 
                            me apalanco fuertemente en herramientas de IA Generativa. Esto me permite prototipar interfaces ágiles y funcionales en tiempo récord,
                            dejándome libre para concentrarme en lo que realmente importa: la lógica de negocio, la arquitectura y los datos
                        </div>
                    </div>

                    <div class="msn-msg-group">
                        <span class="msn-sender">Enzo dice:</span>
                        <div class="msn-bubble">
                            Tengo un perfil técnico dual. Por un lado, me encanta construir soluciones desde cero y por el otro, disfruto muchísimo analizando y 
                            optimizando procesos que ya existen, buscando
                            fallos y usando herramientas de IA para hacer los sistemas más eficientes.
                        </div>
                    </div>
                    
                    <div class="msn-msg-group">
                        <span class="msn-sender">Enzo dice:</span>
                        <div class="msn-bubble">
                            Creo firmemente en la mejora continua. Cuando no estoy tirando código, estoy metido de lleno perfeccionando mi inglés técnico
                            (actualmente nivel A2) en el Master English Center.
                        </div>
                    </div>

                    <div class="msn-msg-group">
                        <span class="msn-sender">Enzo dice:</span>
                        <div class="msn-bubble">
                            Y cuando finalmente me desconecto de las pantallas... , me conecto a otras. Soy un gran fan de la 
                            fotografía y del buen cine. En mis ratos libres me vas a encontrar rankeando en Counter-Strike
                            o relajando la mente mientras mezclo un poco de Tech House y Trance
                        </div>
                    </div>    
                    
                </div>
            </div>
        </div>
    `,
    projects: `
        <div class="explorer-container">
            <!-- 1. Barra de Navegación Superior -->
            <div class="explorer-toolbar">
                <div class="explorer-address-bar">
                    <span class="explorer-folder-icon">📁</span>
                    <span class="explorer-path">C:\\SISTEMA\\PORTAFOLIO\\PROYECTOS</span>
                </div>
                <div class="explorer-view-controls">
                    <button class="explorer-btn" title="Vista de Miniaturas">▀</button>
                    <button class="explorer-btn active" title="Vista de Detalles">≡</button>
                    <button class="explorer-btn" title="Opciones">▼</button>
                </div>
            </div>

            <!-- Área desplazable del explorador -->
            <div class="explorer-content-area">
                <!-- 2. Cuadrícula de Archivos (Grid de Proyectos) -->
                <div class="explorer-grid">
                    
                    <!-- Archivo 1 -->
                    <div class="explorer-item" data-id="simulador-fichas">
                        <div class="explorer-icon-box">
                            <img src="" alt="" class="explorer-placeholder-icon" style="background: linear-gradient(135deg, #ff9a9a, #ff0000);">
                        </div>
                        <div class="explorer-item-details">
                            <span class="explorer-item-name">Simulador_Fichas.exe</span>
                            <span class="explorer-item-type">Tipo: App Java</span>
                        </div>
                    </div>
                    
                    <!-- Archivo 2 -->
                    <div class="explorer-item" data-id="gestor-stock">
                        <div class="explorer-icon-box">
                            <img src="" alt="" class="explorer-placeholder-icon" style="background: linear-gradient(135deg, #a8ff78, #78ffd6);">
                        </div>
                        <div class="explorer-item-details">
                            <span class="explorer-item-name">Gestor Stock e Inventario.php</span>
                            <span class="explorer-item-type">Tipo:PHP y MySQL</span>
                        </div>
                    </div>
                    
                    <!-- Archivo 3 -->
                    <div class="explorer-item" data-id="ttm-apk">
                        <div class="explorer-icon-box">
                            <img src="" alt="" class="explorer-placeholder-icon" style="background: linear-gradient(135deg, #74ebd5, #9face6);">
                        </div>
                        <div class="explorer-item-details">
                            <span class="explorer-item-name">TTM.apk</span>
                            <span class="explorer-item-type">Tipo: App Android</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,
    contact: `
        <h1 class="aero-title">Contacto</h1>
        <div class="aero-content-box">
            <p>¿Interesado en colaborar en algún proyecto de software o tienes alguna pregunta técnica? Puedes contactarme a través de:</p>
            <ul class="contact-list">
                <li><strong>Email:</strong> enzo.dev@example.com</li>
                <li><strong>GitHub:</strong> github.com/enzodev</li>
                <li><strong>LinkedIn:</strong> linkedin.com/in/enzo-developer</li>
            </ul>
        </div>
    `
};

// Lógica para cambiar dinámicamente el contenido
function loadContent(target) {
    const screenContent = document.getElementById('screen-content');

    // Animación de desvanecimiento rápida
    screenContent.style.opacity = '0';

    setTimeout(() => {
        screenContent.innerHTML = contentData[target];
        screenContent.style.transition = 'opacity 0.4s ease-in-out';
        screenContent.style.opacity = '1';

        // Reset scroll position on content load
        screenContent.scrollTop = 0;

        // Si cargamos la pantalla de proyectos, reinicializar botones de detalles (Modal)
        if (target === 'projects') {
            updateModalListeners();
        }
    }, 200);
}

// Inicialización de la Botonera Reproductora Inferior
function initNavigation() {
    const buttons = document.querySelectorAll('.glossy-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase activa de todos para efecto de toggle visual
            buttons.forEach(b => b.classList.remove('active'));

            // Añadir al clickeado
            btn.classList.add('active');

            const target = btn.getAttribute('data-target');
            loadContent(target);
        });
    });
}

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
        El proyecto sigue el patrón de diseño MVC (Modelo-Vista-Controlador), lo que separa la lógica de negocio de la interfaz de usuario, facilitando el mantenimiento.
        <b>Stack Tecnológico:</b> Combina un frontend dinámico en JavaScript (AJAX/Fetch) con un backend en PHP 7.4 y una base de datos MySQL 8.0. <br><br>
        <b>Comunicación:</b> Utiliza peticiones asíncronas para actualizar la información sin necesidad de recargar la página completa, mejorando la experiencia del usuario.<br><br>
        El núcleo del sistema utiliza MySQL 8.0 bajo un modelo normalizado para eliminar redundancias. La lógica de negocio no solo reside en el código, sino que está integrada en la base de datos mediante:<br><br> 
        -Triggers antes y despues de realizar una venta para validar y descontar stock, calcular subtotales y actualizar el total de la venta. <br><br>
        -Vistas para generar reportes consolidados y alertas automáticas de stock bajo para el Dashboard
        -Procedimientos guardados que optimizan el cálculo de ganancias netas y facturación por rangos de fechas en una sola consulta<br><br>`,
        techStack: 'PHP nativo, MySQL, HTML5, CSS3, JavaScript (Vanilla).',
        role: 'Desarrollador Full Stack Jr.',
        githubLink: '#',
        docLink: '#',
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
        description: 'Aplicación nativa para Android diseñada para la logística, seguimiento, mantenimiento y control de unidades de transporte pesado (trailers). Pensada para uso offline con sincronización local de bases de datos.',
        techStack: 'Kotlin, Jetpack Compose, UI Material 3, Room Database, Coroutines.',
        role: 'Desarrollador Android Mobile',
        githubLink: '#',
        docLink: '#',
        images: []
    }
};

// Inicialización de Modal (Proyectos)
function initProyectosModal() {
    const modalOverlay = document.getElementById('project-modal-overlay');
    const closeBtn = document.getElementById('close-modal-btn');

    // Referencias a los elementos del modal a rellenar dinámicamente
    const modalWindowTitle = document.querySelector('.modal-title');
    const modalMainTitle = document.querySelector('.modal-main-title');
    const modalDescText = document.querySelector('.modal-desc-text');
    const modalTechStack = document.querySelector('.modal-specs-box p:nth-child(1)');
    const modalRole = document.querySelector('.modal-specs-box p:nth-child(2)');
    const modalGalleryGrid = document.querySelector('.modal-gallery-grid');

    // Función para añadir los event listeners iterando los items cada vez que se carga la pestaña
    function attachItemListeners() {
        const items = document.querySelectorAll('.explorer-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                const projectId = item.getAttribute('data-id');
                const pData = projectsDb[projectId];

                if (pData) {
                    // Update DOM
                    modalWindowTitle.innerHTML = `<span class="icon">📄</span> ${pData.windowTitle}`;
                    modalMainTitle.textContent = pData.mainTitle;
                    modalDescText.innerHTML = pData.description;
                    modalTechStack.innerHTML = `<strong>Pila Tecnológica:</strong> ${pData.techStack}`;
                    modalRole.innerHTML = `<strong>Rol:</strong> ${pData.role}`;

                    // Actualizar Galería
                    if (pData.images && pData.images.length > 0) {
                        // Pasamos el array de imagenes en json a las miniaturas a través de atributos de datos
                        const imgsJson = encodeURIComponent(JSON.stringify(pData.images));

                        // Si hay al menos 1 imagen
                        let mainImgHtml = `<div class="gallery-main-img" onclick="openGallery('${imgsJson}', 0)" style="background-image: url('${pData.images[0]}'); background-size: cover; background-position: top center; border: 1px solid rgba(135,206,250,0.8); box-shadow: 0 4px 8px rgba(0,0,0,0.1);"></div>`;
                        let sideImgsHtml = '<div class="gallery-side-imgs">';

                        // Si hay al menos 2 imágenes
                        if (pData.images.length >= 2) {
                            sideImgsHtml += `<div class="gallery-thumb" onclick="openGallery('${imgsJson}', 1)" style="background-image: url('${pData.images[1]}'); background-size: cover; background-position: top center; border: 1px solid rgba(135,206,250,0.8); box-shadow: 0 4px 8px rgba(0,0,0,0.1);"></div>`;
                        } else {
                            sideImgsHtml += `<div class="gallery-thumb placeholder-glare"></div>`;
                        }

                        // Si hay al menos 3 imágenes
                        if (pData.images.length >= 3) {
                            sideImgsHtml += `<div class="gallery-thumb" onclick="openGallery('${imgsJson}', 2)" style="background-image: url('${pData.images[2]}'); background-size: cover; background-position: top center; border: 1px solid rgba(135,206,250,0.8); box-shadow: 0 4px 8px rgba(0,0,0,0.1);"></div>`;
                        } else {
                            sideImgsHtml += `<div class="gallery-thumb placeholder-glare"></div>`;
                        }

                        sideImgsHtml += '</div>';
                        modalGalleryGrid.innerHTML = mainImgHtml + sideImgsHtml;

                    } else {
                        // Renderizar placeholders por defecto
                        modalGalleryGrid.innerHTML = `
                            <div class="gallery-main-img placeholder-glare" onclick="alert('No hay capturas disponibles aún')"></div>
                            <div class="gallery-side-imgs">
                                <div class="gallery-thumb placeholder-glare"></div>
                                <div class="gallery-thumb placeholder-glare"></div>
                            </div>
                        `;
                    }
                }

                modalOverlay.classList.remove('hidden');
            });
        });
    }

    // Listener para botón de cerrar y fuera de la caja
    if (closeBtn && modalOverlay) {
        closeBtn.addEventListener('click', () => {
            modalOverlay.classList.add('hidden');
        });

        // Cerrar si se hace click fuera de la ventana en el overlay oscurecido
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.add('hidden');
            }
        });
    }

    return attachItemListeners;
}

const updateModalListeners = initProyectosModal();

// ===================================
// Lógica de Galería de Imágenes Flotante
// ===================================

let currentGalleryImages = [];
let currentGalleryIndex = 0;

const galleryOverlay = document.getElementById('gallery-modal-overlay');
const galleryFullImg = document.getElementById('gallery-full-img');
const galleryCounter = document.getElementById('gallery-counter');
const galleryPrevBtn = document.getElementById('gallery-prev-btn');
const galleryNextBtn = document.getElementById('gallery-next-btn');
const closeGalleryBtn = document.getElementById('close-gallery-btn');

function updateGalleryView() {
    if (currentGalleryImages.length === 0) return;

    // Desvanecer imagen actual
    galleryFullImg.style.opacity = '0';

    setTimeout(() => {
        galleryFullImg.src = currentGalleryImages[currentGalleryIndex];
        galleryCounter.textContent = `${currentGalleryIndex + 1} / ${currentGalleryImages.length}`;

        // Mostrar imagen nueva suavemente
        galleryFullImg.style.opacity = '1';
    }, 150);
}

// Global function to be called from html string
window.openGallery = function (imagesJsonEnconded, startIndex) {
    try {
        currentGalleryImages = JSON.parse(decodeURIComponent(imagesJsonEnconded));
        currentGalleryIndex = startIndex;

        if (currentGalleryImages.length > 0) {
            updateGalleryView();
            galleryOverlay.classList.remove('hidden');
        }
    } catch (e) {
        console.error("Error abriendo galería", e);
    }
}

// Botones navegación galería
if (galleryPrevBtn) {
    galleryPrevBtn.addEventListener('click', () => {
        if (currentGalleryImages.length > 0) {
            currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
            updateGalleryView();
        }
    });
}

if (galleryNextBtn) {
    galleryNextBtn.addEventListener('click', () => {
        if (currentGalleryImages.length > 0) {
            currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryImages.length;
            updateGalleryView();
        }
    });
}

// Cerrar Galeria
if (closeGalleryBtn && galleryOverlay) {
    closeGalleryBtn.addEventListener('click', () => {
        galleryOverlay.classList.add('hidden');
    });

    galleryOverlay.addEventListener('click', (e) => {
        // Cierra si se hace clic explicitamente en el overlay de fondo, fuera de la imagen
        if (e.target === galleryOverlay) {
            galleryOverlay.classList.add('hidden');
        }
    });
}

// Sistema de Partículas Avanzado - Burbujas Acuáticas Subiendo (Canvas)
function initBubbles() {
    const canvas = document.getElementById('bubble-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Responder a redimensionamiento
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const bubbles = [];
    const maxBubbles = window.innerWidth > 768 ? 85 : 45;

    class Bubble {
        constructor() {
            // Permite spawnear las iniciales esparcidas en la pantalla
            this.reset(true);
        }

        reset(initial = false) {
            this.x = Math.random() * canvas.width;

            // Si es inicialización (initial=true), repartir por toda la pantalla aleatoriamente en Y. 
            // Si es respawn, empezar debajo del suelo.
            this.y = initial ? Math.random() * canvas.height : canvas.height + (Math.random() * 150 + 50);

            this.size = Math.random() * 10 + 3; // Radio de 3 a 13px
            this.speedY = Math.random() * 1.5 + 0.4; // Qué tan rápido sube
            this.speedX = (Math.random() - 0.5) * 0.8; // Desplazamiento local x al nacer

            this.wobble = Math.random() * Math.PI * 2; // Para oscilación sinoidal
            this.wobbleSpeed = Math.random() * 0.03 + 0.01;

            // Burbujas grandes son más transparentes
            const baseOpacity = this.size > 8 ? 0.25 : 0.55;
            this.opacity = Math.random() * 0.3 + baseOpacity;
        }

        update() {
            // Movimiento hacia arriba
            this.y -= this.speedY;

            // Oscilación de bamboleo lateral simulando el empuje marino
            this.x += Math.sin(this.wobble) * 0.5 + this.speedX;
            this.wobble += this.wobbleSpeed;

            // Al traspasar la parte alta del cielo, respawnea pero con reset abajo
            if (this.y + this.size < -20) {
                this.reset(false);
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

            // 1. Borde de la burbuja (Aero style stroke)
            ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity + 0.15})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // 2. Destello súper intenso (Glare de burbuja Frutiger) en superior-izquierda
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 0.75, -Math.PI, -Math.PI / 2.5);
            ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity + 0.4})`;
            ctx.lineWidth = this.size * 0.15;
            ctx.lineCap = 'round';
            ctx.stroke();

            // 3. Relleno con gradiente tenue hacia abajo
            const gradient = ctx.createRadialGradient(
                this.x - this.size * 0.2, this.y - this.size * 0.2, this.size * 0.05,
                this.x, this.y, this.size
            );
            gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity * 0.8})`);
            gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

            ctx.fillStyle = gradient;
            ctx.fill();
        }
    }

    for (let i = 0; i < maxBubbles; i++) {
        bubbles.push(new Bubble());
    }

    function animate() {
        // Redibujar fondo transparente
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        bubbles.forEach(bubble => {
            bubble.update();
            bubble.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}
