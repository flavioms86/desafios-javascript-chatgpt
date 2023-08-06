// Desafio 22:
// Escreva uma função chamada conteCaracteresRepetidos 
// que recebe uma string como parâmetro e retorna um objeto 
// contendo os caracteres repetidos na string e a quantidade 
// de vezes que eles se repetem. 

// O objeto deve ter o seguinte formato:
/*
{
    "caractere1": quantidade1,
    "caractere2": quantidade2,
    ...
  }
*/

// Utilize o método .indexOf() para verificar as 
// ocorrências dos caracteres na string.

// Exemplo de entrada e saída:

const texto = "abracadabra";
console.log(conteCaracteresRepetidos(texto)); // Deve imprimir { "a": 4, "b": 2, "r": 2 }

// Resolução

function conteCaracteresRepetidos(texto) {
    const letrasRepetidas = {};
    for (let i = 0; i < texto.length; i++) {
        if ((contarLetras(texto, texto[i]) - 1) !== 0) {
            letrasRepetidas[texto[i]] = (contarLetras(texto, texto[i]) - 1);
        }
    }
    return letrasRepetidas;
}

function contarLetras(texto, letra) {
    let count = 0;
    let position = texto.indexOf(letra);
    while (position !== -1) {
        count++;
        position = texto.indexOf(letra, position + 1);
    }
    return count;
}