import { Jeep } from "../Data/jeep.js";
import { productGenerater } from "../Data/ProductHtml.js";
import { Products } from "../Data/products.js";
import { Sports } from "../Data/sport.js";
import { Truck } from "../Data/Truck.js";

let settingForm=document.querySelector(".panel");
let showSetting;
function setting(){
    
    let apeared=document.querySelectorAll(".setting");
    if(!showSetting){
        document.querySelector(".lineOne").classList.add("LineOne");
        document.querySelector(".lineTwo").classList.add("LineTwo");
        document.querySelector(".lineThree").classList.add("LineThree");

        showSetting=true;
        settingForm.classList.add("setting-panel");
        settingForm.innerHTML=`<a href='#'><button onclick="Catagory();">Catagory</button></a>
                                <a href='#'><button>Trending</button></a>
                                <a href='setting.html'><button>Setting</button></a>
                                <a href='about.html'><button>About</button></a>
                                <button onclick="logout();" style="color:white;">Logout</button>
                                <a href='support.html'><button>Support</button></a>`;
    }
    else{
        document.querySelector(".lineOne").classList.remove("LineOne");
        document.querySelector(".lineTwo").classList.remove("LineTwo");
        document.querySelector(".lineThree").classList.remove("LineThree");
        showSetting=false;
        settingForm.classList.remove("setting-panel");
        settingForm.innerHTML='';
    }
}
let catagoryOserver=false;
function Catagory(){
    if(!catagoryOserver){
    document.querySelector(".catagory").innerHTML=`
            <button onclick="sport()">Sport</button>
            <button onclick="jeep();">Jeep</button>
            <button onclick="truck();">Truck</button>
            <button onclick="All();">All</button>
    `;
    catagoryOserver=true;
}
    else{
        document.querySelector(".catagory").innerHTML=``;
        catagoryOserver=false;
    }
}
function sport(){
    document.querySelector(".catagoryContainer").innerHTML=`<div style="position:absolute;width:100%;height:100%;font-size:20px;margin-top:0px;text-align:center;"><h1><b>Sport Cars</b></h1></div>`;
    document.querySelector(".container").innerHTML=Sports;
    document.querySelector(".catagory").innerHTML=``;
}
function truck(){
    document.querySelector(".catagoryContainer").innerHTML=`<div style="position:absolute;width:100%;height:100%;font-size:20px;margin-top:0px;text-align:center;"><h1><b>Trucks</b></h1></div>`;
    document.querySelector(".container").innerHTML=Truck;
    document.querySelector(".catagory").innerHTML=``;

}

function jeep(){
    document.querySelector(".catagoryContainer").innerHTML=`<div style="position:absolute;width:100%;height:100%;font-size:20px;margin-top:0px;text-align:center;"><h1><b>Jeep</b></h1></div>`;
    document.querySelector(".container").innerHTML=Jeep;
    document.querySelector(".catagory").innerHTML=``;

}
function All(){
    document.querySelector(".container").innerHTML=productGenerater;
    document.querySelector(".catagory").innerHTML=``;

}
function logout(){
    let users=JSON.parse(localStorage.getItem('users')) || [];
    users.forEach((users)=>{
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
window.Catagory=Catagory;
window.sport=sport;
window.jeep=jeep;
window.truck=truck;
window.All=All;
window.search=search;
window.Theme=Theme
;

window.ativeUser=ativeUser;
ativeUser();
let choosed;
const displaying=document.querySelector('.display');
document.querySelector(".container").innerHTML=productGenerater;
document.querySelectorAll(".view").forEach((button)=>{
    button.addEventListener('click',
    function(){
        button.innerHTML=`close`;
        button.style.backgroundColor=`red`;
        let nav=button.parentElement;
        let navigate=nav.parentElement;
        let selected=navigate.parentElement;
        if(!choosed){
        document.querySelector('body').classList.add('all');
        console.log('clicked');
        settingForm.innerHTML=``;
        document.querySelector(".catagory").innerHTML=``;

        selected.classList.add('lookAt');
        displaying.classList.add('displied');
        displaying.innerHTML=``;
        choosed=true;
        }
        else{
            button.innerHTML=`view detail`;
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
let check=0;
function search(){
    let found=false;

    console.log("clicked");
    let label=document.querySelector(".searchLabel");
    let searchingItem=document.querySelector(".search").value;
    if(!searchingItem){
        label.classList.add('seachingLabelApear');
        document.querySelector(".search").classList.add("searchApear");
        console.log(document.querySelector(".search"));
        check++;

    }

    if(searchingItem){
        document.querySelector(".container").innerHTML=``;
        Products.forEach((Products)=>{
            if(Products.id===parseInt(searchingItem)){
                console.log(Products);
                document.querySelector(".container").innerHTML+=`
                <div class="product" ">
            
            <div class="item-image">
                <image src="${Products.image}" class="car-image"></image>
            </div>
            <div class="sale-discription">
                <div class="product-name">
                    ${Products.productName}
                    <button class="like" style="background-color:red;margin-top:0px;" id="${Products.id}">${Products.like} Like</button>
                </div>
                <P class="discription">
                </P>
                <div class="price">$${Products.price}
                <button class="view" data-product-id="${Products.id}">view detail</button>
                </div>
                

            </div>
        </div>`;
                found=true;
            }
        });
        if(!found){
        document.querySelector(".container").innerHTML=`
        <h1 style="color:white;">Result Not Found!<h1>
        `;

        }
    }

}
let mode=0;
function Theme(){
    if(mode===0){
        document.querySelector(".ThemeContainer").style.background="cyan";
        document.querySelector(".ThemeToggle").style.transform="translatex(30px)";
        mode++;
    }
    else{
        document.querySelector(".ThemeContainer").style.background="rgb(174, 180, 180)";
        document.querySelector(".ThemeToggle").style.transform="translatex(0px)";
        mode=0;
    
    }
}
function filter(){
    let sortBy=document.querySelector('.sortBy').value;
    let type=document.querySelector('.type').value;
        console.log(type);
}
filter();