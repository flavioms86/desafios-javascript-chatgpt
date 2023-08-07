// Desafio 12:
// Escreva uma função chamada contePalavras que recebe 
// uma string como parâmetro e retorna o número de 
// palavras presentes nessa string. Considere que as 
// palavras são separadas por espaços em branco.

// Exemplo de entrada e saída:

const texto = "Essa é uma frase de exemplo";
console.log(contePalavras(texto)); // Deve imprimir 6

// Resolução

function contePalavras(texto) {
    const palavras = [];
    let palavra = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " ") {
            palavra += texto[i];
        } else {
            palavras.push(palavra);
            palavra = "";
        }
    }
    if (palavra !== "") {
        palavras.push(palavra);
    }
    return palavras.length;
}
