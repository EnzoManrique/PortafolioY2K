// Punto de entrada principal en la carga de la aplicación 

document.addEventListener("DOMContentLoaded", () => {
    // Inicializar los componentes gráficos base
    initNavigation();
    initWindowDrag();

    // Cargar la sección de inicio (home) por defecto con una ligera animación de entrada
    setTimeout(() => {
        loadContent('home');
    }, 400);
});
