function findNextSquare(sq) {
    let firstNumber = Math.sqrt(sq);
    return Number.isInteger(firstNumber) ? (firstNumber+1) * (firstNumber+1) : -1;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
