// Criando um objeto do tipo "data"

var data1 = new Date();
console.log(data1);

// Criando um objeto do tipo "data" com data específica Date()

var data2 = new Date("2008=03-28");
console.log(data2);

// Extraindo partes de uma data

var data3 = new Date("2024=03-13");
console.log(`Data: ${data3}`);
console.log(`Ano: ${data3.getFullYear()}`);
console.log(`Mês: ${data3.getMonth() + 1}`);
console.log(`Dia: ${data3.getDate()}`);

const mes = [
  "Janeiro",
  " Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

console.log(`Retomando o mês por escrito!`);
console.log(`Mês: ${mes[data3.getMonth()]}`);

const diaDaSemana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

console.log(`Dia da semana: ${diaDaSemana[data3.getDay()]}`);

var diferencaAnos = data3.getFullYear() - data2.getFullYear();

if (data3.getMonth() < data2.getMonth() || (data3.getMonth() === data2.getMonth() && data3.getDate() < data2.getDate())) {
    diferencaAnos--; 
}

console.log("A pessoa tem atualmente " + diferencaAnos + " anos");

console.log(`-------------------------Correção-------------------------------`);

const dataNasc = new Date("2008=03-28");
const dataAtual = new Date();

const diferença = dataAtual.getTime() - dataNasc.getTime();
const idade = Math.floor(diferença / (1000 * 60 * 60 * 24 * 365.25));

console.log(`Idade: ${idade}`);

console.log(`------------------------Segunda maneira--------------------------`);

const diferencaAnos = dataAtual.getFullYear() - dataNasc.getFullYear();
console.log(`Diferença em anos: ${diferencaAnos}`);


if(dataAtual.getMonth() < dataNasc.getMonth() || 
  (dataAtual.getMonth() === dataNasc.getMonth() && 
  dataAtual.getDate() < dataNasc.getDate())){
    console.log(`Ainda não fez aniversário!`);
    console.log(`Idade: ${diferencaAnos - 1}`);
  };