function selection() {
    var i, j, min;
    for (var i = 0; i < array_size-1; i++) {
        min = i;
        update_div(divs[i], sizes[i], "yellow");
        for (j = i+1; j < array_size; j++) {
            update_div(divs[j], sizes[j], "yellow");
            if (sizes[j] < sizes[min]) {
                min = j;
            }
            update_div(divs[j], sizes[j], "#1a8dff");
        }
        swap(min, i);
        update_div(divs[i], sizes[i], "#50C878");
    }
    update_div(divs[array_size-1], sizes[array_size-1], "#50C878");
    //set back to blue
    for (var i = 0; i < array_size; i++) {
        update_div(divs[i], sizes[i], "#1a8dff");
    }
}
function swap(i, j) {
    var temp = sizes[i];
    sizes[i] = sizes[j];
    sizes[j] = temp;
}