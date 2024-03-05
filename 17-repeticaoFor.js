//Laço de repetição FOR
//Escrever para o usuario 1000x "Prestar mais atenção nas aulas! "

//Mostrando números pares
for (let i = 1; i <= 1000; i += 2) {
  console.log(i);
}

console.log("-------------------------------------");

//Mostrando números impares com if
for (let i = 0; i <= 1000; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log("-------------------------------------");

//Escreva todos os números de 1 a 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

console.log("-------------------------------------");

//Escreva todos os números pares de 1 a 20

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

console.log("-------------------------------------");

for (let i = 2; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

console.log("--------------------------------");

//Dado um vetor com números 5,6,8,14,0,9,7,2
//Calcule e exiba a somatória de seus elementos.
//VAR = cria variável global
//CONST= cria constante, não muda
//LET= cria variável funcional dentro do grupo de códigos
//tudo que está dentro da chave é um grupo

var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var somar = 0;

for (let i = 0; i < numeros.length; i++) {
  somar += numeros[i];
}

console.log(`A somatória dos elementos é ${somar}`);

//Dado um vetor com números 5,6,8,14,0,9,7,2.
//Multiplique todos os seus elementos por 3 utilizando o loop FOR
//Em seguida, mostre o novo vetor.

let num = [5, 6, 8, 14, 0, 9, 7, 2];
var Multiplique = 0;

console.table(num);

for (let i = 0; i < num.length; i++) {
  num[i] *= 3;
}

console.table(num);

//Dada a matriz 2x3, escrever para o usuário todos os seus elementos
//com as respectivas posições da matriz
//[8,4,1]
//[3,7,8]

var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];

console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  //console.log(linha);
  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    console.log(`Matriz[ ${linha}, ${coluna}] = ${matriz[linha][coluna]}`);
  }
}


