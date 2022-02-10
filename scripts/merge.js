function merge() {
    merge_sort(0, array_size-1);
    //change back to blue for end of algo
    for (var i = 0; i < array_size; i++) {
        update_div(divs[i], sizes[i], "#1a8dff");
    }
}
function merge_sort(l, r) {
    if (l >= r) {
        return;
    }
    var m = l + parseInt((r-l)/2);
    //sets boundaries
    update_div(divs[m], sizes[m], "red");
    merge_sort(l, m);
    merge_sort(m+1, r);
    sort(l, m, r);
}
function sort(l, m, r) {
    var lIndex = l;
    var rIndex = m + 1;
    var ans = [];
    var ansIndex = 0;
    for (var i = l; i <= r; i++) {
        //elongated if statement to check if we are out of left/right values
        if (lIndex <= m && (rIndex > r || sizes[lIndex] < sizes[rIndex])) {
            ans[ansIndex++] = sizes[lIndex++];
            update_div(divs[lIndex-1], sizes[lIndex-1], "yellow");
        } else {
            ans[ansIndex++] = sizes[rIndex++];
            update_div(divs[rIndex-1], sizes[rIndex-1], "yellow");
        }
    }
    //merge together
    for (var i = 0; i < ansIndex; i++) {
        sizes[l++] = ans[i];
        //green here indicates merged
        update_div(divs[l-1], sizes[l-1], "#50C878");
    }
}