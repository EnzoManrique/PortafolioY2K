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
                    <div class="explorer-item">
                        <div class="explorer-icon-box">
                            <img src="" alt="" class="explorer-placeholder-icon" style="background: linear-gradient(135deg, #ff9a9a, #ff0000);">
                        </div>
                        <div class="explorer-item-details">
                            <span class="explorer-item-name">Simulador_Fichas.exe</span>
                            <span class="explorer-item-type">Tipo: App Java</span>
                        </div>
                    </div>
                    
                    <!-- Archivo 2 -->
                    <div class="explorer-item">
                        <div class="explorer-icon-box">
                            <img src="" alt="" class="explorer-placeholder-icon" style="background: linear-gradient(135deg, #a8ff78, #78ffd6);">
                        </div>
                        <div class="explorer-item-details">
                            <span class="explorer-item-name">Gestor Stock e Inventario.php</span>
                            <span class="explorer-item-type">Tipo:PHP y MySQL</span>
                        </div>
                    </div>
                    
                    <!-- Archivo 3 -->
                    <div class="explorer-item">
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

// Inicialización de Modal (Proyectos)
function initProyectosModal() {
    const modalOverlay = document.getElementById('project-modal-overlay');
    const closeBtn = document.getElementById('close-modal-btn');

    // Función para añadir los event listeners iterando los items cada vez que se carga la pestaña
    function attachItemListeners() {
        const items = document.querySelectorAll('.explorer-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
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
