const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple'
];

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/cards', (req, res) => {
	res.render('card', {prompt: "Who is buried in Grant's tomb?", hint: "Hint", colors});
});

app.get('/hello', (req, res) => {
	res.render('hello');
});

app.post('/hello', (req, res) => {
  //res.json(req.body);
  res.render('hello', { name: req.body.username });
});

app.listen(3000, () => {
	console.log('App is running on localhost')
});
