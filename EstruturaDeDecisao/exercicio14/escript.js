function calcular() {

    const MEDIA = parseFloat(document.getElementById("numero").value);
    //const MEDIA1 = 9.0 && 10.0;
   // const MEDIA2 = 7.5 && 9.0; 
    //const MEDIA3 = 6.0 && 7.5; ERRADO
   // const MEDIA4 = 4.0 && 6.0; 
   // const MEDIA5 = 4.0 && 0;
    if(MEDIA>=9.0 && MEDIA<=10.0){
        document.getElementById("resultado").textContent=
         "Você tirou A APROVADO ";
            
    } else if(MEDIA>=7.5 && MEDIA<=9.0){
        document.getElementById("resultado").textContent=
        "Você tirou B APROVADO";
        

    }else if(MEDIA>=6.0 && MEDIA<=7.5){
        document.getElementById("resultado").textContent=
        "Você tirou C APROVADO";
    }else if(MEDIA>=4.0 && MEDIA<=6.0){
        document.getElementById("resultado").textContent=
        "Você tirou D REPROVADO";
    }else if(MEDIA<=4.0 && MEDIA>=0){
        document.getElementById("resultado").textContent=
        "Você tirou E REPROVADO";
    }
}