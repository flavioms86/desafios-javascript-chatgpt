// Desafio 29:
// Escreva uma função chamada mapeiaElementos que recebe um array e 
// uma função de mapeamento como parâmetros. A função deve usar o 
// método .map() para criar um novo array contendo os elementos 
// transformados de acordo com a função de mapeamento.

// Exemplo de entrada e saída:

const array = [1, 2, 3, 4, 5];

// Resolução
const mapeiaElementos = ((array, callback) => {
    return array.map(callback);
});

console.log(mapeiaElementos(array, (elemento) => elemento * 2)); // Deve imprimir [2, 4, 6, 8, 10]
console.log(mapeiaElementos(array, (elemento) => elemento + 10)); // Deve imprimir [11, 12, 13, 14, 15]
