const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const msg = document.querySelector('#mensagem');


const jump = (tecla) => {
    console.log(tecla.code);
    
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');
     }, 500);

}

const loop = setInterval(()  =>  {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

        console.log(marioPosition);


    if(pipePosition <= 120  && pipePosition > 0 && marioPosition < 80 ) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        pipe.style.animation = 'none';
        pipe.style.bottom = `${pipePosition}px`;

        mario.src = 'https://i.pinimg.com/564x/35/02/05/3502059b254cfc8395b955c67574625d.jpg'
    
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        msg.style.display = 'block';

        clearInterval(loop);
        }
    },10);
    
document.addEventListener('keydown', jump);
