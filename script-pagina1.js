// Adiciona um evento de clique ao botão "Sim"
document.getElementById('botaoFixo').addEventListener('click', function() {
    // Redireciona para a segunda página
    window.location.href = 'pagina2.html';
});

// Adiciona um evento de clique ao botão "Não" (opcional, se quiser manter a funcionalidade do botão fugitivo)
document.getElementById('botaoFugitivo').addEventListener('mouseover', function() {
    // Gera posições aleatórias dentro da janela do navegador
    const novaPosicaoX = Math.random() * (window.innerWidth - this.offsetWidth);
    const novaPosicaoY = Math.random() * (window.innerHeight - this.offsetHeight);

    // Aplica as novas posições ao botão
    this.style.position = 'absolute';
    this.style.left = novaPosicaoX + 'px';
    this.style.top = novaPosicaoY + 'px';
});

// Adiciona suporte para toque em dispositivos móveis (opcional)
document.getElementById('botaoFugitivo').addEventListener('touchstart', function() {
    // Gera posições aleatórias dentro da janela do navegador
    const novaPosicaoX = Math.random() * (window.innerWidth - this.offsetWidth);
    const novaPosicaoY = Math.random() * (window.innerHeight - this.offsetHeight);

    // Aplica as novas posições ao botão
    this.style.position = 'absolute';
    this.style.left = novaPosicaoX + 'px';
    this.style.top = novaPosicaoY + 'px';
});