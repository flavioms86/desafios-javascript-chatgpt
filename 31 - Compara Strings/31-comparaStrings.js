// Desafio 31:
// Escreva uma função chamada comparaStrings que recebe duas 
// strings como parâmetros. A função deve usar o método .localeCompare() 
// para comparar as strings. Ela deve retornar um valor negativo 
// se a primeira string for lexicograficamente menor que a segunda, 
// um valor positivo se for maior, e zero se as strings forem iguais.

// Exemplo de entrada e saída:

const comparaStrings = (string1, string2) => {
    return string1.localeCompare(string2);
}

console.log(comparaStrings("banana", "abacaxi")); // Deve imprimir um valor positivo
console.log(comparaStrings("laranja", "laranja")); // Deve imprimir zero
console.log(comparaStrings("uva", "uvaia")); // Deve imprimir um valor negativo
