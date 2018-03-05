var mongoose = require('mongoose');
var session = require('express-session');

var User = require('../models/user');
var Order = require('../models/order');
var Client = require('../models/client');


module.exports = {

	index: function(req, res){
		console.log("inside of users/index")
		User.find({})
			.populate('_orders')
			.exec(function(err, users){
			if (err) {
				console.log(err)
				console.log("trouble finding users at index")
				return res.json({error:err.errors})
			}
			console.log("yo, here are your users: ", users)				
			return res.json({users:users})
		})
			
	},

	add: function(req, res){
		console.log('inside of users/add')
		var user = new User(req.body)
		user.save(function(err){
			if (err){
				console.log('error saving order')
				return res.json({error: err.errors})
			}
			console.log('user saved')
			return res.json({user: user})
		})	
	},

	login: function(req, res){
		console.log("inside of users/login")
		User.findOne({email: req.body.email}, function(err, user){
			if (err){
				console.log('error finding user at users/login')
				return res.json({error:err.errors})
			}
			console.log("here is your user: ", user)
			if (user.password == req.body.password) {
				console.log("password matches")
				return res.json({status:"success", user:user})
			}
			console.log('password does not match')
			return res.json({error:"password does not match"})
		})
	}

}