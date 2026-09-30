/* Calculadora Simples 
Crie um programa que recebe dois números e uma operação (+, -, *, /) e retorna o resultado correspondente. */

let valor1 = Number(prompt("Digite um valor"));
let valor2= Number(prompt("Digite um valor"));
let resultado = prompt("Digite a operação: 1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão") ;
switch (resultado) {
    case 1:
        document.write("valor1+valor2");
    break;
    case 2:
            document.write("valor1-valor2");
    break;
    case 3:
            document.write("valor1*valor2");
    break;        
    case 4:
            document.write("valor1/valor2");
    break;

}   
