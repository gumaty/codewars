function rgb(r, g, b){
    const convert = color => {
        if (color < 0) {color = 0} else if (color > 255) {color = 255};
        let hex = color.toString(16).toUpperCase();
        if(hex.length === 1) {hex = `0${hex}`}
        return hex;
    }
    return `${convert(r)}${convert(g)}${convert(b)}`;
};

console.log(rgb(255, 255, 255))
console.log(rgb(255, 255, 300))
console.log(rgb(1,1,1))
console.log(rgb(148, 0, 211))