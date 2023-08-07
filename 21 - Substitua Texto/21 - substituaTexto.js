// Desafio 21:
// Escreva uma função chamada substituaTexto que recebe três 
// strings como parâmetros: uma frase, uma palavra para buscar 
// e uma palavra para substituir. A função deve buscar todas as 
// ocorrências da palavra para buscar na frase e substituí-las 
// pela palavra para substituir, utilizando o método .replace().

// Exemplo de entrada e saída:

const frase = "O JavaScript é uma linguagem de programação. A linguagem JavaScript é muito popular.";
console.log(substituaTexto(frase, "JavaScript", "Python")); // Deve imprimir "O Python é uma linguagem de programação. A linguagem Python é muito popular."

// Resolução

function substituaTexto(frase, palavraAntiga, novaPalavra) {
    while (frase !== frase.replace(palavraAntiga, novaPalavra)) {
        frase = frase.replace(palavraAntiga, novaPalavra);
    }
    return frase;
}