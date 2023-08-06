// Desafio 16:
// Escreva uma função chamada conteSubstring que 
// recebe duas strings como parâmetros e retorna o número de 
// ocorrências da segunda string na primeira. Utilize 
// o método .includes() para verificar as ocorrências.

// Exemplo de entrada e saída:

const texto = "Olá, tudo bem? Olá, sim, tudo bem!";
console.log(conteSubstring(texto, "Olá")); // Deve imprimir 2

// Resolução

function conteSubstring(texto, string) {
    let contador = 0;
    const palavras = separarPalavras(texto);
    for (let palavra of palavras) {
        if (palavra.includes(string)) {
            contador++
        };
    }
    return contador;
}

function separarPalavras(texto) {
    const palavras = texto.split(" ");
    return palavras;
}