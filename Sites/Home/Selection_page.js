const search_bar = document.getElementById('selection-search')
const error = document.getElementById('search-error')
const enter_group = document.getElementsByClassName('search-subject')
const sidebar_suject = document.getElementById('subject-sidebar')
const subject_list = document.getElementById('subject-list')
const subject_list_hide = document.getElementById('subject-list-hide')
const sidebar_higher = document.getElementById('higher-foundation')
const sidebar_test = document.getElementById('Test1-Test2')
const higher_slider = document.getElementById('HF')
const Test_slider = document.getElementById('Test12')
const selection_error = document.getElementById('selection-error')
var results_search = []
for(var i = 0; i < enter_group.length; i++){
    var addition = {
        name : enter_group[i].innerHTML.toLowerCase(),
        id : enter_group[i].id
    }
    results_search.push(
        addition
    )
}
search_bar.addEventListener("input" , () =>{
    error.style.display = "none"
    var counter = 0
    var search_value = search_bar.value.toLowerCase()
    for(var i = 0; i < results_search.length; i ++){
        if(results_search[i].name.includes(search_value)){
            document.getElementById(results_search[i].id).classList.remove("page-hidden")
            counter += 1
        }
        else{
            document.getElementById(results_search[i].id).classList.add("page-hidden")

        }
    }
    if(search_value == ""){
        for(var i = 0; i < results_search.length; i ++){
            document.getElementById(results_search[i].id).classList.add("page-hidden")
        }
    }
    if (counter == 0){
        error.style.display = "block"
    }
})
function search_button(x){
    console.log(x)
    if (x.innerHTML.toLowerCase() == "computer science"){
        higher_slider.value = 1
        higher_slider.setAttribute("max" , 1)
        document.getElementById('selection-error').style.display = "block"
    }
    else if(x.innerHTML.toLowerCase() == "english language"){
        higher_slider.value = 1
        higher_slider.setAttribute("max" , 1)
        document.getElementById('selection-error').style.display = "block"
    }
    else if(x.innerHTML.toLowerCase() == "english literature"){
        higher_slider.value = 1
        document.getElementById('selection-error').style.display = "block"
        higher_slider.setAttribute("max" , 1)
    }
    else {
        higher_slider.setAttribute("max" , 2)
        document.getElementById('selection-error').style.display = "none"
    }
    for (let i = 0; i < enter_group.length; i++){
        document.getElementById(results_search[i].id).classList.add("page-hidden")
    }
    sidebar_suject.innerHTML = x.innerHTML
    search_bar.value = ""
}
higher_slider.oninput = () =>{
    var value = higher_slider.value
    if (value == 1){
        sidebar_higher.innerHTML = "Higher"
    }
    else {
        sidebar_higher.innerHTML = "Foundation"
    }
}
Test_slider.oninput = () =>{
    var value = Test_slider.value
    if (value == 1){
        sidebar_test.innerHTML = "Test 1"
    }
    else {
        sidebar_test.innerHTML = "Test 2"
    }
}
search_bar.addEventListener("keypress", function(Event){
    if (search_bar.value.toLowerCase() == "computer science"){
        higher_slider.value = 1
    }
    else if(search_bar.value.toLowerCase() == "English Language"){
        higher_slider.value = 1
    }
    else if(search_bar.value.toLowerCase() == "English Literature"){
        higher_slider.value = 1
    }
    if (event.which == 13){
        console.log(event.which)
        for (let i = 0; i < results_search.length; i++){
            console.log(results_search[i].name)
            console.log(search_bar.value)
            if (search_bar.value.toLowerCase() == results_search[i].name){
                console.log("something esle")
            }
            else {
                console.log("else")
            }
            if (search_bar.value == results_search[i].name){
                console.log("something")
                search_button(document.getElementById(results_search[i].id))
            }
        }
    }

})