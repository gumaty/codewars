function nearestSq(n){
    const number = Math.sqrt(n);
    return (number - Math.floor(number) < Math.ceil(number) - number) ? Math.pow(Math.floor(number), 2) : number === Math.floor(number) ? Math.pow(number, 2) :
        Math.pow(Math.ceil(number), 2)
}

console.log(nearestSq(1)); //1, "nearestSq(1) = 1");
console.log(nearestSq(2)); //1, "nearestSq(2) = 1");
console.log(nearestSq(10)); //9, "nearestSq(10) = 9");
console.log(nearestSq(111)); //121, "nearestSq(111) = 121");
console.log(nearestSq(9999)); //10000, "nearestSq(9999) = 10000");

// function nearestSq(n){
//     return Math.pow(Math.round(Math.sqrt(n)), 2);
// }