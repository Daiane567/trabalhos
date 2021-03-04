//Numa eleição existem três candidatos. Faça um 
//programa que peça o número total de eleitores. 
//Peça para cada eleitor votar e ao final
 //mostrar o número de votos de cada candidato. 
 var A = 0
 var B = 0
 var C = 0

var eleitores = parseInt(prompt("Quantos eleitores?"));

for(var i=0;i<eleitores;i++){
  var voto = prompt("Digite A ,B,C");
  if(voto=="A"){
    A++;
    // A = A + 1
    console.log("Voce votou no A");
  }else if(voto == "B"){
    B++;
    console.log("Voce votou no B");
  }else if(voto == "C"){
    C++;
    console.log("Voce votou no C");
  }
}
console.log("Candidato A: "+A+" Candidato B:"+B+" Candidato C:"+C);