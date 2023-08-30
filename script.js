function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    if (x == ""){
        alert("Name must be filled out")
        return false
    }
    let y = document.forms["myForm"]["age"].value;
    if(y==""){alert("Enter a valid age ")}
    return false;
}
function myNumber(){
    let z = document.getElementById('numb').value;
    let text;
    if (isNaN(x) || x<1 || x>10){
        text ="Input not valid;"
    }
    else{
        text = "Input Ok";
    }
    document.getElementById('demo').innerHTML = text;
}
