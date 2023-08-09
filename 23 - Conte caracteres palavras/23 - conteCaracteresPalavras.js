// Desafio 23:
// Escreva uma função chamada conteCaracteresPalavras 
// que recebe uma string como parâmetro e retorna um objeto 
// contendo a quantidade de caracteres e a quantidade de 
// palavras na string. O objeto deve ter o seguinte formato:

/*
{
    "caracteres": quantidadeCaracteres,
    "palavras": quantidadePalavras
  }
*/

// Considere que as palavras são separadas por espaços em branco.

// Exemplo de entrada e saída:

const texto = "Eu gosto de programar em JavaScript.";

// Resolução

function conteCaracteresPalavras(texto) {
  const tamanhoTexto = texto.length;
  const textoSeparado = texto.split(" ");
  const palavrasObj = {
    "caracteres": tamanhoTexto,
    "palavras": textoSeparado.length
  }
  return palavrasObj;
}

console.log(conteCaracteresPalavras(texto)); // Deve imprimir { "caracteres": 36, "palavras": 6 }

