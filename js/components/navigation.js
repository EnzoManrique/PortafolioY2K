// Global para el control de los listeners del modal
let updateModalListeners = null;

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

        // Tareas específicas según la pestaña cargada
        if (target === 'projects') {
            if(!updateModalListeners) updateModalListeners = initProyectosModal();
            updateModalListeners();
        } else if (target === 'contact') {
            // Renderizamos los certificados dinámicamente si entramos a contacto
            const certContainer = document.getElementById('certificados-container');
            if (certContainer) {
                const data = generarHTMLCertificados();
                // 1. Inyectamos el DOM con los Canvas vacíos
                certContainer.innerHTML = data.html;

                // 2. Ejecutamos asíncronamente PDF.js sobre cada canvas ya montado
                if (data.pdfsToRender && data.pdfsToRender.length > 0) {
                    data.pdfsToRender.forEach(pdfInfo => {
                        renderPDFThumbnail(pdfInfo.url, pdfInfo.id);
                    });
                }
            }
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
