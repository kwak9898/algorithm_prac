function solution(n) {
    let answer = Number(String(n).split("").sort().reverse().join(""))
    return answer
}

console.log(solution(118372))