// Desafio 11:
// Escreva uma função chamada calculeFatorial que recebe um 
// número como parâmetro e retorna o fatorial desse número. 
// O fatorial de um número inteiro positivo "n" é o produto de 
// todos os números inteiros positivos menores ou iguais a "n".

// Por exemplo, o fatorial de 5 (indicado por 5!) é igual 
// a 5 x 4 x 3 x 2 x 1 = 120.

// Exemplo de entrada e saída:

console.log(calculeFatorial(5)); // Deve imprimir 120

// Resolução:

function calculeFatorial(numero) {

    let fatorial = 1;

    for (i = numero; i > 0; i--) {
        fatorial *= i;
    }
    return fatorial;
}