// Desafio 10:
// Escreva uma função chamada junteArrays que recebe 
// dois arrays como parâmetros e retorna um novo array 
// que contém todos os elementos dos dois arrays concatenados.

// Exemplo de entrada e saída:

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(junteArrays(array1, array2)); // Deve imprimir [1, 2, 3, 4, 5, 6]

// Resolução

function junteArrays(array1, array2) {

    for (let numero of array2) {
        adicionarArray(numero);
    }
    return array1;
}

function adicionarArray(numero) {
    array1.push(numero);
}

// Feedback ChatGPT:


// A função adicionarArray faz exatamente o que é necessário:
// adiciona um elemento ao array1. No entanto, há um pequeno
// problema de escopo que precisa ser corrigido.

// O problema é que a função adicionarArray não
// tem acesso direto ao array1 (da função junteArrays)
// porque ela não está declarada como uma variável local
// dentro da função junteArrays. Para resolver isso, você
// pode passar o array1 como um parâmetro para a função adicionarArray.

// Aqui está a correção:

/*
function junteArrays(array1, array2) {
  for (let numero of array2) {
    adicionarArray(numero, array1);
  }
  return array1;
}

function adicionarArray(numero, array) {
  array.push(numero);
}

*/