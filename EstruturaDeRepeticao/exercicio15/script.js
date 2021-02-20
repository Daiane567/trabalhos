//Faça um programa que calcule o mostre a média aritmética de N notas. 
var quantidade = parseFloat(prompt("Digite a quantidade de Notas"));
var soma = 0;
for(var i=0; i<quantidade; i++){
   var notas = parseFloat(prompt("Digite sua nota:"));
   soma += notas
}
console.log(soma/quantidade)