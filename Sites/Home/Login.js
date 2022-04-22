import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
import { getDatabase  } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js"
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
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
//const auth = getAuth()
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
var user_current
LoginButton.addEventListener("click" , (e) =>{
    e.preventDefault()
    hide_all()
    login_page.classList.remove("hidden")
})
SignUpButton.addEventListener("click" , (e) =>{
    e.preventDefault
    hide_all()
    Signup_page.classList.remove("hidden")
})
function hide_all(){
    document.getElementById('main1').classList.add("hidden")
    document.getElementById('main2').classList.add("hidden")
    login_page.classList.add("hidden")
    Signup_page.classList.add("hidden")
}
LoginForm.addEventListener('submit' , (e) =>{
    const auth = getAuth()
    e.preventDefault()

    const email = LoginForm['Login-Mail'].value
    const password = LoginForm['Login-Password'].value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            LoginForm.classList.add("hidden")
            Login_Success.style.display = "block"
            user_current =  userCredential.user
            // ...
        })
        .catch((error) => {
            console.log("else")
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
    const auth = getAuth()
    e.preventDefault()
    if (password.value == password_repeat.value){
        SignUp_password_check.style.display = "none"
    }else{
        SignUp_password_check.style.display = "block"
    }
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            Signup_error.style.display = "none"
            
            SignUpForm.classList.add("hidden")
            SignUp_Sucess.style.display = "block"
            email.value = ""
            password.value = ""
            password_repeat.value = ""
            user_current =  userCredential.user
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            Signup_error.style.display = "block"
            Signup_error.innerHTML = errorMessage
            SignUp_Sucess.style.display = "none"
    })
})