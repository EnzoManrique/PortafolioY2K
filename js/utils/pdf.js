// Es importante desactivar el worker para archivos locales en `file://` o se bloquea por CORS en navegadores modernos.
if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// Función asíncrona para parsear y dibujar la primera página de un PDF en un canvas
async function renderPDFThumbnail(pdfUrl, canvasId) {
    try {
        // En un entorno de archivos locales sin servidor web (file://), las peticiones 
        // fetch (usadas por pdf.js internamente) suelen fallar por políticas Strict CORS.
        // Hacemos un workaround pasando los disableStream y disableAutoFetch a true para archivos pequeños.
        const loadingTask = pdfjsLib.getDocument({
            url: pdfUrl,
            cMapUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/',
            cMapPacked: true,
            disableStream: true,
            disableAutoFetch: true
        });

        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        const canvas = document.getElementById(canvasId);
        if (!canvas) return; // Si el canvas no existe en el DOM

        const ctx = canvas.getContext('2d');

        // Ajustamos la escala para una buena resolución de miniatura
        const viewport = page.getViewport({ scale: 1.0 });

        // Mantener las proporciones dentro del aspect ratio requerido 
        // (Aproximadamente 120px de altura max para CSS preview, antes era 200 pero CSS dicta 120px)
        const scale = 120 / viewport.height;
        const scaledViewport = page.getViewport({ scale: scale });

        canvas.height = scaledViewport.height;
        canvas.width = scaledViewport.width;

        const renderContext = {
            canvasContext: ctx,
            viewport: scaledViewport
        };

        await page.render(renderContext).promise;

        // Ocultar el loader y mostrar canvas
        canvas.classList.remove('hidden-canvas');
        const loader = document.getElementById(`loader-${canvasId}`);
        if (loader) loader.style.display = 'none';

    } catch (reason) {
        console.error('Error renderizando PDF miniatura: ', reason);
        // Fallback a ícono de documento si falla
        const loader = document.getElementById(`loader-${canvasId}`);
        if (loader) loader.innerHTML = '📄';
    }
}

function generarHTMLCertificados() {
    let html = '';
    let pdfsToRender = []; // Guardamos lista para renderizar después de inyectar el HTML

    if (misCertificados.length === 0) {
        return '<p style="color: #666; font-style: italic; width: 100%; text-align: center;">Aún no hay certificados disponibles.</p>';
    }

    misCertificados.forEach((archivo, index) => {
        // Determinar si es PDF o Imagen por la extensión
        const ext = archivo.split('.').pop().toLowerCase();
        const esPdf = ext === 'pdf';

        const urlArchivo = `assets/img/certificados/${archivo}`;
        let iconoHTML = '';

        if (esPdf) {
            const canvasId = `pdf-canvas-${index}`;
            iconoHTML = `
                <div class="cert-pdf-preview-container">
                    <div id="loader-${canvasId}" class="pdf-loader">Cargando...</div>
                    <canvas id="${canvasId}" class="pdf-preview-canvas hidden-canvas"></canvas>
                </div>
            `;
            pdfsToRender.push({ url: urlArchivo, id: canvasId });
        } else {
            iconoHTML = `<div class="cert-img-preview" style="background-image: url('${urlArchivo}')"></div>`;
        }

        // El nombre visible sin la extensión (opcional)
        let nombreLegible = archivo.replace(/\.[^/.]+$/, "").replace(/_/g, " ").toUpperCase();

        html += `
            <a href="${urlArchivo}" target="_blank" class="certificado-card">
                <div class="certificado-glare"></div>
                ${iconoHTML}
                <div class="certificado-info">
                    <span class="certificado-name">${nombreLegible}</span>
                    <span class="certificado-type">Ver ${esPdf ? 'PDF' : 'Imagen'}</span>
                </div>
            </a>
        `;
    });

    // Devolvemos el HTML y la lista de PDFs a renderizar
    return { html, pdfsToRender };
}
