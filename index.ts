function randomNumberLimiter(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const oneThroughSix = randomNumberLimiter(1, 6);
console.log(oneThroughSix);