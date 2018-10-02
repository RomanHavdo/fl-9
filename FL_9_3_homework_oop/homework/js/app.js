function isValidString(string) {
    return typeof string === 'string' && string.trim().length > 0;
}
function isValidPrice(price) {
    return typeof price === 'number' && price >= 0
        && !Number.isNaN(price) && Number.isFinite(price);
}
function Product({ name, description, price }) {
    if (isValidString(name)) {
        this.name = name;
    } else {
        console.log('Wrong product name');
    }
    this.description = description;
    if (isValidPrice(price)) {
        this.price = price;
    } else {
        console.log('Wrong product price');
    }
    this._logs = [];
    this.cartName = '';

    this.getPrice = function () {
        return this.price;
    }
    this.setPrice = function (newPrice) {
        if (isValidPrice(newPrice) && newPrice > this.price) {
            this._logs.push(`change price from ${this.price} to ${newPrice} on ${new Date()}.`);
            this.price = newPrice;
        } else {
            this._logs.push(`try to change price on ${new Date()}.`);
        }
        return this;
    }

    this.add = function (cart) {
        this.cartName = cart.name;
        this._logs.push(`${this.name}- is added to ${this.cartName} on ${new Date()}.`);
        return this;
    }

    this.removeProduct = function () {
        this._logs.push(`${this.name}- is removed from ${this.cartName} on ${new Date()}.`);
        this.cartName = 'none';
        return this;
    }
    this.getHistory = function () {
        return this._logs;
    }

}

function ShoppingCart({ name, owner, maxSize }) {
    if (isValidString(name)) {
        this.name = name;
    } else {
        console.log('Wrong cart name');
    }
    if (isValidString(owner)) {
        this.owner = owner;
    } else {
        console.log('Wrong owner name');
    }
    this.maxSize = maxSize;
    this.listOfTheCard = [];
    this._logs = [];
    this.isCreated = false;

    this.addNewProduct = function (item) {
        if (!this.isCreated) {
            this._logs.push(`${this.name} was created on ${new Date()}.`);
            this.isCreated = true;
        }

        if (this.listOfTheCard.length < this.maxSize) {
            this.listOfTheCard.push({
                name: item.name,
                description: item.description,
                price: item.price,
                date: new Date()
            });
            this._logs.push(`${item.name}- was added to ${this.name} on ${new Date()}.`);
        } else {
            let indexOfLowwer = 0;
            for (let i = 0; i < this.listOfTheCard.length - 1; i++) {
                if (this.listOfTheCard[i].price < this.listOfTheCard[i + 1].price) {
                    indexOfLowwer = i;
                } else {
                    indexOfLowwer = i + 1;
                }
            }
            this._logs.push(`${this.listOfTheCard[indexOfLowwer].name} was removed from ${this.name} on${new Date()}`);
            this.removeProduct(indexOfLowwer);
            this.listOfTheCard.push({
                name: item.name,
                description: item.description,
                price: item.price,
                date: new Date()
            });
            this._logs.push(`${item.name}- was added to ${this.name} on ${new Date()}.`);

        }
        return this;
    }
    this.removeProduct = function (index) {
        if (index > -1) {
            this._logs.push(`${this.listOfTheCard[index].name}- was removed from ${this.name} on ${new Date()}.`);
            this.listOfTheCard.splice(index, 1);
        } else {
            console.log('Wrong index');
        }
    }

    this.getAvaragePrice = function () {
        let sum = 0;
        for (let i = 0; i < this.listOfTheCard.length; i++) {
            sum += this.listOfTheCard[i].price;
        }
        return sum / this.listOfTheCard.length;
    }
    this.getProducts = function () {
        let products = [];
        for (let i = 0; i < this.listOfTheCard.length; i++) {
            products.push(this.listOfTheCard[i].name);
        }
        return products;
    }

    this.getFormattedListOfProducts = function () {
        let formatedProducts = [];
        for (let i = 0; i < this.listOfTheCard.length; i++) {
            formatedProducts.push(`${this.listOfTheCard[i].name}- is on ${this.name} from ${this.listOfTheCard[i].date}
                Detailed product description: {"color": "${this.listOfTheCard[i].description.color}",
                "size":"${this.listOfTheCard[i].description.size}"}`);
        }
        return formatedProducts;

    }
    this.getTotalPrice = function () {
        let sum = 0;
        for (let i = 0; i < this.listOfTheCard.length; i++) {
            sum += this.listOfTheCard[i].price;
        }
        return sum;
    }
    this.getHistory = function () {
        return this._logs;
    }

}
//Demo
alert('Open console pls');
const banana = new Product({ name: 'banana', description: { color: 'yellow', size: 'medium' }, price: 45 });
const apple2 = new Product({ name: 'apple2', description: { color: 'black', size: 'big' }, price: 15 });

const stevesShopCart = new ShoppingCart({
    name: 'stevesCart',
    owner: 'Steve',
    maxSize: 5
});


stevesShopCart
    .addNewProduct(banana)
    .addNewProduct(banana)
    .addNewProduct(apple2)
    .removeProduct(1);

console.log(
    'Cart history:', stevesShopCart.getHistory(),
    'Product history:', banana.getHistory());

console.log('average price:', stevesShopCart.getAvaragePrice());
console.log('total price:', stevesShopCart.getTotalPrice());

console.log('banana price:', banana.getPrice());
banana.setPrice(20).setPrice(100);

//check free space
stevesShopCart
    .addNewProduct(banana)
    .addNewProduct(banana)
    .addNewProduct(banana)
    .addNewProduct(banana);

console.log('Product history:', banana.getHistory());

console.log(`${stevesShopCart.owner} products:`);
console.log(stevesShopCart.getFormattedListOfProducts());
