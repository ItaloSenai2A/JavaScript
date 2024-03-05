let contador = 0;

while (contador < 5) {
  contador++;
  console.log(contador);
}

var x = 20;

while (x > 10) {
  console.log("Entrei no laço While...");
  x--;
}
console.log("Terminei!");

//Contagem regressiva

let countdown = 5;

while (countdown > 0) {
    console.log(countdown);
    countdown--;
}

console.log("Lançamento!")

//Estourando o limite do cartão - versão while

var limite = 500;
var fatura = 0;

while (fatura <= limite) {
    let gasto = Math.random() * 100 
    fatura += gasto
    console.log(`Gastei R$ ${gasto.toFixed(2)} ------
    Fatura: R$ ${fatura.toFixed(2)}`);

    //toFixed(2) alterar o valor mostrado para o usuário em duas casas depois da vírgula.
    
    fatura > limite && console.log(`Estourou o limite do cartão`);

    //&& faz somente um IF, sem else.

}   

//Estourando o limite do cartão - versão do while 

var limite = 500;
var fatura = 0;

do {let gasto = Math.random() * 100 
        fatura += gasto
        console.log(`Gastei R$ ${gasto.toFixed(2)} ------
        Fatura: R$ ${fatura.toFixed(2)}`);

    fatura > limite && console.log(`Estourou o limite do cartão em R$`);
}  
    while (fatura <= limite);



