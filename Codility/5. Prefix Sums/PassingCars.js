function solution(A) {
    var passing = 0
    var east = 0;
    //var west = 0;
    for(var i in A) {
        if(A[i] == 0) {
            east++;
        } else {
            passing+=east;
        }
    }
    if(passing > 1000000000) passing = -1;
    return passing;
}
var A = [0,1,0,1,1]
console.log(solution(A))
// It's possible to cumulate the passing cars from the east and reset the sum for west cars as shown in here:
// E: east cars, W: west cars, C: total passing cars (cumulative)
// 0,0,1,0,1,1
// 0: 1 * 0                 // E: 1, W: 0       , C: 0
// 1: 1 * 0 + 1 * 0         // E: 2, W: 0       , C: 0
// 2: 1 * 1 + 1 * 1         // E: 2, W: 1->0 (1), C: 2
// 3: 1 * 1 + 1 * 1 + 1 * 0 // E: 3, W: 0    (1), C: 2
// 4: 1 * 2 + 1 * 2 + 1 * 1 // E: 3, W: 1->0 (2), C:2+3 
// 5: 1 * 3 + 1 * 3 + 1 * 2 // E: 3, W: 1->0 (3), C:2+3+3

/*

A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

Array A contains only 0s and/or 1s:

0 represents a car traveling east,
1 represents a car traveling west.
The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

For example, consider array A such that:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the number of pairs of passing cars.

The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

For example, given:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
the function should return 5, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer that can have one of the following values: 0, 1.

*/