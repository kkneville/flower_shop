var mongoose = require('mongoose');
var ClientSchema = require('./client');
var UserSchema = require('./user');


var OrderSchema = new mongoose.Schema({

	_client: {
		type: mongoose.Scheme.Types.ObjectId, ref: "Client"
	},

	size: {
		type: String,
		required: [true, 'Required'],
	},

	cost: {
		type: Number,
		required: [true, 'Required'],
	},

	colors: [{
		type: String
	}]

	message: {
		type: String
	},

	add_ons: [{
		type: String
	}],

	_florist: {
		type: mongoose.Schema.Types.ObjectId, ref: "User"
	},


}, {timestamps: true});

module.exports = mongoose.model('Order', OrderSchema)