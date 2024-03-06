//Supondo que a população de um país A seja de a habitantes com uma
//taxa anual de crescimento de 3% que a população de um país B seja
//de b habitantes, com uma taxa anual de crescimento de 1,5%, fazer um
//algoritimo que calcule e escreva o número de anos necessários para que a
//população do país A ultrapasse ou iguale a população do país B,
//mantidas essas taxas de crescimento.

var popA = 100003;
var popB = 300004;
var ano = 0;

while (popA < popB) {
  popA += popA * 0.03;
  popB += popB * 0.015;
  ano++;
}
console.log(
  "Para que a população A ultrapasse a B, serão necessários",
  ano,
  "anos."
);

console.log(`------------------------------------------------------`);

//Criar um "jogo da velha" que mostre as informações dentro da imagem abaixo. Inserir as informações
//de forma ao final quem ganhou X ou 0.

console.log(`___|___|___`);
console.log(`___|___|___`);
console.log(`   |   |   `);
var Jogada;


const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let jogadorX = "X";
let jogadorO = "O";

function jogar(jogador) {
  let linha, coluna;
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
}

jogar(jogadorO);
jogar(jogadorX);
jogar(jogadorO);
jogar(jogadorX);
jogar(jogadorO);
jogar(jogadorX);
jogar(jogadorO);
jogar(jogadorX);
jogar(jogadorO);


console.table(tabuleiro);

console.log(`Parabéns, o jogador ${jogadorO} venceu!`);
