const eamil=document.querySelector(".email");
const password=document.querySelector(".password");
function logIn(){
    if(email.value==="Yasin" && password.value==="1234"){
        setTimeout(function(){
            window.location.href="adminPage.html";

        },10);
    }
    else{
        document.querySelector(".formIdentifier").innerHTML='000';
    }
}