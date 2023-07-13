function drawStairs(n) {
    let stairs = "I";
    for (let i = 1; i < n; i++) {
        stairs += "\n";
        for (let j = 1; j <= i; j++) {
            stairs += " ";
        }
        stairs += "I";
    }
    return stairs;
}

console.log(drawStairs(1)); // "I", "The first step has no padding on the left, just an 'I'"));
console.log(drawStairs(3)); // "I\n I\n  I", "There's something wrong with these 3 steps"));
console.log(drawStairs(5)); // "I\n I\n  I\n   I\n    I", "5-step stairs no good"));)