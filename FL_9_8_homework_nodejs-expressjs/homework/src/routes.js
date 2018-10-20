const express = require('express');
const handlers = require('./handlers/car');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const router = express.Router();

router.route('/car')
    .get(handlers.getCar)
    .post(jsonParser,handlers.postCar);

router.route('/car/:id')
    .get(handlers.getCarById)
    .put(jsonParser,handlers.putCar)
    .delete(handlers.deleteCar)

module.exports = router;