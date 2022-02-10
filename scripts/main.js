//element variable
var arrayElement = document.getElementById('array_size');
//size variable
var array_size = arrayElement.value;
var reset_array = document.getElementById('reset_array');

//array container for graphics
var arrayGraphic = document.getElementById('array');

//array of divs going to be added to <div id='array'>
var divs = [];
//array of sizes corresponding to those divs
var sizes = [];


reset_array.addEventListener("click", generate);
function generate() {
    arrayGraphic.innerHTML="";
    for (var i = 0; i < array_size; i++) {
        //from 10 to 99
        sizes[i]=Math.floor(Math.random()*90)+10;
        divs[i]=document.createElement("div");
        //add divs to graphic
        arrayGraphic.appendChild(divs[i]);
        divs[i].style="background-color:#1a8dff; margin:0% 0.1%; width:" + (100/array_size) + "%; height:" + (sizes[i]) + "%;";
    }
}

arrayElement.addEventListener("input", update);
function update() {
    array_size = arrayElement.value;
    delay = 100/array_size;
    generate();
}

window.onload = update();

var algos = document.querySelectorAll(".buttons button");

for (var i = 0; i < algos.length; i++) {
    algos[i].addEventListener("click", run);
}

function disable() {
    //disable everything on gui
    for (var i = 0; i < algos.length; i++) {
        algos[i].disabled = true;
    }
    arrayElement.disabled = true;
    reset_array.disabled = true;
}

function enable() {
    window.setTimeout(() => {
        //enable everything on gui
        for (var i = 0; i < algos.length; i++) {
            algos[i].disabled = false;
        }
        arrayElement.disabled = false;
        reset_array.disabled = false;
    },delayTotal+=delay);
}

function run() {
    disable();

    switch (this.innerHTML) {
        case 'Bubble Sort':
            bubble();
            break
        case 'Insertion Sort':
            insertion();
            break;
        case 'Merge Sort':
            merge();
            break;
        case 'Quick Sort':
            quick();
            break;
        case 'Selection Sort':
            selection();
            break;
    }
    enable();
}

var delay = 100/array_size;
var delayTotal = 0;
//to be called in each sort when we want to change values of each div
function update_div(div, height, color) {
    window.setTimeout(() => {
        div.style="background-color:" + color +"; margin:0% 0.1%; width:" + (100/array_size) + "%; height:" + height + "%";
    }, delayTotal);
    delayTotal+=delay;
}