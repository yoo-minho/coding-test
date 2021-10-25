console.log(solution(9));
console.log(solution(99));
console.log(solution(999));
console.log(solution(9999));
console.log(solution(99999));
console.log(solution(100));

function solution(n) {
    //return solution1(n); //효율성테스트 통과하지 못함
    return solution2(n); //효율성테스트 통과
}

function solution1(n) {
    const count = getBinaryNumberCount(n);
    return getArray(n).filter(v => count === getBinaryNumberCount(v)).length;
}

function solution2(n) {

    //n - 본래 자연수, n2 - n을 이진수화한 수
    const getZeros = (n) => getArray(n).map(() => "0").join("");
    const getLastOneIndex = (n2) => n2.length - String(n2).lastIndexOf(1) - 1;
    const getBinaryNumberCount = (n2) => n2.match(/1/g) && n2.match(/1/g).length;

    const n2 = n.toString(2);
    const binaryNumberCount = getBinaryNumberCount(n2); //자연수 n의 이진법 1의 개수
    var zeroStartCaseCount = getCombinationsCount(n2.length - 1, binaryNumberCount); //0으로 시작하는 동일한 자리수 경우
    var oneStartCaseCount = getOneStartLessThanN(n); //1로 시작하는 동일한 자리수 경우
    return zeroStartCaseCount + oneStartCaseCount;

    function getOneStartLessThanN() {
        let _n2 = String(n2);
        let count = 0;
        for (var i = 0; i < binaryNumberCount - 1; i++) {
            count += getCombinationsCount(getLastOneIndex(_n2), i + 1);
            var temp = _n2.substring(0, _n2.lastIndexOf(1));
            _n2 = temp + getZeros(_n2.length - temp.length);
        }
        return count;
    }

    function getCombinationsCount(totalNumber, selectNumber) {
        var numerator = [];
        var denominator = [];
        for (var i = 0; i < selectNumber; i++) {
            numerator.push(totalNumber - i);
            denominator.push(selectNumber - i);
        }
        return (numerator.reduce((a, b) => a * b)) / (denominator.reduce((a, b) => a * b));
    }
}

function getBinaryNumberCount(n2) {
    const mat = n2.match(/1/g);
    return n2.match(/1/g) && n2.match(/1/g).length;
}

function getArray(length) {
    return Array.from({length}, (v, i) => i);
}

/**
 *
 * function solution(n) {
    //return solution1(n);
    return solution2(n);
}

 function solution2(n) {
    var digits = n.toString(2).length;
    var count = getBinaryNumberCount(n); //자연수n의 이진법 1의 개수
    var zeroStart = getCombinationsCount(digits - 1, count); //0으로 시작하는 동일한 자리수 경우
    var small = count222(n);
    return zeroStart + small;
}

 function solution1(n) {
    var count = getBinaryNumberCount(n);
    return getArray(n).filter(v => count === getBinaryNumberCount(v)).length;
}

 function getBinaryNumberCount(v) {
    const mat = v.toString(2).match(/1/g);
    return mat && mat.length;
}

 function getArray(length) {
    return Array.from({length}, (v, i) => i);
}

 function count222(number) {
    var _num2 = String(number.toString(2));
    var count = getBinaryNumberCount(number); //자연수n의 이진법 1의 개수
    var ttCount = 0;
    for (var i = 0; i < count - 1; i++) {
        ttCount += getCombinationsCount(findIndex(_num2), i + 1);
        var temp = _num2.substring(0, _num2.lastIndexOf(1));
        _num2 = temp + getZero(_num2.length - temp.length);
    }
    return ttCount;

    function getZero(n) {
    return getArray(n).map(() => "0").join("");
}

function findIndex(num2){
    num2 = String(num2)
    var digits = num2.length;
    return digits - num2.lastIndexOf(1) - 1;
}
}

 function getCombinationsCount(totalNumber, selectNumber) {
    var numerator = [];
    var denominator = [];
    for (var i = 0; i < selectNumber; i++) {
        numerator.push(totalNumber - i);
        denominator.push(selectNumber - i);
    }
    return (numerator.reduce((a, b) => a * b)) / (denominator.reduce((a, b) => a * b));
}
 */

