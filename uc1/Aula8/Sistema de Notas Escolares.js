/* Uma escola deseja criar um sistema para organizar as notas de uma turma. O programa deverá
armazenar as notas dos alunos, apresentar todos os valores cadastrados e permitir a análise
das informações armazenadas.
Desenvolva a solução utilizando JavaScript.
Antes de programar, analise quais informações precisam ser armazenadas, como os dados
serão organizados e quais ações o sistema deverá realizar*/

let notas =  [0, 5, 10]

for (let index = 0; index < notas.length; index++) {
    const element = notas[index];
 console.log("Notas de alunos" +element)   
}
