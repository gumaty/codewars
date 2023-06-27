const uniqueInOrder = iterable => {
    const tempArray = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i-1]) {
            tempArray.push(iterable[i])
        }
    }
    return tempArray;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1,2,2,3,3]));