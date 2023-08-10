// Desafio 32:
// Escreva uma função chamada calculeSoma que recebe um array 
// de números como parâmetro. A função deve usar o método .reduce() 
// para calcular a soma de todos os números no array e retornar o 
// resultado.

// Exemplo de entrada e saída:

const array = [1, 2, 3, 4, 5];

const calculeSoma = (array) => {
    const resultado = array.reduce((acumulador, numero) => {
        return acumulador + numero;
    });
    return resultado;
};

console.log(calculeSoma(array)); // Deve imprimir 15
