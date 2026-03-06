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
        <h1 class="aero-title">¡Hola! Soy Enzo</h1>
        <div class="aero-content-box">
            <p>Bienvenido a mi portafolio personal. Soy desarrollador de software con una pasión por crear sistemas limpios, eficientes y estéticamente agradables.</p>
            <p>Explora mis proyectos y descubre lo que he estado construyendo utilizando diversas tecnologías, desde <strong>Java y Spring Boot</strong> hasta desarrollo web moderno interactivo.</p>
            <br>
            <p><i>Selecciona una opción en el reproductor en la parte inferior para continuar...</i></p>
        </div>
    `,
    projects: `
        <h1 class="aero-title">Mis Proyectos</h1>
        
        <div class="project-card">
            <div class="project-header">
                <h2>Simulador de Fichas de Póker</h2>
                <span class="status-badge">Finalizado V1.0</span>
            </div>
            <p>Una aplicación robusta para la gestión y simulación de stacks de fichas de póker. Permite visualizar, calcular balances y organizar distribuciones de fichas con exactitud matemática.</p>
            <div class="tags">
                <span class="tag">Java</span>
                <span class="tag">Spring Boot</span>
                <span class="tag">Backend</span>
            </div>
        </div>
        
        <div class="project-card">
            <div class="project-header">
                <h2>Portafolio Frutiger Aero</h2>
                <span class="status-badge active">En Desarrollo</span>
            </div>
            <p>Diseño de interfaz de usuario inmersiva inspirada en la estética del software de mediados de los 2000, incorporando elementos acuáticos, botones glossy interactivos, vidrio translúcido ("Aero Glass") y animaciones en Canvas puro.</p>
            <div class="tags">
                <span class="tag">HTML5</span>
                <span class="tag">CSS3 (Diseño UI/UX)</span>
                <span class="tag">Vanilla JS</span>
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
            ctx.strokeStyle = \`rgba(255, 255, 255, \${this.opacity + 0.15})\`;
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // 2. Destello súper intenso (Glare de burbuja Frutiger) en superior-izquierda
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 0.75, -Math.PI, -Math.PI/2.5);
            ctx.strokeStyle = \`rgba(255, 255, 255, \${this.opacity + 0.4})\`;
            ctx.lineWidth = this.size * 0.15;
            ctx.lineCap = 'round';
            ctx.stroke();

            // 3. Relleno con gradiente tenue hacia abajo
            const gradient = ctx.createRadialGradient(
                this.x - this.size * 0.2, this.y - this.size * 0.2, this.size * 0.05,
                this.x, this.y, this.size
            );
            gradient.addColorStop(0, \`rgba(255, 255, 255, \${this.opacity * 0.8})\`);
            gradient.addColorStop(1, \`rgba(255, 255, 255, 0)\`);
            
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
