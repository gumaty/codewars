const countSheep = function (num){
    let string = '';
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            string += `${i} sheep...`
        }
    }
    return string;
}


console.log(countSheep(4));
console.log(countSheep(-1));
console.log(countSheep(10));