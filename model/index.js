'use-strict'
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/userdata');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
mongoose.set('debug', true);
require('./User');
