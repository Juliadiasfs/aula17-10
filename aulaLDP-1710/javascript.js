function validarFormulario()
let nome = document.getElementById('tnome').value
let email = document.getElementById('temail').value
let senha1 = document.getElementById('tsenha1').value
let senha2 = document.getElementById('tsenha2').value
let sexo = document.getElementById('input[name= "rdsexo] :checked')

//validação do nome
if(nome === ""){
    alert("Por favor, preencha o campo'nome' ")
    returnfalse;
}

//validação do email
let emailPadrao = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;