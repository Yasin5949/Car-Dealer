let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
const about=document.querySelector(".yasinInfo");
const aboutSecond=document.querySelector(".frontDev");
const picture=document.querySelector(".yasin");
const aboutdev=document.querySelector(".secondDeveloper");
const progress=document.querySelector(".mine");
const progressTwo=document.querySelector(".collaborator");
let count=0;
next.addEventListener('click', function(){
    count=count+1;
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
    updateActiveClass();
    updateFirst();
    if(count===3){
        count=-2;
    }
  
    console.log(count);
    if(count===0 || count===1 || count===2){
        aboutdev.classList.remove('currentlly');
        aboutSecond.classList.remove('currentlly');
        picture.classList.remove('currentOne');
        about.classList.remove('currentOne');
        progress.classList.add('show');
        progressTwo.classList.remove('show');
    }
    else{
        aboutdev.classList.add('currentlly');
        aboutSecond.classList.add('currentlly');
        picture.classList.add('currentOne');
        about.classList.add('currentOne');
        progress.classList.remove('show');
        progressTwo.classList.add('show');

    }
    
    

})

prev.addEventListener('click', function(){
    count=count-1;
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
    updateActiveClass();
    updateFirst();
    if(count===-3){
        count=2;
    }
    console.log(count);
    if(count===-1 ||  count===-2){
        aboutdev.classList.add('currentlly');
        aboutSecond.classList.add('currentlly');
        picture.classList.add('currentOne');
        about.classList.add('currentOne');
        progressTwo.classList.add('show');
    }
    else{
        aboutdev.classList.remove('currentlly');
        aboutSecond.classList.remove('currentlly');
        picture.classList.remove('currentOne');
        about.classList.remove('currentOne');
        progressTwo.classList.remove('show');

    }
    
    
    

})

function updateActiveClass() {
    let items = document.querySelectorAll('.item');
    items.forEach(item => item.classList.remove('active'));
    let middleIndex = Math.floor(items.length / 2);
    items[middleIndex].classList.add('active');
}
function updateFirst(){
 let items=document.querySelectorAll('.item');
 items.forEach(item=> item.classList.remove('far'));
 let firstIndex=items.length-5;
 let last=items.length-1;
 items[firstIndex].classList.add('far');
 items[last].classList.add('far');
}

   
updateFirst();

updateActiveClass();

console.log("hello");
