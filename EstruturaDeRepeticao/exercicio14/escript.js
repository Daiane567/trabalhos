//Faça um programa que 
//calcule o mostre a média aritmética de N notas. 
var n = parseFloat(prompt("Digite a quantidade de notas"));
var soma = 0;
for(var i=0; i<n ; i++){
  var notas = parseFloat(prompt("Digite a nota"));
  soma += notas;
}
console.log(soma/n)