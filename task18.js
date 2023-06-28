function points(games) {
    let sum = 0;
    for (let i = 0; i < games.length; i++) {
        if (parseInt(games[i][0]) > parseInt(games[i][2])) {
            sum += 3
        } else if (parseInt(games[i][0]) === parseInt(games[i][2])) {
            sum += 1
        }
    }
    return sum;
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]));
console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]));
console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]));