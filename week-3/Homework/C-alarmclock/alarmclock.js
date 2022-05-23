const timeRemaining = document.getElementById('timeRemaining')
const inputValue = document.getElementById('alarmSet')
let contador = 0
let idContador

const bodyPage = document.querySelector('body') 
  function segundosMinutos (segundos){
    var hora = Math.floor(segundos / 3600);
    hora = (hora < 10)? '0' + hora : hora;
    var minuto = Math.floor((segundos / 60) % 60);
    minuto = (minuto < 10)? '0' + minuto : minuto;
    var segundo = segundos % 60;
    segundo = (segundo < 10)? '0' + segundo : segundo;
    return hora + ':' + minuto + ':' + segundo;
  }

  console.log(segundosMinutos(5467));

function setAlarm() {
  if (inputValue.value != '') {
    contador = inputValue.value
    timeRemaining.textContent = 'Time Remaining: '+ segundosMinutos(contador)
    inputValue.value= '' 
  }

 idContador = setInterval(()=>{
  timeRemaining.textContent = 'Time Remaining: '+ segundosMinutos(contador);
  contador -- 
  if (contador === -1) {
    clearInterval(idContador)
    idContador=undefined
    playAlarm()
    bodyPage.style.backgroundColor='red'
    }
},1000)

}

const stopAlarm=()=>{
  if (idContador != undefined) {
    clearInterval(idContador)
    idContador = undefined
  } else{
    idContador = setInterval(()=>{
      h1Remaining.textContent = 'Time Remaining: '+ segundosMinutos(contador);
      contador -- 
      if (contador === -1) {
        clearInterval(idContador)
        idContador=undefined
        playAlarm()
        bodyPage.style.backgroundColor='red'
        }
    },1000)
  }
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setInterval(setAlarm, 1000)
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
