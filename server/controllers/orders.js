var mongoose = require('mongoose');
var User = require('../models/user');
var Item = require('../models/item');
var Bid = require('../models/bid');
var session = require('express-session');
var sortBy = require('array-sort-by');


module.exports = {

	index: function(req, res){
		console.log("inside of index")
		Order.find({})
			.populate('_florist')
			.exec(function(err, orders){
			if (err) {
				console.log(err)
				console.log("trouble finding orders at index")
				return res.json({error:err.errors})
			}
			else {
				console.log("yo, here are your orders:", orders)				
				return res.json({orders:orders})

			}
		});
	},

}	 		
