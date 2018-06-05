const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
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
app.use(cookieParser());

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  const name = req.cookies.username;
  if(name) {
    res.render('index',  { name: name });
  } else {
    res.redirect('/hello');
  }
	
});

app.get('/cards', (req, res) => {
	res.render('card', {prompt: "Who is buried in Grant's tomb?", hint: "Hint", colors});
});

app.get('/hello', (req, res) => {
	res.render('hello');
});

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

app.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');
});

app.listen(3000, () => {
	console.log('App is running on localhost')
});
