const signIn = document.getElementById("signin");
signIn.addEventListener('click', adminLogIn)

function adminLogIn () {
let username = prompt ("username")
let password = prompt ("password")
if ( username == "admin" && password == "admini"){
alert ("Login successful"); 
} 
    else {
    alert("Invalid detail(s)");
}
}

if (adminLogIn) {
    editMenu
}
function editMenu () {
   
}