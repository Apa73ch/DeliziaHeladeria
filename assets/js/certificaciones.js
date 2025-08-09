// Funciones específicas para la página de certificaciones
function openCertificateModal(imgSrc) {
    const modal = document.querySelector('.certificate-modal');
    const modalImg = modal.querySelector('img');
    modalImg.src = imgSrc;
    modal.classList.add('active');
}

function closeCertificateModal() {
    const modal = document.querySelector('.certificate-modal');
    modal.classList.remove('active');
}

// Event listeners específicos para certificaciones
document.addEventListener('DOMContentLoaded', () => {
    const certificateButtons = document.querySelectorAll('.view-certificate');
    certificateButtons.forEach(button => {
        button.addEventListener('click', () => {
            const imgSrc = button.getAttribute('data-certificate');
            openCertificateModal(imgSrc);
        });
    });

    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', closeCertificateModal);
    });

    // Cerrar modal al hacer clic fuera de la imagen
    const modal = document.querySelector('.certificate-modal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeCertificateModal();
        }
    });
});
