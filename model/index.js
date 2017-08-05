'use-strict'
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/userdata');

require('./User');
require('./Blog');
