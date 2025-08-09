// Funciones para manejar los modales de certificados
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Función para descargar certificados
function downloadCertificate(type) {
    const certificates = {
        iso: 'Certificado_ISO_9001_Delizia_2024.pdf',
        haccp: 'Certificado_HACCP_Delizia_2024.pdf',
        brc: 'Certificado_BRC_Delizia_2024.pdf'
    };
    alert(`Descargando: ${certificates[type]}`);
}

// Event listeners cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    // Cerrar modal al hacer clic fuera de la imagen
    document.querySelectorAll('.certificate-modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target.classList.contains('certificate-modal')) {
                e.target.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });
});
