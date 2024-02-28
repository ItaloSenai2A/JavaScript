///Condição simples única

var anoNascimento = 2007;

if (anoNascimento > 2003) console.log(`A pessoa nasceu depois de 2003!`);

if (anoNascimento < 2003) console.log(`A pessoa nasceu antes de 2003!`);

if (anoNascimento == 2003) console.log(`A pessoa nasceu em 2003!`);

//Condicional simples if-else
var anoNascimento = 2002;
if (anoNascimento > 2000) console.log(`A pessoa nasceu depois de 2000!`);
else console.log(`A pessoa nasceu depois de 2000!`);

//Condicional composto com if
const login = "admin"; //digitado pelo usuário
var senha = "123456"; //digitado pelo usuário

//--------------------------------------------------------//
const loginUser = "admin"; //banco de dados
const senhaUser = "admin"; //banco de dados
//--------------------------------------------------------//
if (login == loginUser || senha == senhaUser) console.log(`Acesso permitido!`);
else console.log(`Acesso negado!`);

//Função sinaleiro
function sinaleiro(cor) {
  if (cor == "vermelho") console.log(`Pare`);
  else if (cor == "amarelo") console.log(`Preste atenção`);
  else if (cor == "verde") console.log(`Siga`);
  console.log(`Voçê informou cores diferentes de verde, amarelo ou vermelho`);
}
sinaleiro("preto");

//desvio condicional if com bloco de comandos
console.log("------------------------------------------");
var idade = 18;

if (idade <= 18) {
  console.log("entrou no if...");
  idade++, console.log("Incrementei a idade...");
  console.log(`A nova idade é ${idade}`);
  console.log(`Agora estou saindo do bloco de códigos if`);
}
console.log(`Terminei!`);

//desvio condicional if inline (ternário)
//validação (algo == algo) ou (algo > algumacoisa)
//? (IF)
//Se for verdadeiro
// : (ELSE)
//Se for falso
//teste de validação == teste ? "bla bla" : ("Ble Ble")

var preco = 500;

var resultado = preco <= 100 ? "Tá barato" : "Vish ta caro";

if (preco <= 100) console.log(`Ta barato!`);
else console.log(`Vish ta caro!!!`);

console.log(resultado);