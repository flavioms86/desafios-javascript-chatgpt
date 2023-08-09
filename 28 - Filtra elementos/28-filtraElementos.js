// Desafio 28:
// Escreva uma função chamada filtraElementos que recebe um array e 
// uma função de teste como parâmetros. A função deve usar o 
// método .filter() para criar um novo array contendo apenas os 
// elementos que atendem à condição estabelecida pela função de teste.

// Exemplo de entrada e saída:

const array = [1, 2, 3, 4, 5];

const filtraElementos = ((array, callback) => {
    return array.filter(callback);
});

console.log(filtraElementos(array, (elemento) => elemento % 2 === 0)); // Deve imprimir [2, 4]
console.log(filtraElementos(array, (elemento) => elemento > 5)); // Deve imprimir []
