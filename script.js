function login(element){
    if (element.innerText == "Login"){
        element.innerText ="Logout";
    } else {
        element.innerText = "Login";
    }

}

function hide(element){
    console.log(element);
    element.remove();
}