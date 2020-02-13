// https://codility.com/programmers/lessons/4-counting_elements/perm_check/
// Check whether array A is a permutation.

function PermCheck(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    
    var N = A.length,
        sum = 0,
        prog,
        myset;
        
    sum = A.reduce(function(sum, elem) {
        return sum + elem;
    }, 0);
  
    myset = new Set(A);
    
    prog = ((1 + N) * N) / 2;
    
    if (sum == prog && A.length == myset.size) {
        return 1;
    }
    return 0;
}

function solution(arr) {
  var myArray = arr.sort();
  var maxNumberInArray = Math.max(myArray);

  for(var i = 0; i < myArray.length; i++) {
    if(myArray[i].toString() === (i+1).toString()) {
      // array contains a permutation  
    } else {
      return 0;
    }
  }
  return 1;
}

solution([4, 1, 3, 2]);

var A = [4, 1, 3, 2];
console.log(A);
console.log(new Set(A))
console.log(PermCheck(A))

/*
A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

function solution(A);

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].

*/