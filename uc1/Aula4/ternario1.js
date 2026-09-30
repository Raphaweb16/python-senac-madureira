/* Monte um programa para ler a idade e informa se a pessoa pode votar*/

let idade = Number(prompt('informe a idade'));
// com tenario
let msg = (idade<16) ? "não pode votar" : "pode votar";
document.write(msg);
// com o if
if  (idade<16) {
    document.write("não pode votar");
} else {
    document.write("pode votar");
}