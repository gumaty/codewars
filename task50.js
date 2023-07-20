function oddCount(n){
    let count = 0;
    // let i = 0;
    //
    // while (i < n) {
    //     if (i % 2 !== 0) {
    //         count++;
    //     }
    //     i++;
    // }

    for (let i = 0; i < n; i++) {
        if (i % 2 !== 0) {
            count++;
        }
    }
    return count;
}

console.log(oddCount(15)); // 7, "Oops! Wrong.");
console.log(oddCount(15023)); // 7511, "Oops! Wrong.");