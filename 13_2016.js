function solution(a, b) {
    let answer = ''
    let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    let date = new Date(`2016, ${a}, ${b}`)
    answer = week[date.getDay()]
    return answer
}

console.log(solution(5, 24))