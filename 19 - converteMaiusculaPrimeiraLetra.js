// Desafio 19:
// Escreva uma função chamada converteMaiusculaPrimeiraLetra 
// que recebe uma string como parâmetro e retorna a mesma string 
// com a primeira letra em maiúscula utilizando o método .toUpperCase() 
// e .slice().

// Exemplo de entrada e saída:

const texto = "javascript é uma linguagem de programação.";
console.log(converteMaiusculaPrimeiraLetra(texto)); // Deve imprimir "Javascript é uma linguagem de programação."

// Resolução

function converteMaiusculaPrimeiraLetra(texto) {
    let primeiraLetra = texto.slice(0, 1);
    let restoTexto = texto.slice(1);
    return `${primeiraLetra.toUpperCase()}${restoTexto}`;
}