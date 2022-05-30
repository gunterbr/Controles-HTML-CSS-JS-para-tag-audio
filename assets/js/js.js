const CURRENT_NUMBER = document.getElementById('currentNumber');
var count = document.getElementById('currentNumber').textContent;
var audio = document.getElementById('player');
var playpause = document.getElementById('playpause');
var msg = document.getElementById('msg');

/*NENHUMA ALTERAÇÃO É NECESSÁRIA DAQUI PARA BAIXO*/

audio.volume = count/100;//Transforma o valor do volume no html para o mesmo corresponder ao intervalo do volume [0,1]
playpause.style.display = 'none';

playpause.addEventListener('click', function(){
    if(audio.paused){
      audio.play();
    } else {
      audio.pause();
    }
});

audio.oncanplay = function() {//Quando está pronto para iniciar
    msg.innerHTML = 'Aperte o play';
    playpause.innerHTML = '>';
    playpause.style.display = 'flex';
};
audio.onplaying = function() {//Quando está reproduzindo
    playpause.innerHTML = '||';
    msg.innerHTML = 'Reproduzindo...';
};
audio.onwaiting = function() {//Buffering
    msg.innerHTML = 'Sintonizando...';
    playpause.style.display = 'none';
};
audio.onpause = function() {//Quando está pausado
    playpause.innerHTML = '>';
    msg.innerHTML = 'Aperte o play';
};

function increment() {
    if(count <= 90) {
        audio.volume = audio.volume + 0.1;
        count = parseInt(count) + parseInt('10');
        CURRENT_NUMBER.innerHTML = count;
    }
}
function decrement() {
    if(count >= 10) {
        audio.volume = audio.volume - 0.1;
        count = parseInt(count) - parseInt('10');
        CURRENT_NUMBER.innerHTML = count;
    }
}
