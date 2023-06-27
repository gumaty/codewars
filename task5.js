const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers){
    let string = '';
    for (let i = 0; i < numbers.length; i++){
        if (i === 0) {
            string += `(${numbers[i]}`;
        } else if(i === 3){
            string += `) ${numbers[i]}`;
        }else if(i === 6){
            string += `-${numbers[i]}`;
        } else {
            string += `${numbers[i]}`;
        }

    }
    return string;
}

console.log(createPhoneNumber(array));