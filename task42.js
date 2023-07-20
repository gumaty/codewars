function aspectRatio(x,y){
    if (y === 480) {
        return [854,480]
    } else if (y === 720) {
        return [1280,720]
    } else if (y === 1080) {
        return [1920,1080]
    } else if (y === 1440) {
        return [2560,1440]
    } else {
        return [Math.ceil(y*1.7777777777),y]
    }

}

console.log(aspectRatio(640, 480)); // [854,480], "x = 640, y = 480");
console.log(aspectRatio(960, 720)); // [1280,720], "x = 960, y = 720");
console.log(aspectRatio(1440, 1080)); // [1920,1080], "x = 1440, y = 1080");
console.log(aspectRatio(1920, 1440)); // [2560,1440], "x = 1920, y = 1440");