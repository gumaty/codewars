function sumStr(a,b) {

    return ((a === '' ? 0 : parseInt(a))+(b === '' ? 0 : parseInt(b))).toString();
}

console.log(sumStr("4","5")); // "9");
console.log(sumStr("34","5")); // "39");
console.log(sumStr("","8")); // "39");