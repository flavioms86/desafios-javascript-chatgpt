// Desafio 1:
// Escreva uma função chamada encontreMaiorNumero que 
// recebe um array de números como parâmetro e retorna o 
// maior número presente nesse array.

// Exemplo de entrada e saída:

const numeros = [10, 4, 7, 15, 2];

// Resolução
function encontreMaiorNumero(numeros) {

    let maiorNumero = 0;
    for (let numero of numeros) {
        if (numero > maiorNumero) {
            maiorNumero = numero;
        }
    }
    return maiorNumero;
}

console.log(encontreMaiorNumero(numeros)); // Deve imprimir 15
