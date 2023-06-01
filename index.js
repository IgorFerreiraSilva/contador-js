
function contador(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let count = 0
let timer


function iniciaRelogio(){
    timer = setInterval(function() {
        count++;
        relogio.innerHTML = contador(count)
    }, 1000)
}


iniciar.addEventListener('click', ()=>{
    clearInterval(timer)
    iniciaRelogio()
})

pausar.addEventListener('click', ()=>{
    clearInterval(timer)
})

zerar.addEventListener('click', ()=>{
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0
})


