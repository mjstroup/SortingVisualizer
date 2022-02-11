function insertion() {
    var i, key, j;
    for (var i = 0; i < array_size; i++) {
        update_div(divs[i], sizes[i], "yellow");
        key = sizes[i];
        j = i-1;
        while (j >= 0 && sizes[j] > key) {
            //set to yellow to indicate "swapping"
            update_div(divs[j], sizes[j], "yellow");
            update_div(divs[j+1], sizes[j+1], "yellow");
            sizes[j+1] = sizes[j];
            //set back to blue after swapping, also update heights
            update_div(divs[j], key, "#1a8dff");
            update_div(divs[j+1], sizes[j+1], "#1a8dff");
            j--;
        }
        sizes[j+1] = key;
        update_div(divs[j+1], sizes[j+1], "#1a8dff");
    }
    //set to green then back to blue to indicate sorted
    for (var i = 0; i < array_size; i++) {
        update_div(divs[i], sizes[i], "#50C878");
    }
    for (var i = 0; i < array_size; i++) {
        update_div(divs[i], sizes[i], "#1a8dff");
    }
}