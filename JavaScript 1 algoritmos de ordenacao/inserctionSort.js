const livros = require('./listaLivros');
const troca = require('./troca');

function inserctionSort(lista){
    for(let atual = 0; atual < lista.length; atual++){
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise -1].preco) { 
            troca(lista, analise, analise -1)
            analise --
        }
    }
    console.log(lista)
}

inserctionSort(livros);