function solution(s) {
    let a = 0
    let b = 0

    s = s.toLowerCase()

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'p') {
            a += 1
        } else if (s[i] === 'y') {
            b += 1
        }
    } if (a === b) {
        return true
    } else {
        return false
    }
}

console.log(solution("pPoooyY"))
console.log(solution("Pyy"))