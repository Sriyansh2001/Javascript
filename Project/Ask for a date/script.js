const nobtn = document.querySelector(".no");
const yesbtn = document.querySelector('.yes');
const body = document.querySelector('body');
const image = document.querySelector(".img");

function changebuttonposition() {
    let xaxis = parseInt((Math.random()*1000) % (window.innerHeight-500));
    let yaxis = parseInt((Math.random()*1000) % (window.innerWidth-500));
    nobtn.style.top = `${xaxis}px`;
    nobtn.style.left = `${yaxis}px`;
    nobtn.style.position = 'fixed'
}

nobtn.addEventListener('click', function() {
    changebuttonposition()
    body.appendChild(nobtn);
})

nobtn.addEventListener('mouseover', function(){
    image.src = 'noooo.gif';
})

nobtn.addEventListener('mouseleave', function(){
    image.src = 'please-yes.gif';
})

yesbtn.addEventListener('mouseover', function() {
    image.src = 'yes.gif';
})

yesbtn.addEventListener('mouseleave', function(){
    image.src = 'please-yes.gif';
})
