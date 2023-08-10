// Desafio 30:
// Escreva uma função chamada ordenaNumeros que recebe um array 
// de números como parâmetro. A função deve usar o método .sort() 
// para ordenar os números em ordem crescente.

// Exemplo de entrada e saída:

const array = [3, 1, 4, 2, 5];

const ordenaNumeros = (array) => {
    const resultado = array.sort((a, b) => {
        return a - b;
    });
    return resultado;
};

console.log(ordenaNumeros(array)); // Deve imprimir [1, 2, 3, 4, 5]
