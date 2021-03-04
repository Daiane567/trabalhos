//Faça um programa que peça dois números, base e expoente,
// calcule e mostre o primeiro número elevado ao segundo número. 
//Não utilize a função de potência da linguagem. 
/*var base = parseFloat(prompt("Digite a base:"));
var expoente = parseFloat(prompt("Digite o expoente:"));
*/

var base = 2;
var expoente = 4;
/*
2^2 = 2 * 2
2^3 = 2 * 2 * 2
 2^4 = 2 * 2 * 2 * 2
*/
var resultado = 1;

for(var i=0; i<expoente; i++){
    resultado *= base;
    console.log(resultado)
}

for(var i=1; i<4; i++){
    resultado *= 3*i;
    console.log(resultado)
}