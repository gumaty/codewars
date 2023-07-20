function invert(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] -= 2*array[i];
    }
    return array;
}

console.log(invert([1,2,3,4,5])); // [-1,-2,-3,-4,-5]);
console.log(invert([1,-2,3,-4,5])); // [-1,2,-3,4,-5]);
console.log(invert([])); // []);
console.log(invert([0])); // [0]);

// function invert(array) {
//     return array.map( x => x === 0 ? x : -x);
// }