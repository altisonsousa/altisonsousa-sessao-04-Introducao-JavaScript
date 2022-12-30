const perssonagens = {
    Guerreiro: {
        hp: 100,
        atak: 30,
        armas: ['espada', 'escudo'],
    },
    Mago: {
        hp: 100,
        atak: 30,
        armas: ['espada', 'cajado'],
    }
}


const inimigo = {
    Dragão:{
         hp: 750,
        atak: 30,
        drop: ['Moedas de ouro', 'Armadura'],
    }
} 

/*onsole.log(perssonagens.Guerreiro);   
console.log(perssonagens.Mago);
console.log(inimigo.dragão);
*/

const perssonagensAtak = () => { // parametros já declarados no espo
    let hpDoInimigo = inimigo.Dragão.hp;
    hpDoInimigo -= perssonagens.Guerreiro.atak;
    hpDoInimigo -= perssonagens.Mago.atak;
    return hpDoInimigo;
}
 
const dragãoAtak = () => {
    let hpPerssonagen = perssonagens.Guerreiro.hp;
    hpPerssonagen -= inimigo.Dragão.atak;
    return hpPerssonagen;
}  
const jogo = () => {
        inimigo.Dragão.hp = perssonagensAtak(perssonagens, inimigo);
        console.log(inimigo.Dragão.hp);
    }
    jogo();




///////////////////////////////////////////////

  console.log(dragãoAtak(perssonagens, inimigo));

 /////////////////////////////////////////////////////////

   console.log(perssonagensAtak(perssonagens, inimigo));

   //////////////////////////////////////////////////////////

  