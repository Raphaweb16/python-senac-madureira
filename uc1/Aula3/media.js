/* Crie um programa para passar um valor de duas varáveis 
nota1 com valor 8
nota2 com o valor 3
calcule a media 
informe se esta aprovado ou reprovado, considerando que a 
media de aprovação é mairo ou igual 6
*/

  let nota1 = 8; // var está em descontinuidade
  let nota2 = 3; 
  let media = (nota1+nota2)/2;
  if (media>=6){
    console.log("media: "+media+" - aprovado");
  }  else {
    console.log("media: "+media+" - reprovado");    
    }
  