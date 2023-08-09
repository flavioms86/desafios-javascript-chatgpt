// Desafio 24:
// Escreva uma função chamada encontreElemento que recebe um array e 
// um elemento como parâmetros. A função deve usar o método .includes() 
// para verificar se o elemento está presente no array e retornar true se 
// estiver ou false se não estiver.

// Exemplo de entrada e saída:

const array = [1, 2, 3, 4, 5];

// Resolução
function encontreElemento(array, elemento) {
    return array.includes(elemento);
}


console.log(encontreElemento(array, 3)); // Deve imprimir true
console.log(encontreElemento(array, 6)); // Deve imprimir false
