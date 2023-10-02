function display(num){
    result.value+=num  
}

function equal(){
    result.value = eval(result.value)
}

function clearAll(){
    result.value = ""
}

function back(){
    result.value=result.value.slice(0,-1)
}