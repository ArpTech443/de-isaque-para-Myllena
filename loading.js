document.addEventListener('DOMContentLoaded', () => {

    // Aguarde 3 segundos
    setTimeout(function() {
        // Ocultar texto de carregamento
        document.getElementById('loadingText').style.display = 'none';
        document.getElementById('loadingInfo').style.display = 'none';
        // Mostrar botão "Iniciar"
        document.getElementById('playButton').style.display = 'block';
    }, 3000);
});