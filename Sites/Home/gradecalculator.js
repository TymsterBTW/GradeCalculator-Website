const margin_percentage = {
    /*maths*/
    "MathHigherTest 1" : [3.75,7.5,11.25,17.5,28.75,40,52.5,68.75,85],
    "MathHigherTest 2" : [3.75,7.5,11.25,17.5,30,43.75,57.5,71.25,86.25],
    "MathFoundationTest 1" : [10,20,31,42,53],
    "MathFoundationTest 2" : [8.75,21.25,33.75,47.5,62.5],
    /*english language*/
    "English LanguageHigherTest 1" : [10,22.5,35,47.5,53.75,60,67.5,73.75,80],
    "English LanguageHigherTest2" : [10,22.5,35,47.5,53.75,60,67.5,73.75,80],
    /*english literature*/
    "English LiteratureHigherTest 1" : [10.9,21.8,32.8,43.75,51.2,60.9,70.3,78.1,87.5],
    "English LiteratureHigherTest 2" : [9.3,19.7,30.2,41.6,51,60.4,70,79.16,88.5],
    /*Chemistry*/
    "ChemistryFoundationTest 1" : [10,25,40,66,65],
    "ChemistryFoundationTest 2" : [11,27,43,59,68],
    "ChemistryHigherTest 1" : [8,16,20,25,34,43,52,61,71],
    "ChemistryHigherTest 2" : [8,16,20,25,35,45,55,64,73],
    /*Physics*/
    "PhysicsFoundationTest 1" : [10,26,42,59,67],
    "PhysicsFoundationTest 2" : [10,24,38,52,62],
    "PhysicsHigherTest 1" : [11,17,24,29,39,50,61,68,76],
    "PhysicsHigherTest 2" : [7,13,18,22,30,38,47,57,67],
    /*Biology*/
    "BiologyFoundationTest 1" : [10,27,44,62,69],
    "BiologyFoundationTest 2" : [11,24,38,52,61],
    "BiologyHigherTest 1" : [8,21,28,32,40,48,57,63,69],
    "BiologyHigherTest 2" : [6,13,18,23,32,41,50,57,65],
    /*computer science*/
    "Computer ScienceHigherTest 1" : [10, 21.25,32.5,43.75,53.75,63.75,73.75,80,87.5],
    "Computer ScienceHigherTest 2" : [11.25,22.5,33.75,46.25,53.75,61.25,68.75,76.25,85],
}
const percentage_sidebar = document.getElementById('sidebar-percentage')
function grade_cal(){
    const subject = document.getElementById('subject-sidebar')
    const subject_button = document.getElementById('selection-button')
    const percentage_button = document.getElementById('percentage-button')
    const percentage_sidebar = document.getElementById('sidebar-percentage')
    const subjectHF = subject.innerHTML + document.getElementById('higher-foundation').innerHTML
    const subject12 = document.getElementById('Test1-Test2').innerHTML
    const subjectHF12 = subjectHF + document.getElementById('Test1-Test2').innerHTML
    const result_text = document.getElementById('result-text')
    const error = document.getElementById('error')
    const searchbar = document.getElementById('selection-search')
    const checks = margin_percentage[subjectHF12]
    if (percentage_sidebar.innerHTML == "0" || checks == undefined){
        console.log(percentage_sidebar.innerHTML)
        console.log(checks)
        error.classList.remove("page-hidden")
        result_text.classList.add("page-hidden")
        if (percentage_sidebar.innerHTML == "0" || percentage_sidebar.innerHTML == "Infinity" || parseInt(percentage_sidebar.innerHTML) > 100){
            error_color(percentage_sidebar, "red")
            percentage_button.style.borderRightColor = "red"

        }
        else {
            error_color(percentage_sidebar, "black")
            percentage_button.style.borderRightColor = "black"
        }
        if (subject.innerHTML == "None"){
            error_color(subject , "red")
            subject_button.style.borderRightColor = "red"
        }
        else {
            error_color(subject, "black")
            subject_button.style.borderRightColor = "black"
        }
    }
    else {
        percentage_button.style.borderRightColor = "black"
        subject_button.style.borderRightColor = "black"
        error.classList.add("page-hidden")
        result_text.classList.remove("page-hidden")
        error_color(percentage_sidebar , "black")
        error_color(subject , "black")
        if(checks.length == 9){
            var result = grade_calculation(parseInt(percentage_sidebar.innerHTML), checks , checks.length - 1)
        }
        else {
            var result = grade_calculation(parseInt(percentage_sidebar.innerHTML), checks , checks.length - 1)
        }
        grade_display(result, checks.length)
    }
}
function grade_display(grade_result , option){
    if (option == 5){
        document.getElementById('foundation-cap').style.display = "block"
    }
    const letter_grades = ["U" ,"G" , "F", "E", "D", "C","B","A" , "A*" ,"A*"]
    const pass_fail = document.getElementById('pass.fail')
    const grade = document.getElementById('grade')
    const grade_letter = document.getElementById('letter_grade')
    grade.innerHTML = grade_result
    grade_letter.innerHTML = letter_grades[grade_result]
    if (parseInt(grade_result) >= 4){
        pass_fail.innerHTML = "Pass"
        pass_fail.style.color = "green"
    }
    else{
        pass_fail.innerHTML = "Fail"
        pass_fail.style.color = "red"
    }

}
function grade_calculation(percentage, checks , max){
    for (let i = 1; i < max; i++){
        if (percentage < checks[0]){
            var result = 0
            return result
        }
        else if (percentage > checks[max]){
            var result = max + 1
            return result
        }
        else if (percentage < checks[i]){
            var result = i - 1
            return result

        }
    }
}
function error_color(x, color){
    x.style.color = color
    x.parentElement.style.color = color
}