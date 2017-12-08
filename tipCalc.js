let billTotal= 675;
let partySize= 4;
let tipPercentage= 20;

let totalTip= billTotal*(tipPercentage/100);
let tipPerPerson=totalTip/partySize;
console.log(`The total tip per person is: $${tipPerPerson}.`);
