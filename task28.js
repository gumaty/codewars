function humanYearsCatYearsDogYears(humanYears) {
    let age = 0;
    const tempArray = [];
    function calculateAge(number, first, second, others) {
        age = 0;
        for (let i = 1; i <= number; i++) {
            i === 1 ? age += first : i === 2 ? age += second : age += others;
        }
        tempArray.push(age);
    }

    calculateAge(humanYears, 1, 1, 1);
    calculateAge(humanYears, 15, 9, 4);
    calculateAge(humanYears, 15, 9, 5);

    return tempArray;
}

console.log(humanYearsCatYearsDogYears(1)); // [1,15,15]);
console.log(humanYearsCatYearsDogYears(2)); // [2,24,24]);
console.log(humanYearsCatYearsDogYears(10)); // [10,56,64]);