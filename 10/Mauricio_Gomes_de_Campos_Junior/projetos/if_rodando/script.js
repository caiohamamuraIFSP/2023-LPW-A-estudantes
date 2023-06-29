// Inicializa elementos
let canvas = document.getElementById('meu-quadro');
let ctx = canvas.getContext('2d');
let logo = document.getElementById('logo-ifsp');

// Ajusta o tamanho do canvas para a tela
function ajustaCanvas() {
    canvas.height = window.innerHeight - 4;
    canvas.width = window.innerWidth;
}
window.onresize = ajustaCanvas;
ajustaCanvas();

// Dados da imagem
let largura_original = 64;
let altura_original = 64;
let escala = 1;
let largura = largura_original * escala;
let altura = altura_original * escala;

// Movimento
let x = 0;
let y = 0;
let velX = 3;
let velY = 3;

// Rotacao
let angulo = 0;
let velocidadeRotacao = -5;

// Função principal
function loop(tempo) {
    // Limpa tela
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /////////////////////
    // Rotação da imagem
    /////////////////////
    
    // Centraliza a âncora de rotação
    ctx.translate(largura/2, altura/2);

    // Rotaciona
    ctx.rotate(angulo);

    // Retorna a âncora para posição inicial
    ctx.translate(-largura/2, -altura/2);

    // Calcula x e y rotacionados
    let xr = (x * Math.cos(angulo) + y * Math.sin(angulo));
    let yr = (y * Math.cos(angulo) - x * Math.sin(angulo));
    
    // Desenha imagem rotacionada
    ctx.drawImage(logo, xr, yr, largura, altura);

    // Retorna o canvas para a posição original
    ctx.setTransform();

    ////////////////////////////////
    // Verifica se bate nas paredes
    ////////////////////////////////
    if ((x + largura) > canvas.width || x < 0) {
        // Inverte a velocidade X e rotação
        velX *= -1;
        velocidadeRotacao *= -1;
        
    }
    if ((y + altura) > canvas.height || y < 0) {
        // Inverte a velocidade Y e rotação
        velY *= -1;
        velocidadeRotacao *= -1;
    }

    // Incrementa movimento e rotação
    x += velX;
    y += velY;
    angulo += velocidadeRotacao * Math.PI/180;

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);




