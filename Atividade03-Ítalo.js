// Exercício sobre vetores

var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.log(frutas);
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];

console.table(frutas);
frutas.push("Tangerina");
frutas.unshift("Goiaba");
console.table(frutas);
//frutas.splice(4, 1);

var position = frutas.indexOf("Uva");
console.log(position);
frutas.splice(position, 1);
console.table(frutas);

var copia = frutas.slice(2, 5);
console.table(copia);

// Exercício sobre Matrizes

var numeros = [5, 4, 3, 2, 1];
console.table(numeros);

console.log("3º elemento:", numeros[2]);

var numerosCopia = numeros.slice();
console.table(numerosCopia);

numerosCopia[0] = numeros[0] * 2;
numerosCopia[1] = numeros[1] * 2;
numerosCopia[2] = numeros[2] * 2;
numerosCopia[3] = numeros[3] * 2;
numerosCopia[4] = numeros[4] * 2;
console.table(numerosCopia);
