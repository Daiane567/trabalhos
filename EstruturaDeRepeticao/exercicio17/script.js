//A série de Fibonacci é formada pela 
//seqüência 1,1,2,3,5,8,13,21,34,55,... 
//Faça um programa
// capaz de gerar a série até o n−ésimo termo. 
var a = 0
var b = 1
var resultado=b
for(i=1;i<10;i++) {
    resultado=a+b;
    console.log(resultado);
    a=b;
    b=resultado;
}