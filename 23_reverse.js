function solution(n) {
    let answer = []
    n = String(n).split("").reverse()

    for (let i = 0; i < n.length; i++) {
        answer.push(Number(n[i]))
    }
    return answer
}

console.log(solution(12345))