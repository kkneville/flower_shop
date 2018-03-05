var mongoose = require('mongoose');
var session = require('express-session');
var sortBy = require('array-sort-by');

var User = require('../models/user');
var Order = require('../models/order');
var Client = require('../models/client');


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


	add: function(req, res){
		console.log("arrived at orders/add")

		Client.findOne({_id: req.clientId}, function(err, client){
			if (err){
				console.log('error finding client at orders/add')
				return res.json({error: err.errors})
			}
			console.log('here is your client: ', client)
			var order = new Order(req.body)
			order._client = client._id
			order.save(function(err){
				if (err){
					console.log('error saving order')
					return res.json({error: err.errors})
				}
				console.log('order saved')
				client._orders.push(order)
				client.save(function(err){
					if (err){
						console.log('error saving client')
						return res.json({error: err.errors})
					}
					console.log('client saved')
					return res.json({status:"success"})

				})

			})

		})

	},

	assign: function(req, res){
		console.log("arrived at orders/assign")

		Order.findOne({_id: req.orderId}, function(err, order){
			if(err) {
				console.log("error finding order at orders/assign")
				return res.json({error: err.errors})
			}
			console.log('here is your order: ', order)
			User.findOne({_idL req.userId}, function(err, user){
				if(err) {
					console.log('error finding user')
					return res.json({error: err.errors})
				}
				console.log('here is your user: ', user)
				order._florist = user._id
				order.florist_name = user.firstname
				order.save(function(err){
					if(err){
						console.lod('error saving order')
						return res.json({error:err.errors})
					}
					user._orders.push(order)
					user.save(function(err){
						if(err){
							console.lod('error saving user')
							return res.json({error:err.errors})
						}
					})	
				})
			})
		})
	}


}	 		
