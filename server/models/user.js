var mongoose = require('mongoose');
var OrderSchema = require('./order');


var UserSchema = new mongoose.Schema({

	firstname: {
		type: String,
		required: [true, 'Required']
	},

	lastname: {
		type: String,
		required: [true, 'Required']
	},

	email: {
		type: String,
		required: [true, 'Required']
	},

	password: {
		type: String,
		required: [true, 'Required']
	},

	_orders: [{
		type: mongoose.Shema.Types.ObjectId, ref: "Order"
	}],


}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema)