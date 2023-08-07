// Desafio 13:
// Escreva uma função chamada conteCaracteres que recebe 
// uma string e um caractere como parâmetros e retorna o 
// número de ocorrências desse caractere na string.

// Exemplo de entrada e saída:

const texto = "Hello, world!";
console.log(conteCaracteres(texto, 'l')); // Deve imprimir 3

// Resolução

// Fiz de duas formas. Nessa primeira ignora maiuscula de minuscula: 

function conteCaracteres(texto, caractere) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caractere.toUpperCase() || texto[i] === caractere.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}

// E dessa outra forma so identifica se o caractere for
// maiuscula ou minuscula:

/*
function conteCaracteres(texto, caractere) {
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === caractere) {
      contador++;
    }
  }
  return contador;
}
*/