const fraseElement = document.querySelector('.love-declaration');

function carregarFraseAleatoria(frases) {
    // Obter uma frase aleatória da lista
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    // Aplica a animação de fade out, e em seguida, fade in
    fraseElement.classList.add('fade-out');
    fraseElement.addEventListener('animationend', function() {
        fraseElement.textContent = fraseAleatoria;
        fraseElement.classList.remove('fade-out');
        fraseElement.classList.add('fade-in');
    }, { once: true });
}

// Carrega todas as frases uma vez e as mantém em memória para evitar recarregar o JSON
fetch('https://mensagem-de-amor.github.io/de-isaque-para-Myllena/Frases.json')
    .then(response => response.json())
    .then(frases => {
        // Carregar uma frase imediatamente
        carregarFraseAleatoria(frases);

        // Carregar uma nova frase a cada 7 segundos
        setInterval(() => carregarFraseAleatoria(frases), 7000);
    })
    .catch(error => console.error('Erro ao carregar frases:', error));
