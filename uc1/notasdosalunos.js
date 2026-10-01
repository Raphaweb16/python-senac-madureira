/* Uma escola armazena as notas de 4 alunos em uma matriz. Cada aluno possui 3 notas. Crie a matriz e
percorra todos os valores. Para cada nota, informe se ela é aprovada quando for maior ou igual a 7 ou
abaixo da média quando for menor que 7. Ao final, informe quantas notas ficaram acima ou iguais a 7.
*/
let  resultados = [
    [6, 7, 8,],
    [8, 6, 9,],
    [7, 8, 5 ],
    [9, 6, 3 ],
];



for (let linhas = 0; linhas < resultados.length; linhas++) {
    const lista = resultados[linhas];
    
    for (let colunas = 0; colunas < lista.length; colunas++) {
        const nota = lista[colunas];
        
        console.log(nota);
    }
}