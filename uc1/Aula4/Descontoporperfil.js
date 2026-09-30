// Há desconto se o cliente for funcionário OU estudante OU tiver mais de 60 anos.//

const funcionario = false;
const estudante = true;
const idade = 24;
let msg;
if(funcionario || !estudante || 60<=idade) {
    
    console.log(msg="Desconto autorizado")
} else{
    console.log(msg="Não autorizado")
    
}
