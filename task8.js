const array1 = [0, 0, 0, 1];
const array2 = [0, 0, 1, 0];
const array3 = [0, 1, 0, 1];
const array4 = [1, 0, 0, 1];
const array5 = [0, 0, 1, 0];
const array6 = [0, 1, 1, 0];
const array7 = [1, 1, 1, 1];
const array8 = [1, 0, 1, 1];
const array9 = [1, 0, 1, 0, 1, 1];
const binaryArrayToNumber = arr => {
    let counter = 0;
    let number = 0;
    let result = 0;
    for (let i = arr.length-1; i >= 0; i--) {
        if (arr[i] === 0) {
            result = 0
        } else {result = Math.pow(arr[i]*2, counter);}
        number += result;
        counter++;
    }
    return number;
};

console.log(binaryArrayToNumber(array1));
console.log(binaryArrayToNumber(array2));
console.log(binaryArrayToNumber(array3));
console.log(binaryArrayToNumber(array4));
console.log(binaryArrayToNumber(array5));
console.log(binaryArrayToNumber(array6));
console.log(binaryArrayToNumber(array7));
console.log(binaryArrayToNumber(array8));
console.log(binaryArrayToNumber(array9));