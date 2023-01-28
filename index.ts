import { rollDice, flipCoin } from './randomGenerator';

let dieArr: number[] = [ ];
for (let i = 0; i < 10; i++) {
    dieArr.push(rollDice());
}
console.log(dieArr);


let coinArr: Array<string> = [ ];
for (let i = 0; i < 50; i++) {
    coinArr.push(flipCoin());
}
console.log(coinArr);