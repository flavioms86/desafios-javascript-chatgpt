// Desafio 7:
// Escreva uma função chamada invertaArray que recebe um 
// array como parâmetro e retorna um novo array com a ordem 
// dos elementos invertida.

// Exemplo de entrada e saída:

const numeros = [1, 2, 3, 4, 5];
console.log(invertaArray(numeros)); // Deve imprimir [5, 4, 3, 2, 1]

// Resolução

function invertaArray(numeros) {

    const numerosInvertidos = [];

    for (let i = numeros.length - 1; i >= 0; i--) {
        numerosInvertidos.push(numeros[i]);
    }

    return numerosInvertidos;

}