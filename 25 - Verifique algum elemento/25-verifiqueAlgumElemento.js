// Desafio 25:
// Escreva uma função chamada verifiqueAlgumElemento que recebe 
// um array e uma função de teste como parâmetros. A função deve usar o
//  método .some() para verificar se pelo menos um elemento do array atende
//   à condição estabelecida pela função de teste. A função deve retornar true
//    se pelo menos um elemento atender à condição ou false se nenhum elemento atender.

// Exemplo de entrada e saída:

const array = [1, 2, 3, 4, 5];

const verifiqueAlgumElemento = (array, callback) => {
    return array.some(callback);

};

console.log(verifiqueAlgumElemento(array, (elemento) => elemento > 3)); // Deve imprimir true
console.log(verifiqueAlgumElemento(array, (elemento) => elemento > 5)); // Deve imprimir false
