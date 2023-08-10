// Desafio 33:
// Escreva uma função chamada encontreMaiorDiferenca que recebe um 
// array de números como parâmetro. A função deve encontrar e retornar 
// a maior diferença entre dois elementos adjacentes no array. 
// Se o array tiver menos de dois elementos, a função deve retornar null.

// Exemplo de entrada e saída:

const array = [2, 7, 1, 4, 9];

// Resolução
const encontreMaiorDiferenca = (array) => {
  if (array.length <= 2) {
    return null;
  }

  let maiorDiferenca = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] === undefined) {
      return maiorDiferenca;
    }
    if (array[i] > array[i + 1]) {
      let resultado = array[i] - array[i + 1];
      if (maiorDiferenca < resultado) {
        maiorDiferenca = resultado;
      }
    } else {
      let resultado = array[i + 1] - array[i];
      if (maiorDiferenca < resultado) {
        maiorDiferenca = resultado;
      }
    };
  };
  return maiorDiferenca;
};


console.log(encontreMaiorDiferenca(array)); // Deve imprimir 6 (diferença entre 7 e 1)
