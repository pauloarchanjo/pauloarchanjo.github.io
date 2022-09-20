//Constantes
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const refresh = document.querySelector('.refresh');
const pts = document.getElementById('pts');

//Pulo do Mario
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 400);
}

//Contador de pontos
let contador = 0;

pts.innerHTML = contador;

//Loop Principal
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    pts.innerHTML = contador;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './assets/images/png/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);

    }else{
        contador++;
    }

}, 10);

//Reload da página
    refresh.addEventListener('click', () => {
        location.reload()
    })

//Controle do Mario
document.addEventListener('keydown',  function(event) {
    if(event.key === 'ArrowUp'){
        jump();
    }
});

//Refresh da pagina
refresh.AddEventListener('click', () => {
    location.reload();
})

