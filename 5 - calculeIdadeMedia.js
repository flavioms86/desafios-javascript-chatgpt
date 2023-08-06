// Desafio 5:
// Escreva uma função chamada calculeIdadeMedia que 
// recebe um array de idades como parâmetro e retorna a 
// média das idades.

// Exemplo de entrada e saída:

const idades = [18, 20, 25, 30];
console.log(calculeIdadeMedia(idades)); // Deve imprimir 23.25

// Resolução

function calculeIdadeMedia(idades) {
    let somaIdade = 0;
    for (let idade of idades) {
        somaIdade += idade;
    }
    return somaIdade / idades.length
}