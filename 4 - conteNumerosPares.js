// O objetivo é escrever a função conteNumerosPares que recebe 
// um array de números e retorna a quantidade de números pares 
// presentes nesse array.

// Exemplo de entrada e saída:

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(conteNumerosPares(numeros)); // Deve imprimir 5

// Resolução

function conteNumerosPares(numeros) {
    let qtdNumerosPares = 0;

    for (let numero of numeros) {
        if (numero % 2 === 0) {
            qtdNumerosPares++;
        }
    }

    return qtdNumerosPares;

}
