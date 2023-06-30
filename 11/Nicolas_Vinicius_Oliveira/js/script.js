const spiderman = document.querySelector('.spiderman');
const thanos = document.querySelector('.thanos');
const jump = () => {
   spiderman.classList.add('jump');
   setTimeout( () => {

      spiderman.classList.remove('jump');
    

   }, 500);
}

const loop = setInterval(() => {

   const thanosPosition = thanos.offsetLeft;
   const spidermanPosition = +window.getComputedStyle(spiderman).bottom.replace('px', '');
   
   if(thanosPosition <= 75 && thanosPosition > 0 && spidermanPosition < 80 ){

      thanos.style.animation = 'none';
      thanos.style.left = '${thanosPosition}px';
      
      spiderman.style.animation = 'none';
      spiderman.style.bottom = '${spidermanPosition}px';

      clearInterval(loop);
   }
   
}, 10);
           



document.addEventListener('keydown', jump);
