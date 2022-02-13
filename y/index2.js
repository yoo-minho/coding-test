function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}

function sol3(N) {
    let consumedStr = String(N);
    if (consumedStr.length > 8 || N === 100000000) return -1;
    let consumedStrLength = consumedStr.length;
    let resultStr = "";
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0].forEach(value => {
        consumedStr = replaceAll(consumedStr, String(value), "");
        for (let i = 0, valueLength = consumedStrLength - consumedStr.length; i < valueLength; i++) {
            resultStr += String(value);
        }
        consumedStrLength = consumedStr.length;
    })
    return +resultStr;
}

function sol3_1(N) {
    const number = Number(String(N).split("").sort((a, b) => b - a).join(''));
    if (number > 100000000) return -1;
    return number;
}

console.log(sol3(231)); //321
console.log(sol3(97856379)); //99877653

//Correctness 100%, Performance 75%