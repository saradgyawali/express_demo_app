var express = require('express');
var app = express();

app.get('/', function(req,res) {
	res.send("Hi there, welcome to my assignment!")
})

app.get('/speak/:animal', function(req,res) {
	var animal = req.params.animal.toLowerCase();
	var sounds = {
		cow: 'MOOoo',
		pig: 'Oink Oink',
		cat: 'MmeooW',
		fish: '....',
		dog: 'woof woof'
	}
	var sound = sounds[animal];

	res.send("The " + animal + " says " + sound + ".");
});

app.get('/repeat/:message/:times', function(req,res) {
	var message = req.params.message;
	var times = Number(req.params.times);
	var result = "";

	for (var i=0; i<times; i++) {
		result += message + " ";
	}
	res.send(result);
});

//Page Not Found
app.get('*', function(req,res) {
	res.send("Page not found!")
})
app.get('/')
app.listen(3000, function(req,res) {
	console.log("Server up and running!")
});