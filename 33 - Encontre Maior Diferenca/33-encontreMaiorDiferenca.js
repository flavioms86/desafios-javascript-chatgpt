// Desafio 33:
// Escreva uma função chamada encontreMaiorDiferenca que recebe um 
// array de números como parâmetro. A função deve encontrar e retornar 
// a maior diferença entre dois elementos adjacentes no array. 
// Se o array tiver menos de dois elementos, a função deve retornar null.

// Exemplo de entrada e saída:

const array = [2, 7, 1, 4, 9];
console.log(encontreMaiorDiferenca(array)); // Deve imprimir 5 (diferença entre 7 e 2)


/*

Algoritmo perda minima rackerrank
function solucao(precos) {
const menoresPrejuizos = [];

let index = 0;
let menorValor = precos[0];



while (index < precos.length) {
  for (let i = 0; i < precos.length; i++) {
    if (precos[index] > precos[i + index]) {
        menoresPrejuizos.push(precos[index] - precos[i + index])
    }
  }
  index++;
}

for (let i = 0; i < menoresPrejuizos.length; i++) {
  if(menoresPrejuizos[i] < menorValor) {
    menorValor = menoresPrejuizos[i];
  }
}

console.log(menorValor);
}
*/
