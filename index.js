"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randomGenerator_1 = require("./randomGenerator");
// console.log(flipCoin());
let dieArr = [];
for (let i = 0; i < 10; i++) {
    dieArr.push((0, randomGenerator_1.rollDice)());
}
console.log(dieArr);
let coinArr = [];
for (let i = 0; i < 50; i++) {
    coinArr.push((0, randomGenerator_1.flipCoin)());
}
console.log(coinArr);
