console.log(solution(9));
console.log(solution(99));
console.log(solution(999));
console.log(solution(9999));
console.log(solution(99999));

function solution(n){
    return solution1(n) + "/" + solution2(n);
}

function solution1(n) {
    var count = getBinaryNumberCount(n);
    return getArray(n).filter(v => count === getBinaryNumberCount(v)).length;
}

function solution2(n) {

    /**
     1. n = 9
     2. 이진법수 = 1001, 전체자리수 : 4, 1의개수 : 2
     3. 전체자리수 - 1 = 세자리의 1의개수가 2개인 경우 => 3C2 (수학 조합)
     4. 네자리수의 2개인 경우 => ?
     */
    var digits = n.toString(2).length;
    var count = getBinaryNumberCount(n); //자연수n의 이진법 1의 개수

    var num1 = getCombinationsCount(digits - 1, count);
    var num2 = getCombinationsCount(digits, count - 1); //이중에 걸러야하는데,,
    return num1 + num2 + "/" + n.toString(2);
}

function getArray(length) {
    return Array.from({length}, (v, i) => i)
}

function getMax(_digits, _count) {
    var _max = 0;
    var _digits = digits - 1;
    for (var i = 0; i < _count; i++) {
        _max += 2 ** (_digits - 1);
        _digits = _digits - 1;
    }
    return _max;
}

function getBinaryNumberCount(v) {
    return v.toString(2).match(/1/g)?.length;
}

function getCombinationsCount(totalNumber, selectNumber) {
    //3C2
    var a = totalNumber;
    var b = selectNumber;
    var result = 1;
    for (var i = 0; i < selectNumber; i++) {
        result = result * (a / b);
        a = a - 1;
        b = b - 1;
    }
    return result;
    //return getCombinations(Array.from({length:totalNumber}, (v,i) => i), selectNumber).length;
}

function getCombinations(array, selectNumber) {
    const results = [];
    if (selectNumber === 1) {
        return array.map((element) => [element]);
    }
    array.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });
    return results;
}