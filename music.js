$(document).ready(function() {
    // Detecta quando a página está pronta para redirecionar
    $(window).on('beforeunload', function() {
        // Seleciona o SVG
        var svg = $('.svg-icon');

        // Remove qualquer classe existente e adiciona a classe para estilização
        svg.removeClass().addClass('svg-icon play-button');

        // Altera o conteúdo do SVG para representar um botão de play
        svg.html('<path d="M10 20V60L40 40L10 20Z" fill="#ff002e"/>');
    });
});
