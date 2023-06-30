function power(x,y){
    let power = 1;
    for (let i = 1; i <= y; i++) {
        power *= x;
    }
    return power;
}

console.log(power(1,701270)); // 1);
console.log(power(2,2)); // 4);
console.log(power(3,2)); // 9);
console.log(power(-1,40)); // 1);