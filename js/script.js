const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

function jump() {
mario.classList.add('jump');

setTimeout(() => {

    mario.classList.remove('jump');


}, 500);

}

const loop = setInterval(() => {

 const pipePosition = pipe.offsetLeft; 
 const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); 

 if (pipePosition <= 140 && pipePosition> 0 && marioPosition < 77) {
 
   pipe.style.animation = 'none';
   pipe.style.left = '${pipePosition}px'; 

   mario.style.animation = 'none';
   mario.style.bottom = '${marioPosition}px'; 
 
   mario.src = './images/game-over.webp'

 }

}, 10);  

document.addEventListener('keydown', jump);