//Declarando Variáveis
const inicio = document.querySelector('.inicio');
const start = document.querySelector('.start');
const contagemEl = document.querySelector('.contagem');
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const fim = document.querySelector('.fim');   
const reset = document.querySelector('.reset');

//Definindo seus estilos
contagemEl.style.display = 'none';
mario.src = 'img/mariou.gif';
mario.style.animation = 'none';
pipe.style.animation = 'none';
pipe.style.left = '2000px';
fim.style.display = 'none';

//Quando clico em START
function startar() {
    
    mario.style.animation = '';
    mario.style.bottom = '0px';
    mario.src = 'img/mariou.gif';
    mario.style.width = '150px';
    mario.style.transform = 'rotate(0deg)';
    fim.style.display = 'none';
    loop();
}

//Executa o pulo do Mario
function jump() {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

//Verificação da Morte
function loop() {
    pipe.style.animation = '';
    pipe.style.left = '';
    inicio.style.display = 'none';
    contagemEl.style.display = '';
    let contagem = 0;
    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        

        contagem++;
        contagemEl.innerHTML = contagem;
    
        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
    
            
    
            mario.src = 'img/MarioMorreu.jpg';
            mario.style.width = '160px';
            mario.style.marginLeft = '0px';
            mario.style.transform = 'rotate(-2deg)';
            mario.classList.add('dead');
            setTimeout(() => {
                mario.classList.remove('dead');
            }, 500);

            fim.style.display = '';
    
            clearInterval(loop);
        }
    }, 10);
}

//Quando clico em RESET
function resetar() {
    startar();
}

//Eventos de Teclado e Mouse
start.addEventListener('click', startar);
document.addEventListener('keydown', jump);
reset.addEventListener('click', resetar);