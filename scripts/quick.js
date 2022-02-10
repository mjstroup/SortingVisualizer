function quick() {
    quick_sort(0, array_size-1);
    //set to green then back to blue to indicate sorted
    for (var i = 0; i < array_size; i++) {
        update_div(divs[i], sizes[i], "#50C878");
    }
    for (var i = 0; i < array_size; i++) {
        update_div(divs[i], sizes[i], "#1a8dff");
    }
}
function quick_sort(low, high) {
    if (low < high) {
        var pi = partition(low, high);
        quick_sort(low, pi-1);
        quick_sort(pi+1, high);
    }
}
function partition(low, high) {
    var pivot = sizes[high];
    var i = low - 1;
    update_div(divs[high], sizes[high], "red");
    for (var j = low; j <= high - 1; j++) {
        if (sizes[j] < pivot) {
            i++;
            update_div(divs[i], sizes[i], "yellow");
            update_div(divs[j], sizes[j], "yellow");
            swap(i, j);
            update_div(divs[i], sizes[i], "#1a8dff");
            update_div(divs[j], sizes[j], "#1a8dff");
        }
    }
    swap(i+1, high);
    update_div(divs[i+1], sizes[i+1], "#1a8dff");
    update_div(divs[high], sizes[high], "#1a8dff");
    return i+1;
}
function swap(i, j) {
    var temp = sizes[i];
    sizes[i] = sizes[j];
    sizes[j] = temp;
}