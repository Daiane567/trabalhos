//Crie um programa que dado o array:
//[28, 58, 39, 24, 57, 50, 37, 42, 82, 7, 10, 51, 52, 28, 56, 28, 7, 0, 4, 0, 66, 14, 13, 62, 70, 45, 92, 62, 3 ]
//Substitui os elementos de valor ímpar por -1 e os pares por +1
var numeros = [28, 58, 39, 24, 57, 50, 37, 42, 82, 7, 10, 51, 52, 28, 56, 28, 7, 0, 4, 0, 66, 14, 13, 62, 70, 45, 92, 62, 3 ]
//v//ar impar = numeros;
//var par = numeros;
//console.log(numeros);
//for( var i=0; i<numeros.length; i++){
    
   // }
    for ( var i=0; i<numeros.length; i++){
        if(numeros[i]%2==1){
            numeros[i]=-1
            //numeros[i]='-'
            //console.log(numeros)
            console.log(+numeros[i]+"impar");
            
        }else {
            numeros[i]=1
           console.log(numeros[i]+"par");
    
        }
       
    }
    
  
    
   // for( var i=0; i<numeros.length; i++){

    //}
      // for( var i=1; i<numeros.length; i+=2){
      // console.log(numeros[i]+"impar");
      // }
   