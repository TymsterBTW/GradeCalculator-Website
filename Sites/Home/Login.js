//sign up
const sign_up_mail = document.getElementById('sign-up-mail')
const sign_up_password = document.getElementById('sign-up-password')
const sign_up_password_repeat = document.getElementById('sign-up-password-repeat')
const password_match_error = document.getElementById('password-match-error')
const submit = document.getElementById('sign-up-submit')
const sign_up_content = document.getElementById('sign-up-content')
const sign_up_mail_error = document.getElementById('mail-invalid-sign-up')
const sign_up_success = document.getElementById('sign-up-success')
//sign in 
const sign_in_mail = document.getElementById('sign-in-mail')
const sign_in_password = document.getElementById('sign-in-password')
const sign_in_submit_button = document.getElementById('sign-in-submit')
const sign_in_inputs = document.getElementById('sign-in-inputs')
const sign_in_mail_error = document.getElementById('sign-in-mail-error')
const sign_in_success = document.getElementById('succesful-login')
sign_up_password.oninput =  () => {
    sign_up_password_check()
}
sign_up_password_repeat.oninput = () =>{
    sign_up_password_check()
}
sign_up_mail.oninput = () =>{
    if (sign_up_mail.value.includes("@")){
        sign_up_mail_error.style.display = "none"
    }
    else {
        sign_up_mail_error.style.display = "block"
    }
}
var password_match = false
function sign_up_password_check(){
    if (sign_up_password.value == sign_up_password_repeat.value){
        password_match_error.style.display = "none"
        password_match = true
    }
    else {
        password_match = false
        password_match_error.style.display = "block"
    }
}
function sign_in_submit(){
    if (sign_in_password.value == "something"){
        sign_in_inputs.classList.add("hidden")
        sign_in_mail_error.style.display = "none"
        sign_in_success.style.display = "block"
    }
    else {
        sign_in_mail_error.style.display = "block"
        sign_in_success.style.display = "none"
    }
}
function sign_up_submit(){
    if (password_match ==true){
        var mail = sign_up_mail.value
        var password = sign_up_password.value
        password_match_error.style.display = "none"
        console.log(mail)
        console.log(password)
        sign_up_content.classList.add("hidden")
        sign_up_success.style.display = "block"
    }
    else{
        password_match_error.style.display = "block"
    }
}
function return_hide_sign_in_up(){
    sign_up_content.classList.remove("hidden")
    sign_up_success.style.display = "none"
    sign_in_inputs.classList.remove("hidden")
    sign_in_success.style.display = "none"
}
