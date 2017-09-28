let express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
const path = require('path');
require('./model')

pubRouter = express.Router();
securedRoter = express.Router();

require('./controller/blog.js').route(pubRouter, securedRoter);
require('./controller/user.js').route(pubRouter, securedRoter);

app.use(function(req, res, next){
    console.log(req.url);
   next();
});
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('',pubRouter);
app.listen(80);
