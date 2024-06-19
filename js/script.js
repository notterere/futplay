function showVideo(videoId, videoUrl) {
    const videoContainer = document.getElementById('video-container');
    const videoIframe = document.getElementById('video-iframe');

    videoIframe.src = videoUrl;
    videoContainer.style.display = 'block';
}

// Función para abrir el modal de términos y condiciones
function openTermsModal() {
    var termsModal = document.getElementById('terms-modal');
    termsModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Evitar desplazamiento de fondo
}

// Función para cerrar el modal de términos y condiciones
function closeTermsModal() {
    var termsModal = document.getElementById('terms-modal');
    termsModal.classList.remove('active');
    document.body.style.overflow = ''; // Habilitar desplazamiento de fondo
}