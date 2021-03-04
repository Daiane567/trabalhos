//Faça um programa que calcule a multiplicação
//de dois números através de somas
//consecutivas

var numero1 = parseFloat(prompt("Digite o número:"));
var numero2 = parseFloat(prompt("Digite o número:"));

var resultado = 0;
// for( valor inicial; condicao de parada; passo de incremento)
for (var i = 0; i<numero2; i++) {
    resultado += numero1;
}

console.log(resultado);    