function nthEven(n){
    let number;
    let counter = 0;
    for (let i = 0;; i++) {
        if (i % 2 === 0) {
            number = i;
            counter ++;
            if (counter === n) {
                return number
            };
        }
    }
}

console.log(nthEven(1)); // 0, "Wrong Value!");
console.log(nthEven(2)); // 2, "Wrong Value!");
console.log(nthEven(3)); // 4, "Wrong Value!");
console.log(nthEven(100)); // 198, "Wrong Value!");
console.log(nthEven(1298734)); // 2597466, "Wrong Value!");