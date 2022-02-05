function solution(price, money, count) {
    let answer = 10
    let total = 0

    for (let i = 1; i < count + 1; i++) {
        total += price * i
    }

    answer = total - money

    if (answer > 0) {
        answer
    } else {
        answer = 0
    }
    return answer
}

console.log(solution(3, 20, 4))