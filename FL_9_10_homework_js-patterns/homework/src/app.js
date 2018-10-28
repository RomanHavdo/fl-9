class Store {
    constructor() {
        this.pizzaSlicePrice = function () {
            return 100;
        };
        this.weekendDiscount = 5;
        this.nightDiscount = 20;
        this.bonus = function () {
            return 3;
        };
    }
    buyPizzaSlice() {
        return `Price after discount is ${this.pizzaSlicePrice()} and you have ${this.bonus()} bonuses`;
    }
}

function getDiscount(price) {
    let v = price.pizzaSlicePrice();
    price.pizzaSlicePrice = function () {
        let time = new Date().getHours();
        let day = new Date().getDay();
        if ((time > 23 || time < 7) && (day === 6 || day === 0)) {
            return v - price.nightDiscount - price.weekendDiscount;
        }
        if (time > 23 || time < 7) {
            return v - price.nightDiscount;
        }
    };
}

function setBonus(price) {
    let v = price.bonus();
    price.bonus = function () {
        return Math.round(price.pizzaSlicePrice() / 10) + v;
    };
}

let prices = new Store();
getDiscount(prices); 
setBonus(prices);
prices.buyPizzaSlice();