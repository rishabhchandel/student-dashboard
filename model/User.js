'use-strict'
let mongoose = require('mongoose'),
	Schema = mongoose.Schema;

mongoose.model('User', {
	id: {
		type: Number,
	},
	name: {
		type: String,
	},
	ep: {
			type: String
	},
	pwd: {
		type: String
	},
	dob: {
		type: Date
	},
	group: {
		type: String
	},
	school: {
		type: String
	},

	class: {
		type : String
	},

	division: {
		type: String
	},

	status: {
		type: String
	},
	create: {
		type: Date,
		default: Date.now
	},
	update: {
		type: Date,
		default: Date.now
	}
});
