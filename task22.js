function twiceAsOld(dadYearsOld, sonYearsOld) {
    let difference = dadYearsOld - sonYearsOld;
    let age = 0;
    for (let i = 0;;i++){
        if (age * 2 === difference) return Math.abs(age - sonYearsOld);
        difference++;
        age++;
    }
}

console.log(twiceAsOld(90, 70));

console.log(twiceAsOld(36,7)); // 22);
console.log(twiceAsOld(55,30)); //5);
console.log(twiceAsOld(42,21)); //0);
console.log(twiceAsOld(22,1)); //20);
console.log(twiceAsOld(29,0)); //29);

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     return Math.abs(dadYearsOld - 2 * sonYearsOld);
// }