function move(){
    setInterval(()=>{
        let moving=document.querySelectorAll(".sliders");
        document.querySelector('.slide').appendChild(moving[0]);
        updateFirst();
        middle();
        updateActiveClass();
    },300);
}
function updateActiveClass() {
    let moving = document.querySelectorAll('.sliders');
    moving.forEach(item => item.classList.remove('active'));
    let middleIndex = Math.floor(moving.length / 2);
    moving[middleIndex].classList.add('active');

}
function updateFirst(){
    let items=document.querySelectorAll('.sliders');
    items.forEach(item=> item.classList.remove('far'));
    let firstIndex=items.length-9;
    let last=items.length-1;
    items[firstIndex].classList.add('far');
    items[last].classList.add('far');
   }
function middle(){
    let items=document.querySelectorAll('.sliders');
    items.forEach(item=> item.classList.remove('middle'));
    let second=items.length-8;
    let lastsecond=items.length-2;
    items[second].classList.add('middle');
    items[lastsecond].classList.add('middle');
}
function display(){
    setInterval(()=>{

   let n=Math.floor(Math.random()*4)+1;
   console.log(n);
   if(n===1){
        document.querySelector('.nameshow').classList.add('animateTwo');
        setTimeout(()=>{
            document.querySelector('.nameshow').classList.remove('animateTwo');
        },10000);
   }
   else if(n===3){
        document.querySelector('.nameshow').classList.add('animateTwo');
        setTimeout(()=>{
            document.querySelector('.nameshow').classList.remove('animateTwo');
        },10000);
   }
   else if(n===2){
    document.querySelector('.nameshowTwo').classList.add('animate');
    setTimeout(()=>{
        document.querySelector('.nameshowTwo').classList.remove('animate');
    },10000);
   }
   else if(n===4){
    document.querySelector('.nameshowTwo').classList.add('animate');
      setTimeout(()=>{
        document.querySelector('.nameshowTwo').classList.remove('animate');
      },10000);
   }
    },15000);
}
function images(){
    let image = document.querySelectorAll('.image');
    image.forEach(item => item.classList.add('hideImage'));
    let middleIndex = Math.floor(image.length / 2);
    image[middleIndex].classList.remove('hideImage');

}
function imageShow(){
    setInterval(()=>{
    let image=document.querySelectorAll('.image');
    document.querySelector('.imageShow').appendChild(image[0]);
    images();
    
    },600);

}
imageShow();
display();
move();
updateFirst();
middle();
updateActiveClass() ;