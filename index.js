/**
 * Q. 자연수 n을 이진법으로 변환했을 때 나오는 1의 개수를 k라고 했을 때,
 * n보다 작은 자연수 중에서 이진법으로 변환하여
 * 1의 개수가 k인 수가 몇 개 있는지를 return 하도록 solution 함수를 완성해 주세요.
 */

const getBinaryNumberCount = (n2) => n2.match(/1/g) && n2.match(/1/g).length;
const getArray = (length) => Array.from({length}, (v, i) => i);

console.log(solution(9)); //3
console.log(solution(99)); //25
console.log(solution(999)); //35
console.log(solution(9999)); //1547
console.log(solution(99999)); //13101
console.log(solution(100)); //32

function solution(n) {
    //return solution1(n); //효율성테스트 통과하지 못함
    return solution2(n); //효율성테스트 통과
}

function solution1(n) {
    const count = getBinaryNumberCount(n.toString(2));
    return getArray(n).filter(v => count === getBinaryNumberCount(v.toString(2))).length;
}

function solution2(n) {

    //n - 본래 자연수, n2 - n을 이진수화한 수
    const getZeros = (n) => getArray(n).map(() => "0").join(""); //0000
    const getDigitsAfterLastOne = (n2) => n2.length - String(n2).lastIndexOf(1) - 1; //마지막 1 이후의 나머지 자릿수

    const n2 = n.toString(2);
    const binaryNumberCount = getBinaryNumberCount(n2); //자연수 n의 이진법 1의 개수
    const zeroStartCaseCount = getCombinationsCount(n2.length - 1, binaryNumberCount); //0으로 시작하는 동일한 자리수 경우
    const oneStartCaseCount = getOneStartLessThanN(n); //1로 시작하고 n 보다 작은 동일한 자리수 경우
    return zeroStartCaseCount + oneStartCaseCount;

    function getOneStartLessThanN() {
        let _n2 = String(n2);
        let count = 0;
        for (let i = 0; i < binaryNumberCount - 1; i++) {
            count += getCombinationsCount(getDigitsAfterLastOne(_n2), i + 1);
            _n2 = _n2.substring(0, _n2.lastIndexOf(1)) + getZeros(_n2.length - _n2.lastIndexOf(1));
        }
        return count;
    }

    function getCombinationsCount(totalNumber, selectNumber) {
        const multiple = (a, b) => a * b;
        let numerator = [], denominator = [];
        for (let i = 0; i < selectNumber; i++) {
            numerator.push(totalNumber - i);
            denominator.push(selectNumber - i);
        }
        return numerator.reduce(multiple) / denominator.reduce(multiple);
    }
}