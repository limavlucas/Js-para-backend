const listaLivros = require('./array');

function mergeSort(array){

    if(array.length > 1){
        const meio = Math.floor(array.length / 2);
        const part1 = mergeSort(array.slice(0, meio));
        const part2 = mergeSort(array.slice(meio, array.length));
        array = ordena(part1,part2)
    }

    return array
}

function ordena(comeco, final){
    let posicaoAtualPart1 = 0 
    let posicaoAtualPart2 = 0
    const resultado = []

    while ( posicaoAtualPart1 < comeco.length && posicaoAtualPart2 < final.length){
        let produtoAtualpart1 = comeco [ posicaoAtualPart1]
        let produtoAtualpart2 = final [posicaoAtualPart2]

        if(produtoAtualpart1.preco < produtoAtualpart2.preco){
            resultado.push(produtoAtualpart1)
            posicaoAtualPart1 ++
        }else{
            resultado.push(produtoAtualpart2)
            posicaoAtualPart2 ++
        }
    }

    return resultado.concat(posicaoAtualPart1 < comeco.length
        ? comeco.slice(posicaoAtualPart1)
        : final.slice(posicaoAtualPart2))
}

console.log(mergeSort(listaLivros))