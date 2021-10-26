/**
 * Q. 하루 동안 영화 관람객이 예매한 영화들이 무작위로 섞여서 주어집니다.
 * 이때 가장 많이 예매된 순서대로 영화 제목을 정렬하려고 합니다.
 * 관람객이 예매한 영화의 목록 movie가 매개변수로 주어질 때,
 * 가장 많이 예매된 영화 순으로 영화 제목을 정렬하여
 * return 하도록 solution 함수를 완성해 주세요.
 * 예매 수가 같은 영화는 사전 순으로 정렬하세요.
 */

console.log(solution(["spy", "ray", "spy", "room", "once", "ray", "spy", "once"])); //['spy', 'once', 'ray', 'room']

function solution(movie) {
    return solution1(movie);
}

function solution1(movie) {
    const arr = [];
    new Set(movie).forEach(function (v) {
        arr.push({
            name: v,
            count: movie.filter(m => m === v).length
        })
    })
    return arr.sort(byMost).map(v => v.name);

    function byMost(a, b) {
        const diff = b.count - a.count;
        if (diff !== 0) return diff;
        return (b.name < a.name ? 1 : -1);
    }
}