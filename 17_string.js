function solution(s) {
    let answer = true

    if ((s.length === 4 || s.length === 6) && s.split("").every((c) => !isNaN(c))) {
        answer = true
    } else {
        answer = false
    }
    return answer
}

console.log(solution("a1234"))
console.log(solution("1234"))