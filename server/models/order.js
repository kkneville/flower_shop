var mongoose = require('mongoose');
var ClientSchema = require('./client');
var UserSchema = require('./user');


var OrderSchema = new mongoose.Schema({

	_client: {
		type: mongoose.Schema.Types.ObjectId, ref: "Client"
	},

	size: {
		type: String,
		required: [true, 'Required'],
	},

	cost: {
		type: Number,
		required: [true, 'Required'],
	},

	due_date: {
		type: Date,
		required: [true, 'Required'],
		default: Date.now
	},

	colors: [{
		type: String
	}],

	message: {
		type: String
	},

	add_ons: [{
		type: String
	}],

	_florist: {
		type: mongoose.Schema.Types.ObjectId, ref: "User"
	},
	
	florist_name: {
		type: String
	},	
	
	shipping: {
		type: Boolean
	},

	recipient: {
		type: String
	},

	address1: {
		type: String
	},

	address2: {
		type: String
	},

	city: {
		type: String
	},

	state: {
		type: String
	},

	zip: {
		type: Number
	},


				      
}, {timestamps: true});

module.exports = mongoose.model('Order', OrderSchema)
