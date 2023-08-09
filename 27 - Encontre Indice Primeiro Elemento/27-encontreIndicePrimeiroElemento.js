// Desafio 27:
// Escreva uma função chamada encontreIndicePrimeiroElemento 
// que recebe um array e uma função de teste como parâmetros. 
// A função deve usar o método .findIndex() para encontrar o índice 
// do primeiro elemento do array que atende à condição estabelecida 
// pela função de teste. A função deve retornar o índice encontrado 
// ou -1 se nenhum elemento atender.

// Exemplo de entrada e saída:

const array = [1, 2, 3, 4, 5];

const encontreIndicePrimeiroElemento = ((array, callback) => {
    return array.findIndex(callback);
});


console.log(encontreIndicePrimeiroElemento(array, (elemento) => elemento > 2)); // Deve imprimir 2 (índice do elemento 3)
console.log(encontreIndicePrimeiroElemento(array, (elemento) => elemento > 5)); // Deve imprimir -1
