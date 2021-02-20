// 1. Leia uma matriz 4 x 4, conte e escreva quantos valores maiores que 10 ela possui.

var matriz = [ 
                [],
                [],
                [],
                []
            ]

var numerosMaioresQueDez = 0;

for(var linha=0; linha<4; linha++ ){
    for(var coluna=0; coluna<4;coluna++){
        matriz[linha][coluna] = Math.floor(Math.random()*20)+1 // Numeros aleatorios de 1 ate 20
    }
}

//// 1. Leia uma matriz 4 x 4, conte e escreva quantos valores maiores que 10 ela possui.
for(var linha=0; linha <4; linha++){
    for(var coluna=0; coluna<4; coluna++){
        if(matriz[linha][coluna]>10){
            console.log(matriz[linha][coluna]);
            numerosMaioresQueDez++;
        }
    }
}
console.log("Existem: "+numerosMaioresQueDez+" numeros maiores que 10");