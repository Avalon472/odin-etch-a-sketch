const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#63aec5ff';

const drawspace = document.getElementById("Drawspace")
const resetButton = document.getElementById("clearButton")

let isMouseDown = false;
document.body.addEventListener("mousedown", e => isMouseDown = true);
document.body.addEventListener("mouseup", e => isMouseDown = false);

resetButton.addEventListener("click", reset)
function createGrid(size){
    for(i = 0 ; i<size; i++){
        div = document.createElement("div");
        div.classList.toggle("row")
        for(j = 0; j<16; j++){
            div2 = document.createElement("div");
            div2.classList.toggle("pixel");
            div2.classList.toggle("column")
            div.appendChild(div2)
        }
        drawspace.appendChild(div);
    }
    pixels = document.querySelectorAll(".pixel")
    pixels.forEach(item => {
        item.addEventListener("mouseover", colorIn)
    })
}

function reset(){
    drawspace.innerHTML = '';
    createGrid(DEFAULT_SIZE);
}

function colorIn(e){
    if(isMouseDown){
    e.target.style.backgroundColor = "white";}
}



createGrid(DEFAULT_SIZE)
