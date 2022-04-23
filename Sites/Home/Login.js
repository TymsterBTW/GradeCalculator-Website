import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
import { getDatabase  } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js"
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut , onAuthStateChanged, updateProfile, updatePassword , sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyB17PdDictcl5aU08zjoNDPEqmg208lSrg",
  authDomain: "gradecalculator-web.firebaseapp.com",
  databaseURL: "https://gradecalculator-web-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gradecalculator-web",
  storageBucket: "gradecalculator-web.appspot.com",
  messagingSenderId: "135974587400",
  appId: "1:135974587400:web:12bde144694c06b3b855bd",
  measurementId: "G-H0PCGS4LQB"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const LoginButton = document.getElementById('Login')
const SignUpButton = document.getElementById('sign-up')
const LoginForm = document.getElementById('LoginForm')
const SignUpForm = document.getElementById('SignUpForm')
const login_page = document.getElementById('Login-Page')
const Signup_page = document.getElementById('SignUp-Page')
const Signup_error = document.getElementById('SignUpError')
const Login_error = document.getElementById('LoginError')
const Login_Success = document.getElementById('Login-Sucess')
const SignUp_Sucess = document.getElementById('SignUp-Sucess')
const SignUp_password_check = document.getElementById('sign-up-password-check')
const Sign_in_up = document.getElementById('Sign-in-up')
const profile_button = document.getElementById('profile-button')
const logout_button = document.getElementById('Log-Out')
const header_message = document.getElementById('Header-Message')
const profile_page = document.getElementById('profile-page')
const username_change_button = document.getElementById('username-change')
const password_reset = document.getElementById('password-reset')
const password_reset_page = document.getElementById('Password-reset-page')
const auth = getAuth()
var profile
LoginButton.addEventListener("click" , (e) =>{
    e.preventDefault()
    hide_all()
    login_page.classList.remove("hidden")
    LoginForm.classList.remove("hidden")
    Login_Success.style.display = "none"

})
SignUpButton.addEventListener("click" , (e) =>{
    e.preventDefault
    hide_all()
    Signup_page.classList.remove("hidden")
    SignUpForm.classList.remove("hidden")
    SignUp_Sucess.style.display = "none"
})
function hide_all(){
    document.getElementById('main1').classList.add("hidden")
    document.getElementById('main2').classList.add("hidden")
    login_page.classList.add("hidden")
    Signup_page.classList.add("hidden")
    profile_page.classList.add("hidden")
}
LoginForm.addEventListener('submit' , (e) =>{
    e.preventDefault()

    const email = LoginForm['Login-Mail'].value
    const password = LoginForm['Login-Password'].value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            LoginForm.classList.add("hidden")
            Login_Success.style.display = "block"
            profile = getAuth().currentUser
            logged_in()
            password_reset.style.display = "none"
            Login_error.style.display = "none"
            // ...
        })
        .catch((error) => {
            password_reset.style.display = "block"
            const errorCode = error.code;
            const errorMessage = error.message;
            Login_error.innerHTML = errorMessage
            Login_error.style.display = "block"
        });
})
SignUpForm.addEventListener('submit' , (e) =>{
    const email = SignUpForm['SignUp-Mail'].value
    const password = SignUpForm['SignUp-Password'].value
    const password_repeat = SignUpForm['SignUp-Password-Repeat'].value
    e.preventDefault()
    if (password == password_repeat){
        SignUp_password_check.style.display = "none"
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            Signup_error.style.display = "none"
            logged_in()
            SignUpForm.classList.add("hidden")
            SignUp_Sucess.style.display = "block"
            profile =  userCredential.user
            // ...
        })
        .catch((error) => {
            console.log("failed")
            const errorCode = error.code;
            const errorMessage = error.message
            Signup_error.style.display = "block"
            Signup_error.innerHTML = errorMessage
    })
    }else{
        SignUp_password_check.style.display = "block"
    }
    email.value = ""
    password.value = ""
    password_repeat.value = ""
})
username_change_button.addEventListener("click" , (e) =>{
    e.preventDefault()

    const username_input_display = document.getElementById('new-username')
    const newuser_input = document.getElementById('New-username-input')
    const newusername_error = document.getElementById('new-username-error')
    const usernamesubmit = document.getElementById('username-change-submit')
    const username_error = document.getElementById('new-username-error')
    username_input_display.classList.remove("hidden")
    usernamesubmit.addEventListener("click" , (e) =>{
        updateProfile(auth.currentUser, {
            displayName: newuser_input.value
          }).then(() => {
            header_message.style.display = "block"
              header_message.innerHTML = "Username Succesfully Changed"
              setTimeout(()=>{
                header_message.style.display = "none"
            } , 2000)
            document.getElementById('profile-page-username').innerHTML = auth.currentUser.displayName
            username_input_display.classList.add("hidden")
            username_error.style.display = "none"

          }).catch((error) => {
              username_error.innerHTML = error.message
              username_error.style.display = "block"
          });
    }
    )
})

password_reset.addEventListener("click" , (e) =>{
    const password_reset_confirm = document.getElementById('password-reset-confirm')
    const password_reset_error = document.getElementById('password-reset-error')
    e.preventDefault()
    console.log(LoginForm['Login-Mail'].value)
    const email = LoginForm['Login-Mail'].value
    sendPasswordResetEmail(auth, email)
        .then(() => {
            password_reset_confirm.style.display = "block"
            password_reset_error.display = "none"
            setTimeout(()=>{
                password_reset_confirm.style.display = "none"
            } , 2000)
        })
        .catch((error) => {
            password_reset_confirm.style.display = "none"
            const errorCode = error.code;
            const errorMessage = error.message;
            Login_error.innerHTML = errorMessage
            // ..
        });
})



logout_button.addEventListener("click" , (e) =>{
    const profile_page_email = document.getElementById('profile-page-email')
    const profile_page_creation = document.getElementById('profile-page-creation-date')
    const profile_page_username = document.getElementById('profile-page-username')
    e.preventDefault()
    try{
        logout()
        profile = "None"
        logged_out()
        profile_page_email.innerHTML = ""
        profile_page_creation.innerHTML = ""
        profile_page_username.innerHTML = ""
    } catch{
        console.log("error")
    }
})
function logout(){
    return auth.signOut()
}
profile_button.addEventListener("click" , (e) =>{
    const profile_page_email = document.getElementById('profile-page-email')
    const profile_page_creation = document.getElementById('profile-page-creation-date')
    const profile_page_username = document.getElementById('profile-page-username')
    e.preventDefault()
    hide_all()
    profile_page.classList.remove("hidden")
    profile_page_email.innerHTML = profile.email
    profile_page_creation.innerHTML = profile.metadata.creationTime
    profile_page_username.innerHTML = profile.displayName
    if (profile.displayName == undefined){
        profile_page_username.innerHTML = "None"
    }

})
function logged_in(){
    header_message.style.display = "block"
    header_message.innerHTML = "Succesfull Logged In!"
    setTimeout(()=>{
        header_message.style.display = "none"
    } , 2000)
    logout_button.classList.remove("hidden")
    profile_button.classList.remove("hidden")
    LoginButton.classList.add("hidden")
    SignUpButton.classList.add("hidden")
}
function logged_out(){
    header_message.style.display = "block"
    header_message.innerHTML = "Succesfull Logged Out!"
    setTimeout(()=>{
        header_message.style.display = "none"
    } , 2000)
    logout_button.classList.add("hidden")
    profile_button.classList.add("hidden")
    LoginButton.classList.remove("hidden")
    SignUpButton.classList.remove("hidden")
    hide_all()
    main1.classList.remove("hidden")
}