// Given two numbers m and n, such that 0 ≤ m ≤ n :
//
//     convert all numbers from m to n (inclusive) to binary
// sum them as if they were in base 10
// convert the result to binary
// return as a string
//
// Example
//
// 1, 4  -->  1111010
//
// because:
//     1  // 1 in binary is 1
//     +  10  // 2 in binary is 10
//     +  11  // 3 in binary is 11
//     + 100  // 4 in binary is 100
// -----
//     122  // 122 in binary is 1111010
//


function binaryPyramid(m,n){
    let sum = 0;
    for (let i = m; i <= n; i++) {
        const num = i.toString(2);
        sum += parseInt(num);
    }
    return sum.toString(2);
}


console.log(binaryPyramid(1,4)); // "1111010");
console.log(binaryPyramid(1,6)); // "101001101");
console.log(binaryPyramid(6,20)); // "1110010110100011");
console.log(binaryPyramid(21,60)); // "1100000100010001010100");