// Declarndo uma constamte em objeto

const smartphones = {
    'Sansung Galaxy S20': 2300,
    'Moto G52': 1200,
    'Sansung Galaxy A53': 2200,
    'Nokia C01 Plus': 550,
}
console.log(smartphones);

/////////////////////////////////////////////

// Variavel const não pode ser atribuida um novo propriedade

const trybe = 'Turma 29';
trybe = 'turma 29 B';
console.log(trybe);

// Em objeto e array pode atribuir um propriedade na variavei const

const smartphone = {
    'Sansung Galaxy S20': 2300,
    'Moto G52': 1200,
    'Sansung Galaxy A53': 2200,
    'Nokia C01 Plus': 550,
}
smartphone ['iPhone 14 Pro'] = 10000;

console.log(smartphone);

////////////////////////////////////////////

/*FUNÇÃO DE SETA
1. Ela é uma função anônima;
2. Não precisamos utilizar a função palavra chave;
3. Ela possui uma seta => entre os parâmetros e o corpo da função;
4. Quando tenho uma única linha, não preciso utilizar {}, pois o return é implícito;
5. Quando retornarmos um único parâmetro, podemos usar () ou não. Sem parâmetros = () ou _
*/

// function simples

 function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(2 , 8));

// Arrow Function

const sum = (num1, num2) => num1 + num2;
console.log(sum(6,10));

////////////////////////////////

const  sum  =  ( )  =>  console . log ( 'olá' ) ;

const  xablau  =  ( )  =>  { } ;

// 

//TEMPLATE LITERAL
//CRASE/ACENTO GRAVE - BACKTICK ``

const  parOuOdd  =  ( numero )  =>  {
    if ( numero  %  2  ===  0 ) {
      return  'PAR' ;
    }  else {
      return  'ÍMPAR' ;
    }
  }
    let numero = 19;
      console.log(`O número ${numero} é: ${parOuOdd(numero)}`);
   // console.log('O numero ' + numero + ' é: ' + parOuOdd(numero));
  
  