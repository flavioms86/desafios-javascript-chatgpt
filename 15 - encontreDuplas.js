// Desafio 15:
// Escreva uma função chamada encontreDuplas que recebe um array 
// de números como parâmetro e retorna um novo array contendo 
// todas as duplas de números cuja soma seja igual a 10. 
// As duplas devem ser representadas por arrays com dois números cada.

// Exemplo de entrada e saída:

const numeros = [2, 4, 6, 3, 7, 8, 1];
console.log(encontreDuplas(numeros)); // Deve imprimir [[2, 8], [4, 6], [3, 7]]

// Resolução

function encontreDuplas(numeros) {

    const arrayPares = [];
    let paresNumerosSoma10 = [];
    let contador = 1;

    for (let i = 0; i < numeros.length; i++) {
        for (let j = contador; j < numeros.length; j++) {
            if (numeros[i] + numeros[j] === 10) {
                paresNumerosSoma10.push(numeros[i], numeros[j]);
                arrayPares.push(paresNumerosSoma10);
                paresNumerosSoma10 = [];
            }
        }
        contador++;
    }
    return arrayPares;
}