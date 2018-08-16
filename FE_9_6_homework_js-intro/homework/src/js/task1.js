const amountOfMoney = Number(prompt('Amount of money'));
const discount = Number(prompt('Discount'));
const savedMoney = Number(amountOfMoney * discount / 100).toFixed(2);
const priceWithDiscount = amountOfMoney - savedMoney;

let isValid = function(number) {
    if (isNaN(number)) {
        return true;
    }
    if (number < 0) {
        return true;
    }
}
let checkZeros = function(number) {
    number = Math.round(number * 100) / 100;
    return number;
}
if (isValid(amountOfMoney) || isValid(discount)) {
    console.log('Invalid data');
}else {
    console.log(` 
        Price without discount: ${+checkZeros(amountOfMoney)} 
        Discount:  ${+discount }%
        Price with discount:  ${+checkZeros(priceWithDiscount)}
        Saved:  ${+checkZeros(savedMoney)}
    `);
}
