const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
let interval = null;

function getColor() {
    let options = "0123456789ABCDEF"
    let color = "#"
    for(let i=0 ; i<6 ; ++i) {
        let ind = Math.floor(Math.random()*16);
        color += options[ind];
    }
    return color
}

function startChangingColor() {
    if(interval == null) {
        interval = setInterval(() => {
            let color = getColor()
            document.getElementsByTagName('body')[0].style.background = color;
        }, 1000);
    }
}

function stopChangingColor() {
    clearInterval(interval)
}

start.addEventListener('click', ()=> {
    startChangingColor();
})

stop.addEventListener('click', ()=> {
    stopChangingColor();
})