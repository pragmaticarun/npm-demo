
var express = require("express");

var router = express.Router();
var ctrl = require('../controllers/json.ctrl')

router
    .route('/json')
    .get(ctrl.json)

router
    .route('/json/:hotelId')
    .get(ctrl.json)
module.exports = router;

