const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[2]);

numeros[2]=6;
console.log(numeros);
console.log(numeros[2]);

//Crando variáveis do tipo array (vetores)

var dinos = ["Tiranossauro Rex", "Estegossauro", "Anquilossauro"];
console.log(dinos);//retorna todos os itens do array
console.log(dinos[0]);//retorna o primeiro item do array
console.log("");//pular uma linha
console.table(dinos);//cria tabela com os itens do array
console.log("O vetor tem", dinos.length, "elementos!")//quantidade de itens 
//adicionando elementos ao vetor existente 
dinos.push("Brontossauro","Velociraptor")//array.push adiciona um item no final do vetor
console.table(dinos)

dinos.unshift("Tricerátopis") //adiciona itens no início do array
console.table(dinos);

//Alterando elementos com base no indíce (posição)
dinos[3] = "Titanossauro"
console.table(dinos);

//Obtendo um elemento com base em seu índice 
console.log("Primeira posição", dinos[0]);//retorna um elemento específico
console.log("Segunda posição", dinos[1]);
console.log("Item de posição 20", dinos[20]);//retorna indefinido

//Removendo elementos do vetor
dinos.pop();//Remove o último elemento 
console.table(dinos);

dinos.shift();//remove o primeiro elemento do vetor
console.table(dinos);

dinos.splice(1, 1); //remove o elemento a partir do índice 1, contando 1
console.table(dinos);

console.log("")
console.log("--------Continuação da Aula--------")
var dinos = [
    "Tricerátopis",
    "Tiranossauro Rex",
    "Estegossauro",
    "Anquilossauro",
    "Brontossauro",
    "Ictossauro",
    "Pterodáctilo",
    "Espinossauro",
];

console.table(dinos)

var elemetoProcurado = "Brontossauro";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + "está no índice " + posicao)

var elemetoProcurado = "Pterodáctilo";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + "está no índice " + posicao)

var elemetoProcurado = "Tricerátopis";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + "está no índice " + posicao)

//Criando cópia de array (vetor)
var copia1 = dinos.slice();//.slice() faz uma cópia real do item de vetor
console.log("vetor cópia 1");
console.log(copia1);

var copia2 = dinos.slice(1,3);//.slice(1,3) determino onde começa e onde termina a cópia
console.log("Vetor copia 2");
console.table(copia2);







