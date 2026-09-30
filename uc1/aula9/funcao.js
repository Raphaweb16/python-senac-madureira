

function dizerOla() {
    console.log("OLÁ")
}

//dizerOla()

function imprimeValor(texto) {
    console.log(texto)
}

//imprimeValor("JONATHAN")

//imprimeValor("ANA")

//imprimeValor("RAPHAEL")

//imprimeValor("CARLOS")
function calcularMedia(nota1, nota2, nota3) {

    return (nota1 + nota2 + nota3) /3

}

media1 = calcularMedia(5, 5, 5)
media3 = calcularMedia(5, 4, 9)
media4 = calcularMedia(2, 8, 7)
media5 = calcularMedia(6, 2, 5)
media6 = calcularMedia(7, 5, 7)



function analisarMedia(valorMedia) {
    if (valorMedia>7) {
        console.log("Aprovado")
    } else{
        console.log("Reprovado")
    }
    
}

analisarMedia(media1)


