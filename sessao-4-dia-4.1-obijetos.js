//   ***  Objetos  ***  //

let pessoa = {
    nome: 'Altison',
    sobreNome: 'sousa',
    idade: 49,
    sexo: 'masculino',
    estadoCivil: 'casado',
    esposa: 'celia',
    condição: 'Fé',
    comidas: ['biscoito', 'chocolate'],
    filhos: {
        filhosMenores: ['Ryan', 'Luka', 'Eric'],
        filhosMaiores: ['Mariana', 'Vinicius']
    },
    carro: {
        modelo: 'palio Weekend',
        cor: 'verde',
        ano: 2009,
  }
}
 
console.log(pessoa.filhos.filhosMenores);
console.log(pessoa);





//  Escreva os códigos abaixo no seu VSCode para acompanhar os resultados.

let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
}
console.log(diasDaSemana['5']);

//  Agora veja este exemplo:
let conta = {
    agencia: '0000',
    banco: {
        cod: '012',
        id: 4,
        nome: 'TrybeBank',
    },
};

let infoDoBanco = 'banco';
console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
console.log(conta[infoDoBanco]['nome']); // TrybeBank

console.log(conta.agencia); // 0000
console.log(conta['agencia']); // 0000

console.log(conta.banco.cod); // 012
console.log(conta['banco']['id']); // 4

//Neste outro exemplo, veja como vamos adicionar as informações de forma encadeada:
let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
        nome: 'Jake',
        sobrenome: 'Peralta',
        endereco: {
            rua: 'Smith Street',
            bairro: 'Brooklyn',
            cidade: 'Nova Iorque',
            estado: 'Nova Iorque',
        },
    },
};

console.log(usuario['id']); // 99
console.log(usuario.email); // jakeperalta@gmail.com

console.log(usuario.infoPessoal.endereco.rua); // Smith Street
console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque


let moradores = [
    {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
    },
    {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
    },
    {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
    },
    {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
    },
];

let primeiroMorador = moradores[0];
console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
console.log(primeiroMorador['andar']); // 10

let ultimoMorador = moradores[moradores.length - 1];
console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
console.log(ultimoMorador.nome); // Zoey

// Para fixar

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };