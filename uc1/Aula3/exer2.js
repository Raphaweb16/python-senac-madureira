/* Monte um programa para receba duas notas de um aluno, calcular a média aritmética e informar se o aluno está aprovado ou não. Para ser aprovado a média do aluno precisa ser maior ou igual a 6 */
let nota1 = 35;
let nota2 = 7;
let media = (nota1+nota2)/2;
if (media>=6){
    console.log("media: "+media+" - aprovado");
  }  else {
    console.log("media: "+media+" - reprovado");    
    }
