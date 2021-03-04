//Faça um programa que leia 5 números e informe a soma e a média dos números.
var soma = 0;
for(var i=0 ; i<5;i++){
    var numeros = parseFloat(prompt("Entre com o valor desejado"));
    soma += numeros
}
console.log(soma)
console.log(soma/5)