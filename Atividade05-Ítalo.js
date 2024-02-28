function idade(ano) {
  var year = 2024;
  return year - ano;
}
console.log(`A sua idade é ${idade(2008)}`);
console.log(`--------------------------------------`);

//Exercício 2:

function km(combustivel) {
  var km = 12;
  return km * combustivel;
}
console.log(`Tendo 5 litros, o carro viaja ${km(48)} km`);

console.log("-----------------------------------------------");

//Exercício 3:

function votar(idade) {
  if (idade < 16) console.log("Você não pode votar!");
  else if (idade >= 16 && idade < 18)
    console.log("Você pode votar, mas não é obrigatório!");
  else console.log("Você pode votar!");
}
votar(17);

//Utilizando o switchCase

console.log("---------------------------------------");

function votacao(idade) {
  switch (true) {
    case idade < 16:
      console.log(`Você não pode votar!`);
      break;
    case idade >= 16 && idade < 18:
      console.log(`Você pode votar, mas não é obrigatório!`);
      break;
    default:
      console.log(`Você pode votar!`);
      break;
  }
}
votacao(17);
