function expandedForm(num) {
    const text = num.toString();
    let newText = '';
    for (let i = 0; i < text.length ; i++){
        if(text[i] !== '0'){
            if(i > 0) {
                newText += " + ";
            }
            newText += text[i];
            for (let j = text.length - 1 -i; j > 0; j--){
                newText += '0'
            }
        }
    }
    return newText;
}

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'