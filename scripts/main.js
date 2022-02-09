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
    generate();
}

window.onload = update();