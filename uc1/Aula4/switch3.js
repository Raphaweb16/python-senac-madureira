/* Crie um programa que receba um número de 1 a 7 e retorne o dia correspondente da semana. Por exemplo, 1 para "Domingo", 2 para "Segunda-feira" e assim por diante. */
let semana = Number(prompt("Informe o número e o dia do semana"));
switch (semana) {
   case 1:
        document.write("Segunda-feira");
      break;
   case 2:
        document.write("Terça-feira");
   break;
   case 3:
        document.write("Quarta-feira");
   break;
   case 4:
        document.write("Quinta-feira");
   break;
   case 5:
        document.write("Sexta-feira");
   break;
   case 6:
        document.write("Sábado");
   break;
   case 7:
        document.write("Domingo");
   break;
default:
    document.write("Você digitou um número fora do intervalo");
}