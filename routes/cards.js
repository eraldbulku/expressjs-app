const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple'
];

router.get('/:id', (req, res) => {
	res.render('card', {
		prompt: cards[req.params.id].question, 
		hint: cards[req.params.id].hint,
		colors
	});
});

module.exports = router;
