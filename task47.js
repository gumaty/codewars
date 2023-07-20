function isPythagoreanTriple(integers) {

    const sortedArray = integers.sort((a,b) => (a-b));
    return (Math.pow(sortedArray[0], 2) + Math.pow(sortedArray[1], 2)) === Math.pow(sortedArray[2], 2);
}

console.log(isPythagoreanTriple([3, 4, 5])); // true);
console.log(isPythagoreanTriple([3, 5, 9])); // false);
console.log(isPythagoreanTriple([72, 78, 30])); // true);
