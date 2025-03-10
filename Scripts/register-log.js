function logIn(){
    let email=document.querySelector(".Email");
    let password=document.querySelector(".password");
    let check=JSON.parse(localStorage.getItem('users')) || [];
    
    check.forEach((check)=>{
        if(check.Email===email.value && check.password===password.value){
            setTimeout(function(){
                window.location.href='page.html';
                console.log("good");

            },10);
        }
    });

}
let switched;
function switchTo(){
    let btn=document.querySelector(".Effect");
    let bt=document.querySelector(".change");
    if(!switched){
        switched=true;
        btn.classList.remove('apear');
        bt.classList.remove('changed');
        bt.innerHTML=`<p class="welcome">
                <h1>WelCome!</h1>
                Join Us And Explore The World Of Luxury
            </p>
            <button type="button" class="Changebtn" onclick="switchTo()">I Have Account</button>`;   
    }
    else{
        switched=false;
        btn.classList.add('apear');
        bt.classList.add('changed');
        bt.innerHTML=`
        <p class="welcome">
                <h1>Hello!</h1>
                Welcome back Again!
            </p>
            <button type="button" class="Changebtn" onclick="switchTo()">Create Account</button>
        `;

    }

}
function register(){
    let Email=document.querySelector(".newEmail").value;
    let password=document.querySelector(".newpassword").value;
    let passwordConfirm=document.querySelector(".confirmPassword");
    if(!Email || !password || !passwordConfirm.value){
        alert("Please Fill In All Required Form");
    }
    else{
    if(password===passwordConfirm.value){
        let users=JSON.parse(localStorage.getItem('users')) || [];
        users.push(
            {
                Email,
               password

            }
        );
        localStorage.setItem('users',JSON.stringify(users));
        document.querySelector(".newEmail").value='';
        document.querySelector(".newpassword").value='';
        document.querySelector(".Effect").classList.add('apear');
        document.querySelector(".change").classList.add('changed');
        passwordConfirm.value='';
        console.log(users);
    }
    else{
        alert("Password Don't Match");
    }}
    
}