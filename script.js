document.addEventListener("DOMContentLoaded", () => {
    // Texto que se escribirá como máquina de escribir
    const greetingText = "C:\\> CONECTANDO AL SERVIDOR PRINCIPAL...\nC:\\> AUTENTICACIÓN ACEPTADA.\nC:\\> BIENVENIDO AL PORTAFOLIO DE ENZO.";
    const greetingElement = document.getElementById("greeting");
    const mainContent = document.getElementById("main-content");
    
    let index = 0;
    const speed = 40; // Velocidad de tipeo en milisegundos

    function typeWriter() {
        if (index < greetingText.length) {
            // Manejar los saltos de línea (enters)
            if (greetingText.charAt(index) === '\n') {
                greetingElement.innerHTML += "<br/>";
            } else {
                greetingElement.innerHTML += greetingText.charAt(index);
            }
            index++;
            
            // Variar ligeramente la velocidad para hacerlo sentir orgánico de los 90s
            let randomSpeed = speed + (Math.random() * 30 - 15);
            setTimeout(typeWriter, randomSpeed);
        } else {
            // Cuando termina el saludo, mostramos el contenido principal tras una breve pausa
            setTimeout(() => {
                mainContent.classList.remove("hidden");
                mainContent.classList.add("visible");
            }, 600);
        }
    }

    // Iniciamos la animación con un pequeño retraso cuando la página carga
    setTimeout(typeWriter, 800);
});
