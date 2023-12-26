let randomnumber = (parseInt(Math.random()*100+1));
let remaining = 10;
let prevGuess = []

function checkresult() {
    let value = document.querySelector("#result").value;
    if(remaining == 0) {
        let container = document.getElementById("finalresult")
        container.innerHTML = "Restart To Continue";
        return ;
    }
    if(value == randomnumber) {
        let container = document.getElementById("finalresult");
        container.innerHTML = "You Won The Game";
        container.style.color = "green";
        restartGame();
    }
    else {
        remaining -= 1;
        prevGuess.push(value);
        
        if(value > randomnumber) {
            let container = document.getElementById("finalresult");
            container.innerHTML = "Number is Too High";
        }
        else {
            let container = document.getElementById("finalresult");
            container.innerHTML = "Number is Too Low";
        }
        if(remaining == 0) {
            let container = document.getElementById("finalresult")
            container.innerHTML = "You Have Loss The Game";
            container.style.color = "red";
        }
        document.getElementById("previous").innerHTML = prevGuess.join(" ");
        document.getElementById("remaining").innerHTML = remaining;
    }
}

function restartGame() {
    remaining = 10;
    document.getElementById("remaining").innerHTML = remaining;
    document.getElementById("previous").innerHTML = "";
    randomnumber = (parseInt(Math.random()*100+1));
    console.log(randomnumber);
    let container = document.getElementById("finalresult")
    container.innerHTML = "";
    prevGuess = []
}
