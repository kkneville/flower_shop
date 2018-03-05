// this page is an old example from a previous project, here for the purpose of formatting assistance only


var mongoose = require('mongoose');
var BidSchema = require('./bid');

var ItemSchema = new mongoose.Schema({

	name: {
		type: String,
		required: [true, 'Required'],
		minlength: 5
	},

	highest_bidder: {
		type: String,
		default: "None"
	},

	highest_bid: {
		type: Number,
		default: 0
	},

	_bids: [{
		type: mongoose.Schema.Types.ObjectId, ref: "Bid"
	}],


}, {timestamps: true});

module.exports = mongoose.model('Item', ItemSchema)
