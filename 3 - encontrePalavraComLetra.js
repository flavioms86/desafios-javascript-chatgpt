// Desafio 3:
// Escreva uma função chamada encontrePalavrasComLetra que 
// recebe um array de palavras e uma letra como parâmetros. 
// A função deve retornar um novo array contendo apenas as 
// palavras que contêm a letra especificada, independentemente 
// de ser maiúscula ou minúscula.

// Exemplo de entrada e saída:

const palavras = ['Abacaxi', 'Banana', 'maçã', 'Pera', 'uva'];
console.log(encontrePalavrasComLetra(palavras, 'a')); // Deve imprimir ['Abacaxi', 'Banana', 'maçã', 'uva']

// Resolução
const selecaoFrutas = [];

function encontrePalavrasComLetra(palavras, letra) {
    for (let palavra of palavras) {
        if (acharLetraFruta(palavra, letra)) {
            selecaoFrutas.push(palavra)
        }
    }
    return selecaoFrutas;
}

function acharLetraFruta(fruta, letra) {
    for (let charactere of fruta) {
        if (charactere === letra.toUpperCase() || charactere === letra.toLowerCase()) {
            return true;
        }
    }
}

// Feedback chatGPT:

// A única sugestão que tenho é fazer uma pequena
// alteração para melhorar a clareza do código.
// Vamos modificar a função acharLetraFruta para que ela retorne
// false caso a letra não seja encontrada. Isso deixará a
// solução mais explícita:

/*
function acharLetraFruta(fruta, letra) {
  for (let charactere of fruta) {
    if (charactere === letra.toUpperCase() || charactere === letra.toLowerCase()) {
      return true;
    }
  }
  return false; // Se chegou aqui, a letra não foi encontrada na palavra
}
*/

// Com essa alteração, a função acharLetraFruta retornará true
// se encontrar a letra na palavra e false caso contrário.

// Agora que aprimoramos a função acharLetraFruta, podemos
// aplicar o mesmo conceito em outra parte do código:

/*
function encontrePalavrasComLetra(palavras, letra) {
  const selecaoFrutas = []; // Movemos a declaração da array para dentro da função

  for (let palavra of palavras) {
    if (acharLetraFruta(palavra, letra)) {
      selecaoFrutas.push(palavra);
    }
  }

  return selecaoFrutas;
}
*/

