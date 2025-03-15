import { productGenerater } from "../Data/ProductHtml.js";
import { Products } from "../Data/products.js";
let settingForm=document.querySelector(".panel");
let showSetting;
function setting(){
    
    let apeared=document.querySelectorAll(".setting");
    
    if(!showSetting){
        showSetting=true;
        settingForm.classList.add("setting-panel");
        settingForm.innerHTML=`<a href='#'><button>Catagory</button></a>
                                <a href='#'><button>Trending</button></a>
                                <a href='setting.html'><button>Setting</button></a>
                                <a href='about.html'><button>About</button></a>
                                <button onclick="logout();" style="color:white;">Logout</button>
                                <a href='support.html'><button>Support</button></a>`;
    }
    else{
        showSetting=false;
        settingForm.classList.remove("setting-panel");
        settingForm.innerHTML='';
    }
}
function logout(){
    let users=JSON.parse(localStorage.getItem('users')) || [];
    user.forEach((users)=>{
        users.mode=users.mode==='off' ? 'active':'off';
    });
    localStorage.setItem('users',JSON.stringify(users));
    setTimeout(()=>{
    window.location.href='homePage.html';
},10);
}
function ativeUser(){
    let username=JSON.parse(localStorage.getItem('users')) || [];
    username.forEach((user)=>{
        if(user.mode=="active"){
            document.querySelector('.user-name').innerHTML=`${user.username}`;
        }
    })
    
}
window.setting=setting;
window.logout=logout;
window.ativeUser=ativeUser;
ativeUser();
let choosed;
const displaying=document.querySelector('.display');
document.querySelector(".container").innerHTML=productGenerater;
document.querySelectorAll(".view").forEach((button)=>{
    button.addEventListener('click',
    function(){
        button.innerHTML=`exit`;
        button.style.backgroundColor=`red`;
        let nav=button.parentElement;
        let navigate=nav.parentElement;
        let selected=navigate.parentElement;
        if(!choosed){
        document.querySelector('body').classList.add('all');
        console.log('clicked');
        selected.classList.add('lookAt');
        displaying.classList.add('displied');
        displaying.innerHTML=`
        
        `;
        choosed=true;
        }
        else{
            button.innerHTML=`view`;
            button.style.backgroundColor=`gold`;
            displaying.classList.remove('displied');
            document.querySelector('body').classList.remove('all');
            console.log('clicked');
            selected.classList.remove('lookAt');
            choosed=false;
            

        }
    }
);
});
document.querySelectorAll('.like').forEach((like)=>{
    like.addEventListener('click',()=>{
        Products.forEach((products)=>{
            if(products.id==parseInt(like.id)){
                products.like+=1;
                like.innerHTML=`${products.like} Like`;
                console.log(products.like);
            }
        });
    });
});
