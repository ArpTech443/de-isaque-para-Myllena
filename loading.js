document.addEventListener('DOMContentLoaded', () => {
    // Adiciona a classe 'active' ao SVG para iniciar as animações
    const svg = document.querySelector('svg');
    svg.classList.add('active');

    // Redireciona para outra página após 5 segundos
    setTimeout(() => {
        window.location.href = 'https://mensagem-de-amor.github.io/de-isaque-para-Myllena/page.html'; // Substitua pela URL desejada
    }, 7000);
});