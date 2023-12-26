let body = document.getElementsByTagName('body')[0];

function create_dot(x,y) {
    let dot = document.createElement("div")
    dot.style.position = "absolute"
    dot.style.top = `${y}px`
    dot.style.left = `${x}px`
    dot.style.width = "5px"
    dot.style.height = "5px"
    dot.style.borderRadius = "50%"
    dot.style.backgroundColor = "red"
    return dot
}

body.addEventListener('click',(e)=>{
    let x = e.pageX , y = e.pageY;
    let child = create_dot(x,y);
    body.appendChild(child)
    setTimeout(function() {
        body.removeChild(child);
    },1500)
})