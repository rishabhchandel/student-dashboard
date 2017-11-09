const express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	path = require('path');

require('./model')

pubRouter = express.Router();
securedRoter = express.Router();

require('./controller/user.js').route(pubRouter, securedRoter);

app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(function(req, res, next) {
	console.log(req.url);
	console.log(req.body);
	next();
});

app.use('', pubRouter);
app.listen(8000);
