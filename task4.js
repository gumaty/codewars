const array1 = [0];
const array2 = [0, 1, 4];
const array3 = [0, -1, -5];
const array4 = [];

function oddOrEven(array) {
    let arraySum = [];
    if (array.length) {
        arraySum = array.reduce((total, num) => total + num);
    }
    return arraySum %2 === 0 ? "even" : "odd";
}

console.log(oddOrEven(array1));
console.log(oddOrEven(array2));
console.log(oddOrEven(array3));
console.log(oddOrEven(array4));