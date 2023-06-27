const getMiddle = (word) => {

    return word.length % 2 !== 0 ? word[Math.floor(word.length/2)] : word.slice(Math.floor(word.length/2)-1, Math.floor(word.length/2)+1)

}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));