const express = require('express');
const router = express.Router();

const questionAnswers = {
	"What is a white hat hacker?" : "An ethical hacker!"
}

function checkCorrectAnswer(question, answer){
	if(questionAnswers[question] === answer.trim()) {
   		return true;
 	}
	return false;
}

router.post('/question', (req, res) => {
	const { question, answer } = req.body;
	if(checkCorrectAnswer(question, answer)) {
   		res.status(200).send({ correct: "true" });
 	} else {
   		res.status(200).send({ correct: "false" });
	}
});

module.exports = router;
