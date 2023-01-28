"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollDice = void 0;
function rollDice() {
    function randomNumberLimiter(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const oneThroughSix = randomNumberLimiter(1, 6);
    return oneThroughSix;
}
exports.rollDice = rollDice;
