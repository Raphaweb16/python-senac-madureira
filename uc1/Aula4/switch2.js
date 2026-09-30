/* ler o código do produto (de 1 até 4) e informar o preço do produto */
let codigo = Number(prompt("informar o código do produto"));
switch (codigo) {
    case 1:
        document.write("Café - R$ 5,00");
        break;
    case 2:
            document.write("Leite - R$ 8,00");
            break;    
    case 3:
            document.write("Pão na Chapa- R$ 6,00");
            break;
    case 4:
            document.write("Bolo Formigueiro - R$ 10,00");
            break;
    default: 
        document.write("Código inválido");
}