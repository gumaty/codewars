function warnTheSheep(queue) {
    let counter = 1;
    for (let i = queue.length-1; i >= 0; i--) {
        if (queue[i] === 'wolf' && counter === 1) {
            return "Pls go away and stop eating my sheep";
        } else if (queue[i] === 'wolf' && counter !== 1) {
            return `Oi! Sheep number ${counter-1}! You are about to be eaten by a wolf!`;
        }
        counter++;
    }
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));
console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]));
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]));