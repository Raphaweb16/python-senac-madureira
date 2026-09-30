/* Desafio 2 - Temperatura do servidor
Crie um programa que analise a temperatura de um servidor. Se for maior que 80, exiba "Temperatura
crítica"; se estiver entre 60 e 80, exiba "Atenção"; caso contrário, exiba "Temperatura normal".
Regras: use JavaScript; escolha entre if, else if, else ou switch conforme o problema; teste o código com pelo menos
3 valores diferentes; antes de executar, anote qual saída você espera.
Teste Valor(es) usado(s) Saída esperada Saída obtida
1
2
3
Ao terminar: explique ao professor qual condição você utilizou e por que ela resolve o problema */

let temperatura = Number(prompt("Temperatura crítica"));
let msg;

if (temperatura > 80){
  msg =  "temperatura crítica"

} 
else if (temperatura < 60){  
    msg = "temperatura normal"
}
else
{
    msg = "atenção" 
  
} 

document.write(msg);