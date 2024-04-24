document.addEventListener('DOMContentLoaded', () => {
    // Adicionar evento de clique ao botão "Iniciar"
    document.getElementById('playButton').addEventListener('click', function() {
        const audio = new Audio('/music.mp3');
        audio.play();

       // Ocultar botão "Iniciar"
        this.style.display = 'none';
        // Exibir conteúdo
        document.getElementById('content').style.display = 'block';
    });
});