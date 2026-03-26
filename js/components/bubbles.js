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
