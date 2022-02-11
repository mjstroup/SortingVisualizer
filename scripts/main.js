/**
 * @author Matthew Stroup
 *      mjstroup@purdue.edu
 * @version February 10th, 2022
 */
//element variable
var arrayElement = document.getElementById('array_size');
//size variable
var array_size = arrayElement.value;
var reset_array = document.getElementById('reset_array');
//speed variable
var speedElement = document.getElementById('array_speed');
var array_speed;

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
        divs[i].style="background-color:#1a8dff; margin:0% 0.05%; width:" + (100/array_size) + "%; height:" + (sizes[i]) + "%;";
    }
}

arrayElement.addEventListener("input", update);
function update() {
    array_size = arrayElement.value;
    delay = delay = 100000/(array_size*array_speed);
    generate();
}
speedElement.addEventListener("input", updateSpeed);
function updateSpeed() {
    switch (parseInt(speedElement.value)) {
        case 1: 
        array_speed = 30;
        break;
        case 2: 
        array_speed = 100;
        break;
        case 3: 
        array_speed = 1000;
        break;
        case 4: 
        array_speed = 3000;
        break;
        case 5: 
        array_speed = 5000;
        break;
    }
    delay = delay = 100000/(array_size*array_speed);
}

window.onload = update();
window.onload = updateSpeed();

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
    speedElement.disabled = true;
}

function enable() {
    window.setTimeout(() => {
        //enable everything on gui
        for (var i = 0; i < algos.length; i++) {
            algos[i].disabled = false;
        }
        arrayElement.disabled = false;
        reset_array.disabled = false;
        speedElement.disabled = false;
    },delayTotal+=delay);
}

function run() {
    disable();

    switch (this.innerHTML) {
        case 'Bubble Sort':
            bubble();
            break;
        case 'Heap Sort':
            heap();
            break;
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
    delayTotal = 0;
}

var delay = 100000/(array_size*array_speed);
var delayTotal = 0;
//to be called in each sort when we want to change values of each div
function update_div(div, height, color) {
    window.setTimeout(() => {
        div.style="background-color:" + color +"; margin:0% 0.05%; width:" + (100/array_size) + "%; height:" + height + "%";
    }, delayTotal);
    delayTotal+=delay;
}