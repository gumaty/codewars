function capitalizeWord(word) {
    const array = word.split("")
    array[0] = array[0].toUpperCase();
    word = array.join("");
    return word;
}

console.log(capitalizeWord('word'));// 'Word');
console.log(capitalizeWord('i'));// 'I');
console.log(capitalizeWord('glasswear'));// 'Glasswear');