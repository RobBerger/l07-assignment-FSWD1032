import { rollDice, flipCoin } from './randomGenerator';

let dieArr: number[] = [ ];
for (let i = 0; i < 10; i++) {
    dieArr.push(rollDice());
}
console.log(dieArr);


let coinArr: Array<string> = [ ];
let headsCount: number = 0;
let tailsCount: number = 0;
for (let i = 0; i < 50; i++) {
    let thisFlip = flipCoin();
    coinArr.push(thisFlip);
    if (thisFlip === 'Heads') {
        headsCount = headsCount + 1;
    } else {
        tailsCount = tailsCount + 1;
    }
}
console.log(coinArr);
console.log('Number of heads: ' + headsCount);
console.log('Number of tails: ' + tailsCount);