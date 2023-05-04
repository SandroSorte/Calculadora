const tecla = [...document.querySelectorAll('.num')]
const op = [...document.querySelectorAll('.op')]
const res = document.querySelector('.res')
const limpar = document.querySelector('#clear')
const display = document.querySelector('#display')

let sinal = false
let decimal = false

tecla.forEach((el) => {
    el.addEventListener('click', (evt) => {
        sinal = false
        if (evt.target.innerHTML == ",") {
            if (!decimal) {
                decimal = true
                display.innerHTML += evt.target.innerHTML
            }
        } else {
            if (display.innerHTML == "0") {
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})

op.forEach((el) => {
    el.addEventListener('click', (evt) => {
        if (!sinal) {
            sinal = true
            if (display.innerHTML == "0") {
                display.innerHTML = ""
            }
            if (evt.target.innerHTML == "X") {
                display.innerHTML += "*"
            } else {
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

limpar.addEventListener('click', (evt) => {
    sinal = false
    decimal = false
    display.innerHTML = '0'
})

res.addEventListener('click', (evt) => {
    sinal = false
    decimal = false
    const res=eval(display.innerHTML)
    display.innerHTML=res
})