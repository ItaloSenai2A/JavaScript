var matriz2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.table(matriz2);
console.log("A diagonal 1 é", matriz2[0][0], matriz2[1][1], matriz2[2][2]);
console.log("A diagonal 2 é", matriz2[0][2], matriz2[1][1], matriz2[2][0]);
console.log("A diagonal 3 ", matriz2[2][0], matriz2[1][1], matriz2[0][2]);
console.log("A diagonal 4 é", matriz2[2][2], matriz2[1][1], matriz2[0][0]);

//Atividade de cadastro

var usuario = ["Ítalo",
 16,
 "Azul",
"Laranja", 
"Rua: Almeida silva- Jaú",
"Bob",
];

console.log("Olá ,", usuario[0], "! Seja bem vindo ao nosso sistema.");
console.log("Você mora no endereço ,", usuario[4], "E tem um pet chamado", usuario[5]);
console.log("Sua idade é", usuario[1], "e gosta muito da fruta", usuario[3]);
console.log("Sua cor favorita é", usuario[2]);




