
var mongoose = require('mongoose');
var orders = require('../controllers/orders')
var clients = require('../controllers/clients')
var users = require('../controllers/users')

module.exports = (app, req, res) => {

// routes to clients

	app.get('/clients', clients.index);

	app.post('/new_client', clients.add);

	app.post('/client_login', clients.login);

	app.post('/client_logout', clients.logout);

	
// routes to orders

	app.get('/', orders.index);

	app.post('/add', orders.add);

	app.post('/assign', orders.assign);

// routes to users

	app.get('/users', users.index);

	app.post('/new_user', users.add);

	app.post('/login', users.login);

	app.post('/logout', users.logout);




}