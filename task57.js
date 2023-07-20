function ensureQuestion(s) {
    const array = s.split("");
    if (array[array.length-1] !== "?") {
        array.push("?")
    }
    return array.join("");
}

console.log(ensureQuestion("")); //"?","Expected: '?'");
console.log(ensureQuestion("Yes")); //"Yes?","Expected: '?'");
console.log(ensureQuestion("No?")); //"No?","Expected: '?'");

// function ensureQuestion(s) {
//     return s.endsWith("?")?s:s+"?"
// }