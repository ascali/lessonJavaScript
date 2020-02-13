function miniMaxSum(arr) {
    var min = arr[0],
        max = arr[0],
        sum = arr[0],
        i, v;
    
    for (i = 1; i < arr.length; i++) {
        v = arr[i];
        sum += v;
        if (v > max) max = v;
        if (v < min) min = v;
    }
    console.log(sum - max, sum - min);
}

minMax([1, 2, 3, 4, 5]);