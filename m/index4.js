/**
 * Q. 배열의 회전이란 모든 원소를 오른쪽으로 한 칸씩 이동시키고, 마지막 원소는 배열의 맨 앞에 넣는 것을 말합니다.
 * 두 배열 arrA와 arrB가 매개변수로 주어질 때, arrA를 회전해 arrB로 만들 수 있으면 true를,
 * 그렇지 않으면 false를 return 하는 solution 함수를 작성해주세요.
 */

console.log(solution([7, 8, 10], [10, 7, 8])); //true
console.log(solution([4, 3, 2, 1], [5, 4, 1, 2])); //false
console.log(solution([7, 10, 8], [7, 8, 10])); //false
console.log(solution([1, 2, 3, 4, 5, 6], [4, 5, 6, 1, 2, 3])); //true

function solution(arrA, arrB) {
    return solution1(arrA, arrB);
}

function solution1(arrA, arrB) {
    const l = arrA.length;
    let bool = false;
    for (let i = 0; i < l; i++) {
        bool = bool || JSON.stringify(rotate(arrA, i)) === JSON.stringify(arrB)
    }
    return bool;
}

function rotate(arrA, num) {
    const l = arrA.length;
    if (l === num) return arrA;
    if (l < num) num = num - l;
    return arrA.map(function (v, i) {
        if (i + num < l) return arrA[i + num]
        return arrA[i + num - l];
    });
}