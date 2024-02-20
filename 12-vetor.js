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
