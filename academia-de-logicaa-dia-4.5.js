// Exercício 1 - Crie uma função que calcula a área e o perímetro de um quadrilátero qualquer.
// Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato:
// Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura


function calculaQuadrilhateo(base, altura) {
    let objeto = {
        perimeto: (2 * base) + (2 * altura),
        area: base * altura,
    };
    return objeto;
}
console.log(calculaQuadrilhateo(10, 10));

///////////////////////////////////////

function calcQuadrilhatero(base, altura) {
    let numeros = {
        pares: 0,
        impares: 0,
    };
}
console.log(calcQuadrilhatero(10, 10));


// Exercício 2 - Crie uma função que, dado um array de números inteiros,
// retorne a quantidade de números pares e ímpares no formato:

function paresImpares(arrayNumeros) {
    let numeros = {
        pares: 0,
        ímpares: 0,
    };
    for (let index = 0; index < arrayNumeros.length; index += 1) {
        if (arrayNumeros[index] % 2 === 0) {
            numeros.pares += 1;
        } else {
            numeros['ímpares'] += 1;
        }
    }
    return numeros;
}
console.log(paresImpares([10, 18, 24, 21, 33, 8, 5, 57]));

/////////////////////////////////////////////////////////////


function paresImpares(arrayNumeros) {
    let numeros = {
        pares: [],
        ímpares: [],
    };
    for (let index = 0; index < arrayNumeros.length; index += 1) {
        if (arrayNumeros[index] % 2 === 0) {
         numeros.pares.push(arrayNumeros[index]);
        } else {
            numeros['ímpares'].push(arrayNumeros[index]);
        }
    }
    return numeros;
}
console.log(paresImpares([10, 18, 24, 21, 33, 8, 5, 57]));



// Exercício 3 - Crie uma função que recebe uma string word e outra string ending. Verifique se o final da string é o final da palavra da string.
// Considera que um final de string sempre será menor que uma palavra de string.
// Dica: Use o split.

// valor de teste: 'trybe' e 'be'
// valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperava: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false;

 function verificaFimPalavra(word, ending) {
    let resultado = word.split(ending);
    if (resultado[resultado.length - 1] === ' '){
        console.log(resultado);
        return true;
    }
        return false;
 }

console.log(verificaFimPalavra('trybe', 'be'));

//////////////////////////////////////////////////////////////////

function meusNumeros(arrayNumeros) {
    for (let index = 0; index < arrayNumeros.length; index += 1) {
        return (arrayNumeros);
    }
} console.log(meusNumeros([10, 13, 28, 73, 19]));


