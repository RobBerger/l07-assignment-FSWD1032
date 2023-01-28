// I had to bypass the random library to get this to work.
// Spent hours trying to troubleshoot ESM errors.
// The library dosn't work at all like the colors one did in the video.
// Did not want to turn in late waiting for Wills avalability to help.

export function rollDice() {
    function randomNumberLimiter(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const oneThroughSix = randomNumberLimiter(1, 6);
    return oneThroughSix
}

export function flipCoin() {
    function randomNumberLimiter(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function coinSide(): string {
         if (randomNumberLimiter(0, 1) === 0) {
             return "Heads"
         } else {
             return "Tails"
         }
    }
    return coinSide()
    }