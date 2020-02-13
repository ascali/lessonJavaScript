const input = [[11,2,4],[4,5,6],[10,8,-12]];

function diagonalDifference(arr) {
    let sum = 0;
    for (var i = 0; i <= arr.length - 1; i++) {
        sum += arr[i][i] - arr[i].reverse()[i];
    }
    return Math.abs(sum);
}
diagonalDifference(input)