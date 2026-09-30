/* ler um valor e informar se o valor é par ou impar */

let valor = Number(prompt("Digite um valor"));
let texto = (valor % 2) == 0 ? "valor par" : "valor impar";
document.write(texto);