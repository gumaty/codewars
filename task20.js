function findOutlier(integers){
    let evenCounter = 0;
    for (let i = 0; i < integers.length; i++) {
        if(integers[i] % 2 === 0) {
            evenCounter++;
        }
    }
    return evenCounter === 1 ? integers.find(item => item % 2 === 0) : integers.find(item => item % 2 !== 0);
}

console.log(findOutlier([0, 1, 2])); //1
console.log(findOutlier([1, 2, 3])); //2
console.log(findOutlier([2,6,8,10,3])); //3
console.log(findOutlier([0,0,3,0,0])); //3
console.log(findOutlier([1,1,0,1,1])); //0


// wersja z metodą filter

// function findOutlier(integers){
//     const even = integers.filter(int => int % 2 === 0);
//     const odd  = integers.filter(int => int % 2 !== 0);
//     return even.length === 1 ? even[0] : odd[0];
// }