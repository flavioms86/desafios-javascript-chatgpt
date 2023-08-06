// Desafio 9:
// Escreva uma função chamada removaElemento que 
// recebe um array e um elemento como parâmetros e 
// retorna um novo array sem o elemento especificado. 
// Se o elemento aparecer várias vezes no array, todas 
// as ocorrências devem ser removidas.

// Exemplo de entrada e saída:

const numeros = [1, 2, 3, 4, 5, 6, 3, 7, 8, 3];
console.log(removaElemento(numeros, 3)); // Deve imprimir [1, 2, 4, 5, 6, 7, 8]

// Resolução

function removaElemento(numeros, numero) {

    const novosNumeros = [];

    for (let elemento of numeros) {
        if (elemento !== numero) {
            novosNumeros.push(elemento)
        }
    }

    return novosNumeros;
}