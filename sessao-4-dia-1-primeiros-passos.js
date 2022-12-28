
//   ***   Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas   ***

let paciente = 50;
let estaInscrito = true;
const pacienteInfo = {
  nome: 'Ana',
  sobreNome: 'Santos',
};
const pacienteEmail = 'ana@email.com';
console.log(typeof paciente);
console.log(typeof estaInscrito);
console.log(typeof pacienteInfo);
console.log(typeof pacienteEmail);

//   ***  Variáveis  ***

const meuNome = 'Altison';
console.log(meuNome);
const minhaCidade = 'Santo Antonio de Jesus';
console.log(minhaCidade);
const anoDeNacimento = 1973;
console.log(anoDeNacimento);

//minhaCidade = "The Sky";
//console.log(minhaCidade); TypeError: Atribuição à constante


// Crie uma constante chamada base e atribua a ela o valor 5.

//Crie uma constante uma chamada heigth e atribua a ela o valor 8.

//Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela heigth. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!

//Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

const base = 5;
const heigth = 8;
const area = base * heigth;
console.log(area);
const perimeter = 40;

// ***  if/else  ***

const notaPessoa = 98;
if (notaPessoa >= 80) {
  console.log("Parabéns, você faz parte do grupo das pessoas aprovadas!");

} else if (notaPessoa < 80 && notaPessoa >= 60) {
  console.log("Você está na nossa lista de espera");

} else if (notaPessoa < 60) {
  console.log("Infelizmente, você reprovou.");
} else if (notaPessoa < 60) {
  console.log("Infelizmente, você reprovou.");
}

// Precisamos manter em mente que só teremos true se as duas expressões em volta dele forem true também.

const comida = 'pão na chapa';
const bebida = 'cafézinho';
if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

// Execute o código abaixo e veja que a verificação é false porque uma das condições não é true.

const conditionOne = true;
const conditionTwo = false;
console.log(conditionOne && conditionTwo);

// Crie uma constante chamada “currentHour”, que receba um número entre 4 e 24 de sua escolha, para representar as horas do dia.

// Crie uma variável chamada “message” que, inicialmente, é uma string vazia.

// Implemente condicionais para que:

// Se o horário for maior ou igual a 22, insira “Não deveríamos comer nada, é hora de dormir” na variável “message”.

// Se o horário for maior ou igual a 18 e menor que 22, insira “Rango da noite, vamos jantar :D” na variável “message”.

// Se o horário for maior ou igual a 14 e menor que 18, insira “Vamos fazer um bolo pro café da tarde?” na variável “message”.

// Se o horário for maior ou igual a 11 e menor que 14, insira “Hora do almoço!!!” na variável “message”.

// Se o horário estiver entre 4 e 11, insira “Hmmm, cheiro de café recém-passado” na variável “message”.

// Agora imprima a variável message fora das suas condições.

const currentHour = 20;
let message = "";
if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";

} else if (currentHour >= 18 && currentHour > 22) {
  message = "nsira “Rango da noite, vamos jantar :D";

} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";

} else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço!!!” na variável “message";

} else if (currentHour >= 4 && currentHour < 11) {
  message = "Hmmm, cheiro de café recém-passado";
} console.log(message);


// Crie uma variável chamada “weekDay” que receba a string “quarta-feira”.

// Utilizando if/else, implemente condicionais para que:

// Se nossa variável “weekDay” for “segunda-feira”, “terça-feira”, “quarta-feira”, “quinta-feira” ou “sexta-feira”, imprima “Oba, mais um dia de aprendizado na Trybe >:D”.

// Se for algum dia de fim de semana, imprima “FINALMENTE, descanso merecido UwU”.

const weekDay = "quarta-feira";

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {

  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
  console.log("FINALMENTE, descanso merecido UwU");
}

// Crie uma variável para armazenar o status da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';
// Crie uma estrutura condicional com o switch/case que irá imprimir as seguintes mensagens:
// Caso 'aprovada', imprima “Parabéns, você foi aprovada(o)!”.
// Caso 'lista', imprima “Você está na nossa lista de espera”.
// Caso 'reprovada', imprima “Você foi reprovada(o)”.
// Caso default, imprima a mensagem de “Informação incorreta”.

let statusPessoa = 'aprovado';

switch (statusPessoa) {
  case 'aprovado':
    console.log('Parabéns, você foi aprovada(o)!');
    break

  case 'lista':
    console.log('Você está na nossa lista de espera');
    break

  case 'reprovado':
    console.log('Você foi reprovada(o)');
    break

  default:
    console.log('Informação incorreta');
}