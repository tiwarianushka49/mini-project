var express=require("express");
var bodyParser=require("body-parser");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/donation');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})

const app=express()


app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/sign_up', function(req,res){
	var name = req.body.name;
	var email =req.body.email;
	var amount = req.body.amount;
	var phone =req.body.phone;

	var data = {
		"name": name,
		"email":email,
		"password":amount,
		"phone":phone
	}
db.collection('users').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully");
			
	});
		
	return res.redirect('donation_success.html');
})


app.get('/',function(req,res){
res.set({
	'Access-control-Allow-Origin': '*'
	});
return res.redirect('donate.html');
}).listen(3000)


console.log("server listening at port 3000");
