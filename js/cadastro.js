
// const form = document.getElementById('form')
// const username = document.getElementById('username')
// const email = document.getElementById('email')
// const password = document.getElementById('password')
// const passwordConfirm = document.getElementById('passwordConfirm')

// form.addEventListener('submit', (e) =>{
//    e.preventDefault()

//    checkInputs()

// })

// function checkInputs(){
//    const usernameValue = username.value.trim()
//    const emailValue = email.value.trim()
//    const passwordValue = password.value.trim()
//    const passwordConfirmValue = passwordConfirm.value.trim()

//    if(usernameValue === ''){

//       errorValidation(username, "Preencha esse campo")
//    }else{
//       successValidation(username)
//    }

//    if(emailValue === ''){
//       errorValidation(email, "Preencha esse campo")
//    }else if (validateEmail(emailValue) == false){
//       errorValidation(email, "Email digitado errado.")
//    }else{
//       successValidation(email)
//    }

//    if(passwordValue === ''){
//       errorValidation(password, "Preencha esse campo")
//    }else if (passwordValue.length < 8){
//       errorValidation(password, "A senha dever ter mais de 8 caracteres")
//    }else{
//       successValidation(password)
//    }

//    if(passwordConfirmValue === ''){
//       errorValidation(passwordConfirm, "Preencha esse campo")
//    }else if (passwordConfirmValue !== passwordValue){
//       errorValidation(passwordConfirm, "Senha diferente. Por favor, digitar novamente.")
//    }else{
//       successValidation(passwordConfirm)
//    }

// }

// function errorValidation(input, message){
//    const formControl = input.parentElement
//    const small = formControl.querySelector('small')
   
//    small.innerText = message
//    formControl.className = 'form-control error'
// }

// function successValidation(input){
//    const formControl = input.parentElement

//    formControl.className = 'form-control success'
// }

// function validateEmail(input) {
//    return /\S+@\S+\.\S+/.test(input);
// }


// function redirectHome() {
//    window.open('../index.html', '_blank'); 
// }


//função que redireciona pra home
function redirectHome(){
   window.open('../index.html', '_blank'); 
}

var options = {
   onKeyPress: function (cpf, ev, el, op) {
       var masks = ['000.000.000-000', '00.000.000/0000-00'];
       $('.cpfOuCnpj').mask((cpf.length > 14) ? masks[1] : masks[0], op);
   }
}

$('.cpfOuCnpj').length > 11 ? $('.cpfOuCnpj').mask('00.000.000/0000-00', options) : $('.cpfOuCnpj').mask('000.000.000-00#', options);


//máscara
$(document).ready(function () {
   $('#data').mask('99/99/9999');
   return false;
});