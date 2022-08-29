const livros = require ("./listaLivros");
const menorValor = require ('./menorValor');
const troca = require("./troca");


for(let i = 0; i < livros.length; i++){
    let menor = menorValor(livros, i)
    
    troca(livros, i, menor);
}

console.log(livros)

