//Task 1
Object.assign = function (target) {
    if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    let to = Object(target);

    for (let index = 1; index < arguments.length; index++) {
        let nextSource = arguments[index];

        if (nextSource !== null || nextSource !== undefined) {
            for (let nextKey in nextSource) {
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }

    return to;
}
//Task 2
function Bot({ name, speed, x, y }) {
    this.name = name;
    this.speed = speed;
    this.x = x;
    this.y = y;
    this.type = 'Bot';
    this.defaultSpeed = speed;
    this.move = function (move) {
        move = move.toLowerCase();
        if (move === 'up' || move === 'down' || move === 'left' || move === 'right') {
            switch (move) {
                case 'up':
                    this.setY(this.getY() + this.getSpeed());
                    break;
                case 'down':
                    this.setY(this.getY() - this.getSpeed());
                    break;
                case 'left':
                    this.setX(this.getX() - this.getSpeed());
                    break;
                case 'right':
                    this.setX(this.getX() + this.getSpeed());
                    break;
                default:
                    console.log('Error!');
            }
        } else {
            console.log('Error!Bad move');
        }
    }
}
Bot.prototype.getName = function () {
    return this.name;
}

Bot.prototype.setName = function (newName) {
    this.name = newName;
}

Bot.prototype.getSpeed = function () {
    return this.speed;
}

Bot.prototype.setSpeed = function (newSpeed) {
    this.speed = newSpeed;
}

Bot.prototype.getX = function () {
    return this.x;
}

Bot.prototype.setX = function (newX) {
    this.x = newX;
}
Bot.prototype.getY = function () {
    return this.y;
}

Bot.prototype.setY = function (newY) {
    this.y = newY;
}
Bot.prototype.getDefaultSpeed = function () {
    return this.defaultSpeed;
}
Bot.prototype.getType = function () {
    return this.type;
}

Bot.prototype.getCoordinates = function () {
    return { x: this.getX(), y: this.getY() }
}

Bot.prototype.setCoordinates = function (newX, newY) {
    this.x = newX;
    this.y = newY;
}

Bot.prototype.showPosition = function () {
    console.log(`I am ${this.getType()} ${this.getName()}. I am located at ${JSON.stringify(this.getCoordinates())}.`);
}
Racebot.prototype = Bot.prototype;
Speedbot.prototype = Bot.prototype;


function Racebot(name, speed, x, y) {
    Bot.call(this, name, speed, x, y);
    this.previousMove = 'none';
    this.type = 'Racebot';
    this.move = function (move) {
        move = move.toLowerCase();
        if (move === this.getPreviousMove()) {
            this.setSpeed(this.getSpeed() + 1);
        } else {
            this.setSpeed(this.getDefaultSpeed());
        }
        if (move === 'up' || move === 'down' || move === 'left' || move === 'right') {
            switch (move) {
                case 'up':
                    this.setY(this.getY() + this.getSpeed());
                    break;
                case 'down':
                    this.setY(this.getY() - this.getSpeed());
                    break;
                case 'left':
                    this.setX(this.getX() - this.getSpeed());
                    break;
                case 'right':
                    this.setX(this.getX() + this.getSpeed());
                    break;
                default:
                    console.log('Error!');
            }
            this.setPreviousMove(move);
        } else {
            console.log('Error!Bad move');
        }
    }
}
Racebot.prototype.getPreviousMove = function () {
    return this.previousMove;
}
Racebot.prototype.setPreviousMove = function (newMove) {
    this.previousMove = newMove;
}


function Speedbot(name, speed, x, y) {
    Bot.call(this, name, speed, x, y);
    this.type = 'Speedbot';
    this.move = function (move) {
        move = move.toLowerCase();
        if (move === 'up' || move === 'down' || move === 'left' || move === 'right') {
            switch (move) {
                case 'up':
                    this.setY(this.getY() + this.getSpeed());
                    break;
                case 'down':
                    this.setY(this.getY() - this.getSpeed());
                    break;
                case 'left':
                    this.setX(this.getX() - this.getSpeed());
                    break;
                case 'right':
                    this.setX(this.getX() + this.getSpeed());
                    break;
                default:
                    console.log('Error!');
            }
        } else {
            console.log('Error!Bad move');
        }
        if (this.getSpeed() !== this.getDefaultSpeed()) {
            this.setSpeed(this.getSpeed() - 1);
        }
    }
}
Speedbot.prototype.prepareEngine = function () {
    this.setSpeed(this.getSpeed() + 2);
}
