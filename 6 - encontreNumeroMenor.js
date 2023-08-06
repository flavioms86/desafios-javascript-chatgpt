// Desafio 6:
// Escreva uma função chamada encontreNumeroMenor que 
// recebe um array de números como parâmetro e retorna 
// o menor número presente nesse array.

// Exemplo de entrada e saída:

const numeros = [10, 4, 7, 15, 2];
console.log(encontreNumeroMenor(numeros)); // Deve imprimir 2

// Resolução

function encontreNumeroMenor(numeros) {
    let menorNumero = numeros[0];

    for (let numero of numeros) {
        if (numero < menorNumero) {
            menorNumero = numero;
        }
    }

    return menorNumero;
}