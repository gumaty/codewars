function sumOfDifferences(arr) {
    const temp = arr.sort((a,b) => (b-a))
    let sum = 0;
    let diff = 0;
    if (temp.length) {
        for (let i = 1; i < temp.length; i++) {
            diff = temp[i-1]-temp[i];
            sum += diff;
        }
        return Math.abs(sum);
    } else {
        return 0
    }
}

console.log(sumOfDifferences([1, 2, 10])); //9);
console.log(sumOfDifferences([-3, -2, -1])); //2);
console.log(sumOfDifferences([5,-2,-10,-12,0,11,-5,-1,-7,7,11,-8,1,-11,5,-8,0,12,-4,-3,-16,-3,-10,0,2,-4,12])); //28);
console.log(sumOfDifferences([-21,-23,3,-9,-6,8,-27,-17,-27,5,-22,12,-26,-9,8,-20,-8,-11])); //39);

