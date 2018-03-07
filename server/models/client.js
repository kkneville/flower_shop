var mongoose = require('mongoose');
var OrderSchema = require('./order');


var ClientSchema = new mongoose.Schema({

	firstname: {
		type: String,
		required: [true, 'Required']
	},

	lastname: {
		type: String,
		required: [true, 'Required']
	},

	company: {
		type: String
	},

	email: {
		type: String,
		required: [true, 'Required']
	},

	password: {
		type: String,
		required: [true, 'Required']
	},

	phone: {
		type: Number,
		required: [true, 'Required']
	},

	_orders: [{
		type: mongoose.Schema.Types.ObjectId, ref: "Order"
	}],

})