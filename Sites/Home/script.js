//percentage variables
const percentage_score = document.getElementById('percentage-score')
const percentage_total = document.getElementById('percentage-total')
const percentage_output = document.getElementById('percentage-output')
const percentage_change = document.getElementById('percentage-change')
const percentage_pure = document.getElementById('percentage-pure')
const Percentage_score_total = document.getElementById('percentage-score-total')
const percentage_input = document.getElementById('percentage-input')
const percentage_error = document.getElementById('percentage-error')
//subject variables 
const subject_search = document.getElementById('subject-search')
const subject_output = document.getElementById('subject-output')
const subject_list = document.getElementsByClassName('subject-list')
//options variables
const options_higher_range = document.getElementById('Higher-Foundation')
const options_Test12_range = document.getElementById('Test1-2')
const options_error = document.getElementById('options-error')
//errors
const error_score = document.getElementById('percentage-score-error')
const error_subject = document.getElementById('subject-error')
const error_count_item = document.getElementById('error-count')
//percenage formulas
var percentage_result = 0
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
    percentage_output.innerHTML = "0"
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
        percentage_result = (percentage_score.value / percentage_total.value * 100).toFixed(2)
    }
    else {
        percentage_output.innerHTML = (percentage_pure.value * 1).toFixed(2)
        percentage_result = (percentage_pure.value * 1).toFixed(2)
    }
    if (parseInt(percentage_output.innerHTML) > 100){
        percentage_error.classList.remove("hidden")
    }
    else{
        percentage_error.classList.add("hidden")
    }
}
//subject formulas
var subject = "None"
var subject_list_array = []
for (let i = 0; i < subject_list.length; i++){
    var addition = {
        name: subject_list[i].name,
        id: subject_list[i].id,
    }
    subject_list_array.push(addition)
}
subject_search.oninput = () =>{
    for (let i = 0; i < subject_list_array.length; i++){
        if (subject_list_array[i].name.includes(subject_search.value.toLowerCase())){
            document.getElementById(subject_list_array[i].id).classList.remove("hidden")
        }
        else {
            document.getElementById(subject_list_array[i].id).classList.add("hidden")
        }
    }
}
subject_search.addEventListener("keydown" , (event) =>{
    if (event.key == "Enter"){
        for (let i = 0; i < subject_list_array.length; i++){
            if (subject_search.value.toLowerCase() == subject_list_array[i].name.toLowerCase()){
                subject_pressed(document.getElementById(subject_list_array[i].name))
            }
        }
    }
})
function subject_pressed(x){
    subject_higher_checks(x)
    for (let i = 0; i < subject_list_array.length; i++){
        document.getElementById(subject_list_array[i].id).classList.add("hidden")
    }
    subject_output.innerHTML = x.innerHTML
    subject = x.name
}
function subject_higher_checks(x){
    if (x.name == "computer science"){
        options_error.classList.remove("hidden")
        options_higher_range.setAttribute("max" , 0)
    }
    else if (x.name == "english language"){
        options_error.classList.remove("hidden")
        options_higher_range.setAttribute("max" , 0)
    }
    else if (x.name == "english literature"){
        options_error.classList.remove("hidden")
        options_higher_range.setAttribute("max" , 0)
    }
    else {
        options_error.classList.add("hidden")
        options_higher_range.setAttribute("max" , 0)
    }
}
//calculator{
function checks(){
    let error_count = 0
    if(percentage_result > 100 || percentage_result == 0){
        error_score.classList.remove("hidden")
        error_count += 1
    }
    else {
        error_score.classList.add("hidden")
    }
    if (subject == "None"){
        error_subject.classList.remove("hidden")
        error_count += 1
    }
    else {
        error_subject.classList.add("hidden")
    }
    if (error_count == 0){
        calculator()
    }
    else {
        error_count_item.parentElement.classList.remove("hidden")
        error_count_item.innerHTML = error_count
    }
}
function calculator(){

}