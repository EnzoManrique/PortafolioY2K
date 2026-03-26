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
    
    // Referencias a los enlaces de Recursos
    const resourcesLinks = document.querySelectorAll('.modal-links-container .glossy-link-btn');
    const btnGithub = resourcesLinks[0];
    const btnDocs = resourcesLinks[1];

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
                    
                    // Actualizar Enlaces de Recursos
                    if(btnGithub) {
                        btnGithub.href = pData.githubLink || '#';
                        btnGithub.target = (pData.githubLink && pData.githubLink !== '#') ? '_blank' : '_self';
                    }
                    if(btnDocs) {
                        btnDocs.href = pData.docLink || '#';
                        btnDocs.target = (pData.docLink && pData.docLink !== '#') ? '_blank' : '_self';
                    }

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
