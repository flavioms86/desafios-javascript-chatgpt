// Desafio 20:
// Escreva uma função chamada inverteTexto que recebe uma 
// string como parâmetro e retorna a mesma string com as 
// palavras invertidas. Para inverter as palavras, utilize 
// o método .split() para separar as palavras em um array, e 
// depois utilize o método .reverse() para inverter a ordem do array. 
// Por fim, utilize o método .join() para juntar as palavras 
// novamente em uma string.

// Exemplo de entrada e saída:

const texto = "JavaScript é uma linguagem de programação.";
console.log(inverteTexto(texto)); // Deve imprimir "programação. de linguagem uma é JavaScript"

// Resolução

function inverteTexto(texto) {
    const palavras = texto.split(" ");
    palavras.reverse();
    return palavras.join(" ");
}