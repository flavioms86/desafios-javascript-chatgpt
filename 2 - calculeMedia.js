// Desafio 2:
// Escreva uma função chamada calculeMedia que recebe 
// um array de números como parâmetro e retorna a média 
// aritmética desses números.

// Exemplo de entrada e saída:

const numeros = [10, 20, 30, 40, 50];
console.log(calculeMedia(numeros)); // Deve imprimir 30

// Resolução

function calculeMedia(numeros) {
    let somaNumeros = 0;
    for (let numero of numeros) {
        somaNumeros += numero;
    }

    return somaNumeros / numeros.length;
}
