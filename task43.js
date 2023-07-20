const replaceDots = function(str) {
    return str.replaceAll('.', '-');
}

console.log(replaceDots("one.two.three")); // "one-two-three", "Sorry, try again :-(");

// return str.replaceAll('.', '-');