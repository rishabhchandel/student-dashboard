'use-strict'
let mongoose = require('mongoose'),
	User = mongoose.model('User');

exports.route = function(pubRoute, securedRoute, adminRoute) {
	pubRoute.post('/signin', signin);
	pubRoute.post('/signup', signup);
	pubRoute.put('/users/:id', updateUser);
	pubRoute.get('/users', getAllUsers);
	pubRoute.delete('/users/:id', deleteUsers);
};


 function updateUser(req, res) {
	try {
		if(req.params.id != "undefined"){
			User.findOneAndUpdate({_id: req.params.id},req.body, err=>console.log("err ", err));
		}else {
			new User(req.body).save(err=>console.log(err))
		}
		res.sendStatus(200)
	} catch (e) {
		console.log("err in update user", e.message);
	} finally {}
}

 function deleteUsers(req, res) {
	try {
		console.log(req.params.id);
		User.findOneAndRemove({_id: req.params.id},err=>console.log("err in delete user ", err));
		res.sendStatus(200)
	} catch (e) {
		console.log("err in delete user ",e.message);
	} finally {}
}

async function getAllUsers(req, res) {
	try {
		console.log(req.url);
		var data = await User.find({});
		console.log("\n\n\ndata", data);
		res.send(data);
	} catch (e) {
		console.log("err in getAllUsers user ",e.message);
	} finally {}
}

async function signup(req, res) {
	try {
		await new User(req.body).save()
		res.send('Succesfully signup');
	} catch (e) {

		console.log("err in save user user ", e.message);
	}
}

async function signin(req, res) {
	try {
		let ep = req.body.ep
		let pwd = req.body.pwd
		var data;

		if(ep){
			data = await User.find({ep: ep,pwd: pwd });
			console.log("\n\n",data);
			if(data.length){
				res.sendStatus(200);
			} else {
				res.sendStatus(400);
			}
		} else {
			res.sendStatus(400);
		}

	} catch (e) {
		console.log("err in signin ", e.message);
	}
}
