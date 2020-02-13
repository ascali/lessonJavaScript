function solution(A) {
        var min = 1;
        A.sort(function(a,b){
           // Sort the array explicit way
           return a - b; 
        });

        for (var i in A) {
            if (A[i] > -1 && A[i] == min) {
                    min++;
            }
        }

        return min;
}

// var A = [1, 3, 6, 4, 1, 2];
// var A = [1, 2, 3];
var A = [-1,-3];
console.log(solution(A))

/*

This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].


*/