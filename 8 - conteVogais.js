// Desafio 8:
// Escreva uma função chamada conteVogais que recebe uma 
// string como parâmetro e retorna a quantidade de vogais 
// (letras "a", "e", "i", "o" e "u") presentes na string. 
// A contagem deve ser case-insensitive, ou seja, deve 
// considerar tanto vogais maiúsculas como minúsculas.

// Exemplo de entrada e saída:

const texto = "Olá, estou praticando JavaScript!";
console.log(conteVogais(texto)); // Deve imprimir 10

// Resolução

function conteVogais(texto) {
    let contador = 0;
    for (let caractere of texto) {
        if (caractere === "a" || caractere === "A" || caractere === "e" || caractere === "E" || caractere === "i" || caractere === "I" || caractere === "o" || caractere === "O" || caractere === "u" || caractere === "U") {
            contador++;
        }
    }

    return contador;
}

// Sugestão ChatGPT:

/*

function conteVogais(texto) {
  let contador = 0;
  for (let caractere of texto) {
    if ("aeiouAEIOU".includes(caractere)) {
      contador++;
    }
  }
  return contador;
}
*/