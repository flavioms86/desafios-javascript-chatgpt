// Desafio 26:
// Escreva uma função chamada encontrePrimeiroElemento que 
// recebe um array e uma função de teste como parâmetros. 
// A função deve usar o método .find() para encontrar o primeiro 
// elemento do array que atende à condição estabelecida pela 
// função de teste. A função deve retornar o elemento encontrado 
// ou undefined se nenhum elemento atender.

// Exemplo de entrada e saída:

const array = [1, 2, 3, 4, 5];

const encontrePrimeiroElemento = (array, callback) => {
    return array.find(callback);
}

console.log(encontrePrimeiroElemento(array, (elemento) => elemento > 2)); // Deve imprimir 3
console.log(encontrePrimeiroElemento(array, (elemento) => elemento > 5)); // Deve imprimir undefined
