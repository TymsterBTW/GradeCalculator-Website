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
//pages
const main1 = document.getElementById('main1')
const main2 = document.getElementById('main2')
const return_button = document.getElementById('return')
const grade_result = document.getElementById('grade-result')
const pass_fail = document.getElementById('pass.fail')
const foundation_result = document.getElementById('foundation')
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
    if  (percentage_result == 69.00){
        document.getElementById('69').classList.remove("hidden")
    }
    else {
        document.getElementById('69').classList.add("hidden")
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
        options_higher_range.setAttribute("max" , 1)
    }
}
//calculator{
var foundation = false
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
        output(calculator())
    }
    else {
        error_count_item.parentElement.classList.remove("hidden")
        error_count_item.innerHTML = error_count
    }
}
function subject_addition(){
    let SubjectHF = subject + options_higher_range.value
    let subjectHF12 = SubjectHF + options_Test12_range.value
    return subjectHF12
}
function calculator(){
    var grade = 0
    let parameter = percentage_margins[subject_addition()]
    let max = parameter.length
    if (max == 5){
        foundation = true
    }
    else {
        foundation = false
    }
    for (let i = 0; i < max; i++){
        if (percentage_result > parameter[max - 1]){
            grade = max
            return grade
        }
        else {
            if (percentage_result < parameter[i]){
                grade = i
                return grade
            }
        }
    }
}
function output(x){
    main1.classList.add("hidden")
    main2.classList.remove("hidden")
    grade_result.innerHTML = x
    if (x >= 4){
        pass_fail.innerHTML = "Pass"
        pass_fail.style.color = "Green"
    }
    else {
        pass_fail.innerHTML = "Fail"
        pass_fail.style.color = "red"
    }
    console.log(foundation)
    if (foundation == true){
        foundation_result.style.display = "none"
    }
    else {
        foundation_result.style.display = "block"
    }
}
function return_button_pressed(){
    main1.classList.remove("hidden")
    main2.classList.add("hidden")
}
const percentage_margins = {
    /*maths*/
    "math00" : [3.75,7.5,11.25,17.5,28.75,40,52.5,68.75,85],
    "math01" : [3.75,7.5,11.25,17.5,30,43.75,57.5,71.25,86.25],
    "math10" : [10,20,31,42,53],
    "math11" : [8.75,21.25,33.75,47.5,62.5],
    /*english language*/
    "english language00" : [10,22.5,35,47.5,53.75,60,67.5,73.75,80],
    "English Language01" : [10,22.5,35,47.5,53.75,60,67.5,73.75,80],
    /*english literature*/
    "english literature00" : [10.9,21.8,32.8,43.75,51.2,60.9,70.3,78.1,87.5],
    "english literature01" : [9.3,19.7,30.2,41.6,51,60.4,70,79.16,88.5],
    /*Chemistry*/
    "chemistry10" : [10,25,40,66,65],
    "chemistry11" : [11,27,43,59,68],
    "chemistry00" : [8,16,20,25,34,43,52,61,71],
    "chemistry01" : [8,16,20,25,35,45,55,64,73],
    /*Physics*/
    "physics10" : [10,26,42,59,67],
    "physics11" : [10,24,38,52,62],
    "physics00" : [11,17,24,29,39,50,61,68,76],
    "physics01" : [7,13,18,22,30,38,47,57,67],
    /*Biology*/
    "biology10" : [10,27,44,62,69],
    "biology11" : [11,24,38,52,61],
    "biology00" : [8,21,28,32,40,48,57,63,69],
    "biology01" : [6,13,18,23,32,41,50,57,65],
    /*computer science*/
    "computer science00" : [10, 21.25,32.5,43.75,53.75,63.75,73.75,80,87.5],
    "computer science01" : [11.25,22.5,33.75,46.25,53.75,61.25,68.75,76.25,85],

  }