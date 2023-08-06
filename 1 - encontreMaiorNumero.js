const numeros = [10, 4, 7, 15, 2];

function encontreMaiorNumero(numeros) {
    let maiorNumero = 0;
    for (let numero of numeros) {
        if (numero > maiorNumero) {
            maiorNumero = numero;
        }
    }
    return maiorNumero;
}

console.log(encontreMaiorNumero(numeros)); // Deve imprimir 15
