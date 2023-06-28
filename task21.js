function sumDigPow(a, b) {

    const array = [];
    for (let i = a; i <= b; i++) {
        let sum = 0;
        for (let j = 0; j < i.toString().length; j++) {
            sum += Math.pow(parseInt(i.toString()[j]), j+1);
        }
        if (sum === i) {
            array.push(sum);
        }
    }
    return array;
}

console.log(sumDigPow(1,5000));