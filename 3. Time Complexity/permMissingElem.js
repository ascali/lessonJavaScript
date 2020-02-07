
function permMissingElem(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var size = A.length;
    var sum = (size + 1) * (size + 2) / 2;
    for (i = 0; i < size; i++) {
        sum -= A[i];
    }
    return sum;
}

function permMissingElems(A) {
    if (!A.length) return 0;
    let n = A.length + 1;
    return (n + (n * n - n) / 2) - A.reduce((a, b) => a + b);
}


var A = [2,3,1,5];
console.log(permMissingElem(A)); //4
console.log(permMissingElems(A)); //4
 

/*
We return 1 if the given array is empty, which is the missing element in an empty array.

Next we calculate the 'ordinary' series sum, assuming the first element in the series is always 1. Then we find the difference between the given array and the full series, and return it. This is the missing element.

The mathematical function I used here are series sum, and last element:

Sn = (n/2)*(a1 + an)
an = a1 + (n - 1)*d
*/

/*
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].

*/