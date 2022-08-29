function troca(lista, a, b){
    let itemAnalise = lista[a];
    let itemAnterior = lista[b];
        
    lista[a] = itemAnterior
    lista[b] = itemAnalise
}

module.exports = troca;