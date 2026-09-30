/* Um terminal deverá apresentar suas opções de atendimento pelo menos uma vez. Depois
de cada operação, deverá verificar se o usuário escolheu encerrar. Enquanto ele não
escolher sair, as opções deverão ser apresentadas novamente. Ao encerrar, deverá
informar "Atendimento finalizado".*/

//opções 
//1-  somar
//2 - dividir
//3 - multiplicar
//4- encerrar 
let opcao = 0
do {
    
    opcao = Number(prompt('Digite um valor: 1 - somar / 2 - dividir / 3 - multiplicar / 4 - encerrar'));

} while (opcao<4);
alert("Atendimento finalizado")
console.log()
