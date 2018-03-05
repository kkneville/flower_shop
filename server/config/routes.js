
var mongoose = require('mongoose');
var orders = require('../controllers/orders')

module.exports = (app, req, res) => {

// routes to clients

	app.get('/clients', clients.index);

	app.post('/new_client', clients.add);

	
// routes to orders

	app.get('/', orders.index);

	app.post('/add', orders.add);

	app.post('/assign', orders.assign);

// routes to users

	app.get('/users', users.index);

	app.post('/login', users.login);

	app.post('/new_user', users.add);


}