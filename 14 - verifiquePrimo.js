// Desafio 14:
// Escreva uma função chamada verifiquePrimo que recebe 
// um número como parâmetro e retorna true se o número for 
// primo e false caso contrário. Um número primo é um número 
// inteiro maior do que 1 que não pode ser formado multiplicando 
// dois números inteiros menores do que ele.

// Exemplos de números primos: 2, 3, 5, 7, 11, 13, 17, ...

// Exemplo de entrada e saída:

console.log(verifiquePrimo(7)); // Deve imprimir true
console.log(verifiquePrimo(10)); // Deve imprimir false

// Resolução

function verifiquePrimo(numero) {
    const conjunto = criarArrayNumerosMenores(numero);
    let primo = false;

    for (let i = 0; i < conjunto.length; i++) {
        for (let j = 0; j < conjunto.length; j++) {
            if ((conjunto[i] * conjunto[j]) === numero) {
                return primo = false;
            } else {
                primo = true;
            }
        }
    }
    return primo;
}

function criarArrayNumerosMenores(numeroCriarArray) {
    let contador = numeroCriarArray - 1;
    const conjuntoNumerosMenores = [];
    while (contador >= 1) {
        conjuntoNumerosMenores.push(contador);
        contador--;
    }
    return conjuntoNumerosMenores;
}

// Feedback ChatGPT:


// Ótimo trabalho! Sua função verifiquePrimo parece estar
// funcionando corretamente. Você criou uma lógica usando
// um loop duplo para verificar se o número é primo.
// A abordagem de criar um array com números menores para
// verificar a multiplicação é uma maneira válida de resolver
// esse desafio.

// No entanto, há um pequeno problema de lógica no código.
// O loop interno, que verifica a multiplicação de dois números
// do conjunto, deve parar e retornar false assim que encontrar
// um par de números que resulta em numero. Caso contrário,
// ele sempre vai atribuir true à variável primo, mesmo se
// futuramente for encontrado um par que resulte em numero.

// Vou sugerir uma pequena alteração para corrigir esse problema:

/*
function verifiquePrimo(numero) {
  const conjunto = criarArrayNumerosMenores(numero);

  for (let i = 0; i < conjunto.length; i++) {
    for (let j = 0; j < conjunto.length; j++) {
      if ((conjunto[i] * conjunto[j]) === numero) {
        return false; // Se encontrar um par, já sabemos que não é primo, então retorna false imediatamente
      }
    }
  }

  return true; // Se não encontrar nenhum par, é primo, retorna true
}

function criarArrayNumerosMenores(numeroCriarArray) {
  let contador = numeroCriarArray - 1;
  const conjuntoNumerosMenores = [];
  while (contador >= 2) { // Começa a partir de 2 para verificar apenas números menores que o número fornecido
    conjuntoNumerosMenores.push(contador);
    contador--;
  }
  return conjuntoNumerosMenores;
}
*/

// Com essa modificação, a função irá retornar false
// assim que encontrar um par que resulte em numero,
// caso contrário, retornará true, indicando que é um número primo.