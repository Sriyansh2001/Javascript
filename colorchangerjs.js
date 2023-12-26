let btn = document.querySelectorAll('.button');
let body = document.querySelector("body");

btn.forEach((button)=> {
    button.addEventListener('click',function(e) {
        body.style.backgroundColor = e.target.id;
    })
})

function reset() {
    body.style.backgroundColor = '#212121';
}
