/*
Desafio 35:
Escreva uma função chamada contagemVogais que recebe uma string como 
parâmetro e retorna um objeto contendo a contagem de cada 
vogal (A, E, I, O, U) presente na string. 
O objeto deve ter as propriedades 'a', 'e', 'i', 'o' e 'u', 
representando a quantidade de vezes que cada vogal 
aparece na string (sem distinguir maiúsculas de minúsculas).

Exemplo de entrada e saída:
*/

// const texto = "Olá, como você está?";

// Minha solução
const contagemVogais = (texto) => {
    let vogais = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    }

    for (let i = 0; i < texto.length; i++) {
        if ("aAáàã".includes(texto[i])) {
            vogais.a += 1;
        } else if ("eEéê".includes(texto[i])) {
            vogais.e += 1;
        } else if ("iIí".includes(texto[i])) {
            vogais.i += 1;
        } else if ("oOóõ".includes(texto[i])) {
            vogais.o += 1;
        } else if ("uUú".includes(texto[i])) {
            vogais.u += 1;
        }
    }

    return vogais;
}

console.log(contagemVogais(texto)); // Deve imprimir { a: 2, e: 2, i: 0, o: 4, u: 0 }
