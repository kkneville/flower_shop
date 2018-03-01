var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flower_shop');
mongoose.Promise = global.Promise;

var fs = require('fs');
var path = require('path');

var models_path = path.join(__dirname, './../models');