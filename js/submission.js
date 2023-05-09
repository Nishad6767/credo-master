


function validate(){
     

const first = document.getElementById('first').value;
const full = document.getElementById('full').value;
const mobile = document.getElementById('mob').value;
const email = document.getElementById('email').value;


const first_error = document.getElementById('first_error');
const full_error = document.getElementById('full_error');
const mob_error = document.getElementById('mob_error');
const email_error = document.getElementById('email_error');

first_error.innerHTML="";
full_error.innerText = "";
mob_error.innerHTML= "";
email_error.innerHTML ="";
var text;

if(first.length<3){
    text = "please enter your first name"
    first_error.innerHTML = text;

    return false;
}

if(full==""){
    text = "please enter your full name"
    full_error.innerText = text;
 
    return false;
}

if(mobile==""){
    text = "please enter your number"
    mob_error.innerHTML= text;

    return false;
}

if(email==""){
    text = "please enter your email"
    email_error.innerHTML = text;

    return false;
}


return true;
}







