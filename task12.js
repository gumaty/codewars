const number = 153;

function narcissistic(value) {
    const n = value.toString().length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += Math.pow(parseInt(value.toString()[i]), n);
    }
    return value === sum;
}

console.log(narcissistic(153));
console.log(narcissistic(7));
console.log(narcissistic(13));