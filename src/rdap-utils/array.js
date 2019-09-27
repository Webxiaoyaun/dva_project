export function randomArr(arr) {
    const len = arr.length
    const index = random(0, len)
    return arr[index]
}

export function random(from = 0, end = 10) {
    const len = end - from
    return parseInt(`${from + Math.random() * len}`, 10)
}