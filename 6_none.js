function solution(numbers) {
    let answer = 0

    for (let i = 0; i < 10; i++) {
        answer += i
    } for (let j = 0; j < numbers.length; j++) {
        answer -= numbers[j]
    }
    return answer
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]))
console.log(solution([5, 8, 4, 0, 6, 7, 9]))