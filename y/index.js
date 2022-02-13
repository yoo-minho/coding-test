function sol1(S) {
    const aValues = S.split(/b/);
    const bValues = S.split("a");
    const values = [...aValues, ...bValues].filter(v => v !== '');

    const countJsonByLength = {};
    let max_length = 0;
    values.forEach(v => {
        countJsonByLength[v.length] = (countJsonByLength[v.length] || 0) + 1;
        max_length = max_length < v.length ? v.length : max_length;
    })

    let solutionNum = 0;
    for (let v in countJsonByLength) {
        solutionNum += (max_length - v) * countJsonByLength[v];
    }
    return solutionNum;
}

console.log(
    sol1("aabba"), //1
    sol1("babaa"), //3
    sol1("bbbab") //4
);

//Correctness 100%, Performance 100%