const tecla = [...document.querySelectorAll('.number')]
const op = [...document.querySelectorAll('.op')]
const res = document.querySelector('#resultado')
const limpar = document.querySelector('#clear')
const display = document.querySelector('#display')

let sinal = false
let decimal = false

//Tecla de números
tecla.forEach((el) => {
    el.addEventListener('click', (evt) => {
        sinal = false
        if (evt.target.textContent == '.') {
            if (!decimal) {
                decimal = true
                if (display.innerHTML == '') {
                    display.innerHTML = '0.'
                } else {
                    display.innerHTML += evt.target.innerHTML
                }
            }
        } else {
            display.innerHTML += evt.target.innerHTML
        }
    })
})

//Teclas de operação
op.forEach((el) => {
    el.addEventListener('click', (evt) => {
        if (!sinal) {
            sinal = true
            display.textContent += evt.target.textContent
        }
    })
})

//Tecla de resultado da operação
res.addEventListener('click', (evt) => {
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

// apagar display
function apagar() {
    decimal = false
    display.textContent = ''
}

// apagar digitos da direita para esquerda
function corrigir() {
    var numero = document.querySelector('#display').textContent
    display.textContent = numero.slice(0, - 1)
}
