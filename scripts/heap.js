function heap() {
    for (var i = Math.floor(array_size/2)-1; i >= 0; i--) {
        heapify(array_size, i);
    }
    for (var i = array_size-1; i > 0; i--) {
        heapswap (0, i);
        update_div(divs[i], sizes[i], "#50C878");
        update_div(divs[i], sizes[i], "yellow");
        heapify(i, 0);
        update_div(divs[i], sizes[i], "#1a8dff");
        update_div(divs[i], sizes[i], "#50C878");
    }
    update_div(divs[i], sizes[i], "#50C878");
    for (var i = 0; i < array_size; i++) {
        update_div(divs[i], sizes[i], "#1a8dff");
    }
}
function heapify(n, i) {
    var largest = i;
    var l = 2*i+1;
    var r = 2*i+2;
    if (l < n && sizes[l] > sizes[largest]) {
        //change other largest first
        if (largest != i) {
            update_div(divs[largest], sizes[largest], "#1a8dff");
        }
        largest = l;
        update_div(divs[largest], sizes[largest], "red");
    }
    if (r < n && sizes[r] > sizes[largest]) {
        if (largest != i) {
            update_div(divs[largest], sizes[largest], "#1a8dff");
        }
        largest = r;
        update_div(divs[largest], sizes[largest], "red");
    }
    if (largest != i) {
        heapswap (i, largest);
        heapify(n, largest);
    }
}
function heapswap(i, j) {
    update_div(divs[i], sizes[i], "red");
    update_div(divs[j], sizes[j], "red");
    var temp = sizes[i];
    sizes[i] = sizes[j];
    sizes[j] = temp;
    update_div(divs[i], sizes[i], "red");
    update_div(divs[j], sizes[j], "red");
    update_div(divs[i], sizes[i], "#1a8dff");
    update_div(divs[j], sizes[j], "#1a8dff");
}