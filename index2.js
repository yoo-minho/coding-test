/**
 * Q. 모든 알파벳을 사용하는 문자열을 완벽한 문자열이라고 합니다.
 * 예를 들어서 "His comments came after Pyongyang announced
 * it had a plan to fire four missiles near the US territory of Guam."
 * 라는 문장이 주어 진다면 이 문장에는 b,j,k,q,v,w,x,z를 사용하지 않기 때문에 완벽한 문자열이 아닙니다.
 *
 * 반면에 "Jackdaws love my big sphinx of quartz"라는 문자열은
 * 모든 알파벳을 사용하고 있으므로 완벽한 문자열입니다.
 * 문자열 sentence가 매개변수로 주어질 때,
 * 완벽한 문자열을 만드는 데 필요한 문자들을 return 하도록 solution함수를 완성해주세요.
 */
const alphabet = "abcdefghijklmnopqrstuvwxyz";

console.log(solution("His comments came after Pyongyang announced it had a plan to fire four missiles near the US territory of Guam.")); //bjkqvwxz
console.log(solution("Jackdaws love my big sphinx of quartz")); //perfect

function solution(sentence) {
    return solution1(sentence);
}

function solution1(sentence) {
    let _alphabet = alphabet;
    sentence.replace(/[a-zA-Z]/ig, function (v) {
        for (let a of alphabet) {
            if (v.toLowerCase() === a) {
                _alphabet = _alphabet.replace(a, "");
                return;
            }
        }
    })
    return _alphabet || "perfect";
}