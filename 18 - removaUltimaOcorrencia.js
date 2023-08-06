// Desafio 18:
// Escreva uma função chamada removaUltimaOcorrencia que 
// recebe duas strings como parâmetros: uma frase e uma palavra. 
// A função deve remover a última ocorrência da palavra na frase 
// utilizando o método .lastIndexOf(). Caso a palavra não exista na 
// frase, a função deve retornar a frase original.

// Exemplo de entrada e saída:


const frase = "O JavaScript é uma linguagem de programação. A linguagem JavaScript é muito popular.";
console.log(removaUltimaOcorrencia(frase, "JavaScript")); // Deve imprimir "O JavaScript é uma linguagem de programação. A linguagem  é muito popular."

// Resolução

function removaUltimaOcorrencia(frase, palavra) {
    let indexInicial = frase.lastIndexOf(palavra);
    let textoAntes = frase.slice(0, indexInicial);
    let textoDepois = frase.slice(indexInicial + palavra.length)
    return textoAntes + textoDepois;
}