/* 3. Identificar o Mês pelo Número 

Crie um programa que recebe um número de 1 a 12 e imprime o nome do mês correspondente. */

let valor = Number(prompt("Informe o número"));
switch (valor) {
    case 1:
        document.write("Janeiro");
    break;
    case 2:
        document.write("Fevereiro");
    break;
    case 3:
        document.write("Março");
    break;        
    case 4:
        document.write("Abril");
    break;
    case 5:
        document.write("Maio");
        break;
    case 6:
        document.write("Junho");
        break;
    case 7:
        document.write("Julho");
        break;        
    case 8:
        document.write("Agoste");
        break;
    case 9:
        document.write("Setembro");
        break;
    case 10:
        document.write("Outubro");
        break;
    case 11:
            document.write("Novembro");
        break;        
    case 12:
            document.write("Dezembro");
        break;
    default: 
       document.write("Código inválido");
    }