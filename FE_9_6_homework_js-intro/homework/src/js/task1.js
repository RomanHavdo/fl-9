const amountOfMoney = Number(prompt('Amount of money','0'));
const discount = Number(prompt('Discount','0'));
const savedMoney = Number(amountOfMoney * discount / 100);
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
if (isValid(amountOfMoney) || isValid(discount) || discount > 100 ) {
    console.log('Invalid data');
}else {
    console.log(` 
        Price without discount: ${+checkZeros(amountOfMoney)} 
        Discount:  ${+discount }%
        Price with discount:  ${+checkZeros(priceWithDiscount)}
        Saved:  ${+checkZeros(savedMoney)}
    `);
}
