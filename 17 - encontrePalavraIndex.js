// Desafio 17:
// Escreva uma função chamada encontrePalavraIndex que 
// recebe duas strings como parâmetros: uma frase e uma palavra. 
// A função deve retornar o índice da primeira ocorrência da 
// palavra na frase utilizando o método .indexOf().

// Exemplo de entrada e saída:

const frase = "Eu gosto de programar em JavaScript. JavaScript é incrível!";
console.log(encontrePalavraIndex(frase, "JavaScript")); // Deve imprimir 19

// Resolução

function encontrePalavraIndex(frase, palavra) {
    return frase.indexOf(palavra);
}