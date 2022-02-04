function solution(a, b) {
    let answer = 0;
    let num = []

    if (a === b) {
        answer = a
    } else {
        num.push(a, b)
        num.sort((a, b) => (a - b))

        for (let i = num[0]; i < num[1] + 1; i++) {
            answer += i
        }
    }
    return answer;
}

console.log(solution(3, 5))