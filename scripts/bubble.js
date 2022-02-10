function bubble() {
    var i, j;
    for (i = 0; i < array_size; i++) {
        for (j = 0; j < array_size-i-1; j++) {
            update_div(divs[j], sizes[j], "yellow");
            if (sizes[j] > sizes[j+1]) {
                update_div(divs[j], sizes[j], "yellow");
                update_div(divs[j+1], sizes[j+1], "yellow");
                swap(sizes, j, j+1);
                update_div(divs[j], sizes[j], "yellow");
                update_div(divs[j+1], sizes[j+1], "yellow");
            }
            update_div(divs[j], sizes[j], "#1a8dff");
        }
        update_div(divs[j], sizes[j], "green");
    }   
}
function swap(arr, x, y) {
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y]=temp;
}