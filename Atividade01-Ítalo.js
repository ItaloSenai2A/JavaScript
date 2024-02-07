var nome = "Ítalo";
var banco = "Itaú";
var agencia = "0800 7400 4828";
var conta = 27389097;
var saldo = 5000;

console.log(
  "Olá",
  nome,
  ", bem vindo ao banco",
  banco,
  ", cujo o número é",
  agencia,
  ". O número da sua conta é",
  conta,
  "E o saldo disponível é",
  saldo);

  console.log("As transações encontradas na sua conta são:"); 
  console.log("------------------------");
  saldo = saldo - 500;
  console.log("Voce pagou um boleto de R$ 500,00, Seu saldo atual é:", saldo);
  console.log("------------------------");
  saldo = saldo + 1000
  console.log("Voce recebeu um pix  de R$ 1.000,00, Seu saldo atual é:", saldo);
  console.log("------------------------");
saldo = saldo - 200
  console.log("Voce pagou um boleto de R$ 200,00, Seu saldo atual é:", saldo);
  console.log("------------------------");
  saldo = saldo - 890
  console.log("Voce pagou uma parcela de R$890,00, Seu saldo atual é:", saldo);
  console.log("------------------------");
  saldo = saldo + 100
  console.log("Voce recebeu uma transferencia de R$100,00, Seu saldo atual é:");
  console.log("--------------------------");
   console.log("Até mais",
    nome,
    ", obrigado por usar o banco",
    banco,
    ", da sua agencia:",
    agencia,
    ". O número da sua conta é",
    conta,
    "E o saldo disponível é",
    saldo);
  