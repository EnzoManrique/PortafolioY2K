/**
 * Módulo para habilitar el arrastre de la ventana principal imitando
 * el comportamiento clásico de un rudimentario Sistema Operativo (Windows/Aero).
 */

function initWindowDrag() {
    const windowHeader = document.querySelector('.window-header');
    const mediaPlayerWindow = document.querySelector('.media-player-window');

    if (!windowHeader || !mediaPlayerWindow) return;

    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    // Al hacer click en la barra
    windowHeader.addEventListener('mousedown', (e) => {
        // Ignorar si el clic fue en los botones de control de la ventana (maximizar, cerrar, etc)
        if (e.target.closest('.window-controls')) return;

        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;

        // Utilizamos offsetLeft/offsetTop porque nos abstrae
        // de saber si está en % o PX en CSS. 
        initialLeft = mediaPlayerWindow.offsetLeft;
        initialTop = mediaPlayerWindow.offsetTop;

        windowHeader.style.cursor = 'grabbing';
        
        // Desactiva la transición temporalmente para que el arrastre sea instantáneo
        mediaPlayerWindow.style.transition = 'none'; 
    });

    // Detectar movimiento en todo el documento para no perder el rastro si movemos muy rápido el mouse exteriormente
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        // Bloquear selecciones de texto accidentales
        e.preventDefault(); 

        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        // Asignamos la nueva posición física hardcodeada
        mediaPlayerWindow.style.left = `${initialLeft + dx}px`;
        mediaPlayerWindow.style.top = `${initialTop + dy}px`;
    });

    // Soltar click en cualquier parte
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            windowHeader.style.cursor = 'grab';
        }
    });
}
