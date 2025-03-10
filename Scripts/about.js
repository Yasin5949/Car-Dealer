let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
    updateActiveClass();
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
    updateActiveClass();
})

function updateActiveClass() {
    let items = document.querySelectorAll('.item');
    items.forEach(item => item.classList.remove('active'));
    let middleIndex = Math.floor(items.length / 2);
    items[middleIndex].classList.add('active');
}

updateActiveClass();

console.log("hello");
