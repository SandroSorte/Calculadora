const tecla = [...document.querySelectorAll('.num')]
const op = [...document.querySelectorAll('.op')]
const res = document.querySelector('.res')
const limpar = document.querySelector('#clear')
const display = document.querySelector('#display')

tecla.forEach((el)=>{
    el.addEventListener('click', (evt)=>{
        display.innerHTML += evt.target.innerHTML
    })
})

op.forEach((el)=>{
    el.addEventListener('click', (evt)=>{
        display.innerHTML += evt.target.innerHTML
    })
})

limpar.addEventListener('click', (evt)=>{
    display.innerHTML='0'
})