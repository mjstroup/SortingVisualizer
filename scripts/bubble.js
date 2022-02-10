/**
 * General notes for all sorts
 * Yellow indicates swapping
 * Red indicates pivots or boundaries
 * Green indicates sorted elements
 * yellow - #ffffff0
 * blue - #1a8dff
 * green - #50c878
 */
function bubble() {
    var i, j;
    for (i = 0; i < array_size; i++) {
        for (j = 0; j < array_size-i-1; j++) {
            update_div(divs[j], sizes[j], "yellow");
            if (sizes[j] > sizes[j+1]) {
                //set to yellow to indicate "swapping"
                update_div(divs[j], sizes[j], "yellow");
                update_div(divs[j+1], sizes[j+1], "yellow");
                swap(j, j+1);
                //update heights
                update_div(divs[j], sizes[j], "yellow");
                update_div(divs[j+1], sizes[j+1], "yellow");
            }
            update_div(divs[j], sizes[j], "#1a8dff");
        }
        update_div(divs[j], sizes[j], "#50C878");
    }   
    for (var i = 0; i < array_size; i++) {
        update_div(divs[i], sizes[i], "#1a8dff");
    }
}
//swap helper
function swap(x, y) {
    var temp = sizes[x];
    sizes[x] = sizes[y];
    sizes[y]=temp;
}