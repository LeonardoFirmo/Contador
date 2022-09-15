const contadorNumber = document.querySelector('.counter-container')
const iniciaCount = document.querySelector('.button-init-counter')
const paraCount = document.querySelector('.button-stop-counter')
const zeraCount = document.querySelector('.button-zera-counter')

let timer = null


function startCount(){
  timer = setInterval(() => {
    ++contadorNumber.innerHTML
  }, 1000);
  iniciaCount.style.display='none'
}

function stopCount(){
  clearInterval(timer)
  iniciaCount.style.display=''
}

function zeraContagem(){ contadorNumber.innerHTML=0}

iniciaCount.addEventListener('click',startCount)
paraCount.addEventListener('click',stopCount)
zeraCount.addEventListener('click',zeraContagem)

