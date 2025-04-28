let filter = document.querySelectorAll('.time__filter-item')
let jogador = document.querySelectorAll('.time__jogador')

filter.forEach(elem => {
    elem.addEventListener('click', () => {
        filterId = elem.getAttribute('id')
        
        jogador.forEach(idx => {
            idx.classList.remove('disable')

            posicao = idx.getAttribute('class')
            
            if (filterId == "all") {
                idx.classList.remove('disable')
            } else if (posicao != ("time__jogador " + filterId)) {
                idx.classList.add('disable')
            }
        })
    })
})