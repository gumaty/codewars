const text = 'abc';

const solution = (textToCheck, checkedString) => {
    return textToCheck.endsWith(checkedString);
}

console.log(solution(text, 'bc'));
console.log(solution(text, 'd'));