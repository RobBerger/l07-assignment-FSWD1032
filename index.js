"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randomGenerator_1 = require("./randomGenerator");
let dieArr = [];
for (let i = 0; i < 10; i++) {
    dieArr.push((0, randomGenerator_1.rollDice)());
}
console.log(dieArr);
let coinArr = [];
let headsCount = 0;
let tailsCount = 0;
for (let i = 0; i < 50; i++) {
    let thisFlip = (0, randomGenerator_1.flipCoin)();
    coinArr.push(thisFlip);
    if (thisFlip === 'Heads') {
        headsCount = headsCount + 1;
    }
    else {
        tailsCount = tailsCount + 1;
    }
}
console.log(coinArr);
console.log('Number of heads: ' + headsCount);
console.log('Number of tails: ' + tailsCount);
