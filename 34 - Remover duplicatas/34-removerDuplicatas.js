// Desafio 34:
// Escreva uma função chamada removeDuplicatas que recebe um array como parâmetro.
// A função deve usar o método .filter() para criar um novo array contendo apenas
// os elementos únicos, ou seja, removendo as duplicatas do array original.

// Exemplo de entrada e saída:


const array = [1, 2, 2, 3, 4, 4, 5, 6, 2, 6];

// Minha solução final.
const removeDuplicatas = (array) => {
    let novoArray = [];
    let resultado = array.filter((valorAtual) => {
        if (!novoArray.includes(valorAtual)) {
            novoArray.push(valorAtual);
        }
    });
    return resultado = novoArray;
}

console.log(removeDuplicatas(array)); // Deve imprimir [1, 2, 3, 4, 5]

// Solução com for...of
// const array = [1, 2, 2, 3, 4, 4, 5];

// function removerDuplicadas(array) {
//     let novoArray = [];
//     for (let numero of array) {
//         if (!novoArray.includes(numero)) {
//             novoArray.push(numero);
//         };
//     };
//     return novoArray;
// }
// console.log(removerDuplicadas(array));


// Solução do chatGPT

// const array = [1, 2, 2, 3, 4, 4, 5];

// const removeDuplicatas = (array) => {
//     return array.filter((valor, indice, arr) => {
//         return arr.indexOf(valor) === indice;
//     })
// }

/*
Nesta abordagem, a função de callback passada para o .filter()
 compara o índice atual com o índice da primeira ocorrência do
 valor no array. Se eles forem iguais, significa que é a primeira
 ocorrência do valor e, portanto, será mantido no array resultante.
 Caso contrário, ele será filtrado.
 */

//console.log(removeDuplicatas(array)) // Deve imprimir [1, 2, 3, 4, 5]