const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000000';

let currentSize = DEFAULT_SIZE
let currentColor = DEFAULT_COLOR

const drawspace = document.getElementById("Drawspace")
const resetButton = document.getElementById("clearButton")
const borderButton = document.getElementById("borderToggle")
const sizeSlider = document.getElementById("gridSize")
const sizeText = document.getElementById("sizeText")
const colorSelect = document.getElementById("colorSelect")

let isMouseDown = false;
document.body.addEventListener("mousedown", e => isMouseDown = true);
document.body.addEventListener("mouseup", e => isMouseDown = false);

resetButton.addEventListener("click", reset)
sizeSlider.addEventListener("input", e => resizeGrid(parseInt(e.target.value)))
borderButton.addEventListener("click", toggleBorder)
colorSelect.addEventListener("input", e => currentColor = e.target.value)

function createGrid(){

    let size = currentSize;

    drawspace.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    drawspace.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i< size*size; i++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.classList.toggle("hasBorder")
        pixel.addEventListener("mouseover", colorIn)
        pixel.addEventListener("mousedown", colorIn)
        drawspace.appendChild(pixel)
    }
}

function reset(){
    drawspace.innerHTML = '';
    createGrid();
}

function colorIn(e){
    if(e.type == "mousedown" || (e.type == "mouseover" && isMouseDown)){
    e.target.style.backgroundColor = currentColor;}
}

function resizeGrid(size){
    currentSize = size;
    reset();
    sizeText.textContent = `Grid Size: ${size} x ${size}`;
}

function toggleBorder(){
    allPixels = document.querySelectorAll(".pixel")
    allPixels.forEach(element => {
        element.classList.toggle("hasBorder")
    });
}

createGrid()


    // for(i = 0 ; i<currentSize; i++){
    //     div = document.createElement("div");
    //     div.classList.toggle("row")
    //     for(j = 0; j<currentSize; j++){
    //         div2 = document.createElement("div");
    //         div2.classList.toggle("pixel");
    //         div2.classList.toggle("column")
    //         div.appendChild(div2)
    //     }
    //     drawspace.appendChild(div);
    // }
        // pixels = document.querySelectorAll(".pixel")
        // pixels.forEach(item => {
        // item.addEventListener("mouseover", colorIn)
        // item.addEventListener("mousedown", colorIn)
        // })