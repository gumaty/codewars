function rgbToGrayscale(color){
    const array = [...color];

    const r = parseInt((array[1]+array[2]).toLowerCase(),16);
    const g = parseInt((array[3]+array[4]).toLowerCase(),16);
    const b = parseInt((array[5]+array[6]).toLowerCase(),16);

    const Y = Math.round((0.299 * r + 0.587 * g + 0.114 * b)).toString(16);

    if (Y.length === 1) {
        return `#0${Y}0${Y}0${Y}`;
    } else {
        return `#${Y}${Y}${Y}`;
    }

}

console.log(rgbToGrayscale("#FFFFFF").toUpperCase()); // '#FFFFFF')
console.log(rgbToGrayscale("#0000FF").toUpperCase()); // '#1D1D1D')
console.log(rgbToGrayscale("#00FF00").toUpperCase()); // '#969696')
console.log(rgbToGrayscale("#FF0000").toUpperCase()); // '#4C4C4C')
console.log(rgbToGrayscale("#000000").toUpperCase()); // '#000000',

// function rgbToGrayscale(c) {
//     let Y = Math.round(parseInt(c.substr(1,2), 16) * 0.299 + parseInt(c.substr(3,2), 16) * 0.587 + parseInt(c.substr(5,2), 16) * 0.114).toString(16).padStart(2,"0");
//     return `#${Y.repeat(3).toUpperCase()}`;
// }