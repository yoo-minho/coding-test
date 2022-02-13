function sol4(N) {
    let arr = [];

    if (N % 2 === 1) {
        arr.push(0);
        for (let i = 1, l = N / 2; i < l; i++) {
            arr = [...arr, -i, +i];
        }
    } else {
        let rotate = -1;
        for (let i = 0, l = N / 2; i < l; i++) {
            arr = [...arr, rotate * (i + 1), rotate * (N - i)];
            rotate = rotate * -1;
        }
    }

    return arr;
}

console.log(sol4(4)); //[-1,-4,2,3]
console.log(sol4(3)); //[-1,0,1]
console.log(sol4(5)); //[-2,-1,0,1,2]

//Correctness 50%