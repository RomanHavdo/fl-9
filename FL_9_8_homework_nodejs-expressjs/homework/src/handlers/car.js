const fs = require('fs');
let data = JSON.parse(fs.readFileSync('../db/data.json'));
const middlewares = require('../middlewares/delete-authorization');

exports.postCar = (req, res) => {
    const car = {
        id: req.body.id,
        brand: req.body.brand,
        model: req.body.model,
        engineVolume: req.body.engineVolume,
        year: req.body.year
    };
    let check = true;
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === car.id || data[i].brand === car.brand || data[i].model === car.model || data[i].engineVolume === car.engineVolume || data[i].year === car.year) {
            check = false;
        }
    }
    if (check === true) {
        data.push(car);
        fs.writeFileSync('../db/data.json', JSON.stringify(data));
        res.status(201).send(car);
    } else {
        res.status(409).json({ "message": "Car already exists." });
    }

}

exports.getCar = (req, res) => {
    res.send(data);
}

exports.getCarById = function (req, res) {
    const car = data.find(function (car) {
        return car.id === Number(req.params.id);
    });
    if (car !== undefined) {
        res.send(car);
    } else {
        res.status(404).send('Not found');;
    }

};

exports.putCar = (req, res) => {
    const car = data.find(function (car) {
        return car.id === Number(req.params.id);
    });
    if (car !== undefined) {
        car.brand = req.body.brand;
        car.model = req.body.model;
        car.engineVolume = req.body.engineVolume;
        car.year = req.body.year;
        fs.writeFileSync('../db/data.json', JSON.stringify(data));
        res.send(car);
    } else {
        res.status(404).send('Not found');;
    }
}

exports.deleteCar = [
    middlewares.checkAuthorization,
    (req, res) => {
        const message = {
            message: 'The car has been successfully removed'
        };
        const car = data.find(function (car) {
            return car.id === Number(req.params.id);
        });
        if (car === undefined) {
            res.status(404).send('Not found');;
        }
        data = data.filter(function (car) {
            return car.id !== Number(req.params.id);
        })
        if (car !== undefined) {
            res.send(message);
            fs.writeFileSync('../db/data.json', JSON.stringify(data));
        }
    }
]

