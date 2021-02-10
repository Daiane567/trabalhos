
    function calcular() {
        //Faça um programa que pergunte o preço de três produtos e informe qual 
        //produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.

        const PRODUTO1 = parseFloat(document.getElementById("numero1").value);
        const PRODUTO2 = parseFloat(document.getElementById("numero2").value);
        const PRODUTO3 = parseFloat(document.getElementById("numero3").value);
        if(PRODUTO1<PRODUTO2 && PRODUTO1<PRODUTO3){
            document.getElementById("resultado").textContent=
             "o menor preço é o 1";
                
        } else if(PRODUTO2<PRODUTO1 && PRODUTO2<PRODUTO3){
            document.getElementById("resultado").textContent=
            "o menor preço é o 2";

        }else if(PRODUTO3<PRODUTO1 && PRODUTO3<PRODUTO2 ){
            document.getElementById("resultado").textContent=
            "o menor preço é o 3";
        }
    }
