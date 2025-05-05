const nome = document.querySelector('#nome')
const numero = document.querySelector('#numero')
const btn = document.querySelector('#btn')
const camisaNome = document.querySelector('#camisa__nome')
const camisaNumero = document.querySelector('#camisa__numero')

btn.addEventListener('click', () => {
    nomeUser = nome.value
    camisaNome.innerHTML = nomeUser

    numUser = numero.value
    camisaNumero.innerHTML = numUser
})