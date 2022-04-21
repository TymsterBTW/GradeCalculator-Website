//percentage variables
const percentage_score = document.getElementById('percentage-score')
const percentage_total = document.getElementById('percentage-total')
const percentage_output = document.getElementById('percentage-output')
const percentage_change = document.getElementById('percentage-change')
const percentage_pure = document.getElementById('percentage-pure')
const Percentage_score_total = document.getElementById('percentage-score-total')
const percentage_input = document.getElementById('percentage-input')
const percentage_error = document.getElementById('percentage-error')
//percenage formulas
var button_change = 1
percentage_total.oninput = () =>{
    percentage()
}
percentage_score.oninput = () =>{
    percentage()
}
percentage_pure.oninput =() =>{
    percentage()
}
percentage_change.addEventListener("click", () =>{
    percentage_output.innerHTML = ""
    if (button_change == 1){
        button_change = 2
        percentage_change.innerHTML = "Press to enter score and total"
        Percentage_score_total.classList.add("hidden")
        percentage_input.classList.remove("hidden")
    }
    else{
        button_change = 1
        Percentage_score_total.classList.remove("hidden")
        percentage_input.classList.add("hidden")
    }
})

function percentage(){
    if (button_change == 1){
        percentage_output.innerHTML = (percentage_score.value / percentage_total.value * 100).toFixed(2)
        console.log(percentage_score)
        console.log(percentage_total)
        if (percentage_score.value < percentage_total.value){
            console.log("higher")
        }
        else {
            console.log("else")
        }
    }
    else {
        percentage_output.innerHTML = percentage_pure.value
    }
}
