var mongoose = require('mongoose');
var session = require('express-session');
var sortBy = require('array-sort-by');

var Client = require('../models/client');


module.exports = {

	index: function(req, res){
		console.log("inside of clients/index")
		Client.find({})
			.populate('_orders')
			.exec(function(err, clients){
			if (err) {
				console.log(err)
				console.log("trouble finding clients at index")
				return res.json({error:err.errors})
			}
			console.log("yo, here are your clients:", clients)				
			return res.json({clients:clients})
		});
	},

	add: function(req, res){
		console.log("inside of clients/add")
		var client = new Client(req.body)
		client.save(function(err){
			if(err){
				console.log('trouble saving client')
				return res.json({error: err.errors})
			}
			console.log('new client saved')
			return res.json({status: "success", client: client._id})
		}) 
	},


	login: function(req, res){
		console.log("inside of clients/login")
		Client.findOne({email: req.body.email}, function(err, client){
			if (err){
				console.log('error finding client at clients/login')
				return res.json({error:err.errors})
			}
			console.log("here is your client: ", client)
			if (client.password == req.body.password) {
				console.log("password matches")
				session.client_id = client._id
				return res.json({status:"logged-in", client:client})
			}
			console.log('password does not match')
			return res.json({error:"password does not match"})
		})
	},

	logout: function(req, res){
	        if ('client_id' in session) {
	            delete session['client_id'];
	            return res.json({status:"logged-out"})
	        }
	},

}	