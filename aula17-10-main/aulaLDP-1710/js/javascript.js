function validarFormulario(){
let nome = document.getElementById('tnome').value
let email = document.getElementById('temail').value
let senha1 = document.getElementById('tsenha1').value
let senha2 = document.getElementById('tsenha2').value
let sexo = document.getElementById('input[name= "rdsexo] :checked')

//validação do nome
if(nome === ""){
    alert("Por favor, preencha o campo 'nome' ")
    returnfalse;
}

//validação do email
    let emailPadrao = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!email.match(emailPadrao)){
    alert("Por favor digite um e-mail válido");
    return false;
}
    //validação da senha (mínimo 8 caracteres)
    if(senha1.length < 8 ){
    alert("A senha deve ter no minimo 8 caracteres");
    return false;
}
    //verificando se as duas senhas são iguais
    if(senha1 !== senha2){
    alert("As senhas não coincidem. Por favor, tente novamente");
    return false;
}
}