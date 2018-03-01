
var mongoose = require('mongoose');
var orders = require('../controllers/orders')

module.exports = (app, req, res) => {
	
	app.get('/', orders.index);

}