//Faça um programa que, dado um conjunto de N números,
 //determine o menor valor, o maior valor e a soma dos valores. 
 
 var menor = Number.MAX_VALUE;
 var maior = Number.MIN_VALUE;
 var valor = 0;
var resultado = 0;

var n =parseInt(prompt("Digite a quantidade de numeros que vc deseja:"));

// for()
for(var i =0;  i<n ; i++ ){
    valor =parseInt(prompt("Digite o numero "+i+":"));
    if(valor>maior){
        maior = valor       
    }
    if(valor<menor){
        menor = valor
    }
    resultado += valor
}
console.log("O menor numero é "+menor);
console.log("O maior numero é "+maior);
console.log("Soma: "+resultado)