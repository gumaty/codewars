//return price without vat
function excludingVatPrice(price){
    if (price === null){
        return -1;
    } else {
        return parseFloat((price /= 1.15).toFixed(2))
    }
}

console.log(excludingVatPrice(230)); // 200.00);
console.log(excludingVatPrice(123)); // 106.96);

// function excludingVatPrice(price) {
//     return (price == null) ? -1 : Math.round((price / 1.15) * 100) / 100;
// }