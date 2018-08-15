const amountOfMoney = Number(prompt('Amount of money'));
const discount = Number(prompt('Discount'));
const savedMoney = Number(amountOfMoney * discount / 100).toFixed(2);
const priceWithDiscount = amountOfMoney - savedMoney;
let consoleFunc = function(data) {
    return console.log(data);
}

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
    consoleFunc('Invalid data');
}else {
    consoleFunc('Price without discount: ' + checkZeros(amountOfMoney));
    consoleFunc('Discount: ' + discount + '%');
    consoleFunc('Price with discount: ' + checkZeros(priceWithDiscount));
    consoleFunc('Saved: ' + checkZeros(savedMoney));
}