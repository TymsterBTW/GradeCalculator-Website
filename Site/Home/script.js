const home = document.getElementById('home')
const percentage = document.getElementById('percentages')
const selections = document.getElementById('selection')
const results = document.getElementById('results')
const pages = document.getElementsByClassName('page')
const sidebar_buttons = document.getElementsByClassName('sidebar-buttons')
const percentage_score = document.getElementById('percentage-score')
const percentage_total = document.getElementById('percentage-total')
const percentage_output = document.getElementById('percentage-output')
const percentage_error = document.getElementById('percentage-error')
const sidebar_percentage = document.getElementById('sidebar-percentage')
const percentage_enter = document.getElementById('Percentage-enter')
const percentage_pure = document.getElementById('percentage-pures')
const total_score = document.getElementById('enter-score-total')
const pure_input = document.getElementById("percentage-pure-input")
const button_show_pure_percentage = document.getElementById('button-show-per-pure')
for (var i = 0; i < 4; i++) {
    sidebar_buttons[i].addEventListener('click', myFunction, false);
}
function myFunction(){
    hide_all_pages()
    for (var i = 0; i < 4; i++){
        pages[i].classList.add('page-hidden')
    }
    var this_id = this.id
    if (this_id == "home-button"){
        home.classList.remove("page-hidden")
    }
    else if (this_id == "percentage-button"){
        percentage.classList.remove("page-hidden")
    }
    else if(this_id == "selection-button"){
        selections.classList.remove("page-hidden")
    }
    else if(this_id == "result-button"){
        results.classList.remove("page-hidden")

    }
    this.classList.remove("sidebar-buttons-disabled")
    this.classList.add("sidebar-buttons-enabled")

}
function hide_all_pages(){
    for (var i = 0; i < 4; i++) {
        sidebar_buttons[i].classList.remove("sidebar-buttons-enabled")
        sidebar_buttons[i].classList.add("sidebar-buttons-disabled")
    }
}
percentage_score.oninput = () =>{
    percentage_display()
}
percentage_total.oninput = () => {
    percentage_display()
}
function percentage_display(){
    var percentage_after = Math.round( percentage_score.value / percentage_total.value * 100)
    percentage_output.innerHTML =  percentage_after
    sidebar_percentage.innerHTML = percentage_after
    percentage_checks()
}
function percentage_checks(){
    if(percentage_output.innerHTML > 100){
        percentage_error.innerHTML = "Your score needs to be less than the total"
    }
    else{
        percentage_error.innerHTML = ""
    }

}
percentage_enter.addEventListener('click', () => {
    total_score.style.display = "none"
    percentage_pure.style.display = "block"
    percentage_score.value = null
    percentage_total.value = null
    sidebar_percentage.innerHTML = "0"
})
button_show_pure_percentage.addEventListener("click", () =>{
    total_score.style.display = "block"
    percentage_pure.style.display = "none"
    pure_input.value = null
    sidebar_percentage.innerHTML = "0"
}
)
pure_input.oninput = () => {
    sidebar_percentage.innerHTML = pure_input.value
    if(pure_input.value > 100) {
        document.getElementById('perc-error').innerHTML = "Percentage must be below 100"
    }
    else{
        document.getElementById('perc-error').innerHTML = ""
    }
}