let go=document.querySelector(".logged");
let user=document.querySelector(".username");
let pass=document.querySelector(".password");
function sign(){
    if(user.value==="Yasin" && pass.value==="1234"){
        go.innerHTML="Logged In Successfully";
        setTimeout(function(){
            window.location.href="page.html";
        },10);
    }
    else{
        go.innerHTML='Incorrect Credential';
        go.style.color="red";
    }

}