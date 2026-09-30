/* Um hotel possui 24 quartos numerados. Os quartos cujo número for múltiplo de 6 deverão
ser identificados como "Verificar manutenção" e os demais como "Quarto disponível para
inspeção" */

for (let i = 1;i<=24 ; i++){
    if (i%6===0){
       console.log("Verificar manutenção") 
    }else {
        console.log("Quarto disponível para inspeção")
    }
} 