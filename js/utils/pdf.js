// ===================================
// UTILIDAD DE CERTIFICADOS NATIVA
// ===================================

function generarHTMLCertificados() {
    let html = '';

    if (misCertificados.length === 0) {
        return { html: '<p style="color: #666; font-style: italic; width: 100%; text-align: center;">Aún no hay certificados disponibles.</p>' };
    }

    misCertificados.forEach((archivo) => {
        // Extraer nombres 
        const pdfFile = typeof archivo === 'string' ? archivo : archivo.pdf;
        const imgFile = typeof archivo === 'string' ? archivo : (archivo.img || archivo.pdf);

        const urlPDF = `assets/img/certificados/${pdfFile}`;
        const urlIMG = `assets/img/certificados/${imgFile}`;

        let iconoHTML = `<div class="cert-img-preview" style="background-image: url('${urlIMG}')"></div>`;
        let nombreLegible = pdfFile.replace(/\.[^/.]+$/, "").replace(/_/g, " ").toUpperCase();

        html += `
            <a href="${urlPDF}" target="_blank" class="certificado-card">
                <div class="certificado-glare"></div>
                ${iconoHTML}
                <div class="certificado-info">
                    <span class="certificado-name">${nombreLegible}</span>
                    <span class="certificado-type">Ver Certificado</span>
                </div>
            </a>
        `;
    });

    // Devolvemos el HTML procesado
    return { html };
}
