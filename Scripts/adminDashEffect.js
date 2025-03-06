let square=document.querySelector(".backBody");
let i=0;
let background='';
while(i<1000){
    background+='<div class="square"></div>';
    i++;
}
console.log(background);
square.innerHTML=background;
