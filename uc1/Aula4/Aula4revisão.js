/* Uma empresa permite a entrada somente para pessoas com 18 anos ou mais. Crie um programa que
receba a idade em uma variável e exiba "Acesso permitido" ou "Acesso negado".
Regras: use JavaScript; escolha entre if, else if, else ou switch conforme o problema; teste o código com pelo menos
3 valores diferentes; antes de executar, anote qual saída você espera.*/

let idade = Number(prompt("Acesso permitido"));
let idade2 = Number(prompt("Acesso negado"));
let msg = (idade<18) ? "Acesso permitido" : "Acesso negado";

document.write(msg);
