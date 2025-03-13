const imagens = [
    'imagem1.jpg',
    'imagem2.jpg',
    'imagem3.jpg',
    'imagem5.jpg',
    'imagem6.jpg',
    'imagem7.jpg',
    'imagem8.jpg',
    'imagem9.jpg',
    'imagem10.jpg',
    'imagem11.jpg'
];

const limiteFrases = 20;
let frasesNaTela = 0;

function criarFrase() {
    if (frasesNaTela >= limiteFrases) return;

    const frase = document.createElement('div');
    frase.classList.add('frase');
    frase.textContent = 'Eu te amo ❤️';
    frase.style.left = `${Math.random() * 100}%`;
    frase.style.animationDuration = `${Math.random() * 3 +2 + 2}s`;

    frase.addEventListener('click', () => {
        // Captura a posição atual da frase em relação ao contêiner .cascata
        const retangulo = frase.getBoundingClientRect();
        const cascataRect = document.querySelector('.cascata').getBoundingClientRect();
        const topoAtual = retangulo.top - cascataRect.top;
        const esquerdaAtual = retangulo.left - cascataRect.left;

        // Cria a imagem e posiciona no mesmo local da frase
        const imagem = document.createElement('img');
        imagem.classList.add('imagem');
        imagem.src = imagens[Math.floor(Math.random() * imagens.length)];
        imagem.style.left = `${esquerdaAtual}px`;
        imagem.style.top = `${topoAtual}px`;

        // Ajusta o tamanho da imagem para dispositivos móveis
        if (window.innerWidth <= 600) {
            imagem.style.width = '60px'; // Tamanho menor para smartphones
        } else {
            imagem.style.width = '200px'; // Tamanho padrão para desktop
        }

        document.querySelector('.cascata').appendChild(imagem);

        // Faz a imagem aparecer suavemente
        setTimeout(() => {
            imagem.style.opacity = '1';
        }, 10);

        // Remove a frase
        frase.remove();

        // Animação manual da imagem até o final da tela
        const inicio = topoAtual;
        const fim = cascataRect.height;
        const duracao = 5000; // 5 segundos (ajuste conforme necessário)

        const startTime = performance.now();
        
        function animar(time) {
            const tempoDecorrido = time - startTime;
            const progresso = tempoDecorrido / duracao;
            
            if (progresso < 1) {
                const novoTopo = inicio + (fim - inicio) * progresso;
                imagem.style.top = `${novoTopo}px`;
                requestAnimationFrame(animar);
            } else {
                imagem.style.top = `${fim}px`;
                imagem.remove();
                frasesNaTela--;
                criarFrase();
            }
        }

        requestAnimationFrame(animar);
    });

    document.querySelector('.cascata').appendChild(frase);
    frasesNaTela++;

    frase.addEventListener('animationend', () => {
        frase.remove();
        frasesNaTela--;
        criarFrase();
    });
}

setInterval(criarFrase, 500);