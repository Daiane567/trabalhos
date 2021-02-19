//Supondo que a população de um país A seja da ordem de 80000 habitantes
 //com uma taxa anual de crescimento de 3% e que a população de B seja 200000 
// habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule
//  e escreva o número de anos necessários para que a população do país A
// ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento. 
var A = 80000;
var B = 200000;
var anos = 0;
console.log("Valor de A no inicio: "+A)
while (A < B) {
  console.log("VALORES DE anos e A ANTES DA CONTINHA!!!!!!")
  console.log("A: "+A+", anos:"+anos);
  console.log("\n\n\n")
  console.log("Continha: A += (A * 3/100) => A ("+A+") = A("+A+") * (A("+A+")*(3/100))");
  A += A * (3 / 100);
  B += B * (1.5 / 100);
  anos += 1;
  console.log("\n\n\n")
  console.log("DEPOIS")
  console.log("A: "+A+", anos:"+anos);

 
}
console.log(anos);
