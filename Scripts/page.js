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
                                <a href='homePage.html'><button>Logout</button></a>
                                <a href='#'><button>Support</button></a>`;
    }
    else{
        showSetting=false;
        settingForm.classList.remove("setting-panel");
        settingForm.innerHTML='';
    }
}
window.setting=setting;
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
        let liked=parseInt(like.id);

        Products.forEach((products)=>{
            if(like.id==products.id){
                products.like++;
                like.innerHTML=`
                ${products.like} Like`;
            }
        });
    });
});
