//percentage variables
const percentage_score = document.getElementById('percentage-score')
const percentage_total = document.getElementById('percentage-total')
const percentage_output = document.getElementById('percentage-output')
const percentage_change = document.getElementById('percentage-change')
const percentage_pure = document.getElementById('percentage-pure')
//percenage formulas
var percentage_display = "score-total"
percentage_total.oninput = () =>{
    percentage()
    percentage_display = "score-total"
    percentage_score.setAttribute("max" , percentage_total.value)
}
percentage_score.oninput = () =>{
    percentage()
}
percentage_score.oninput =() =>{
    percentage()
    percentage_display = "pure"
}

function percentage(){
    if (percentage_display == "score-total"){
        percentage_output.innerHTML = percentage_score.value / percentage_total.value * 100
    }
    else {
        percentage_output.innerHTML = percentage_pure
    }
}