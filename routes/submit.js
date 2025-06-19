const express = require('express');
const router = express.Router();
const wordsDefs = {
	"white hat hacker" : "a hacker who uses their skills for good.",
	"phishing" : "a method of tricking people into giving up personal information.",
	"black hat hacker" : "a hacker who violates computer security for malicious reasons.",
	"javascript": "a programming language commonly used in web development.",
	"firewall" : "a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.",
	"encryption" : "the process of converting information or data into a code, especially to prevent unauthorized access.",
	"social engineering" : "the psychological manipulation of people into performing actions or divulging confidential information.",
	"zero-day exploit" : "a vulnerability in software that is unknown to the vendor and has not been patched.",
	"botnet" : "a network of infected computers that are controlled by a hacker to perform malicious tasks.",
	"sql injection" : "a code injection technique that exploits a security vulnerability in an application's software by manipulating sql queries.",
};

const defWords = {
	"a hacker who uses their skills for good.": "white hat hacker",
	"a method of tricking people into giving up personal information.": "phishing",
	"a hacker who violates computer security for malicious reasons.": "black hat hacker",
	"a programming language commonly used in web development.": "javascript",
	"a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.": "firewall",
	"the process of converting information or data into a code, especially to prevent unauthorized access.": "encryption",
	"the psychological manipulation of people into performing actions or divulging confidential information.": "social engineering",
	"a vulnerability in software that is unknown to the vendor and has not been patched.": "zero-day exploit",
	"a network of infected computers that are controlled by a hacker to perform malicious tasks.": "botnet",
	"a code injection technique that exploits a security vulnerability in an application's software by manipulating sql queries.": "sql injection",
};

const questionAnswers = {
	"what is a white hat hacker?" : "an ethical hacker!"
};

function checkCorrectAnswer(question, answer){
	if(questionAnswers[question] === answer.trim()) {
   		return true;
 	}
	return false;
}

function checkMatch(word, definition){
    const normalizedSelection1 = word.trim().toLowerCase();
    const normalizedSelection2 = definition.trim().toLowerCase();
    
    const normalizedWordsDefs = {};
    const normalizedDefWords = {};
    
    for (const [key, value] of Object.entries(wordsDefs)) {
        const normalizedKey = key.trim().toLowerCase();
        const normalizedValue = value.trim().toLowerCase();
        normalizedWordsDefs[normalizedKey] = normalizedValue;
    }
    
    for (const [key, value] of Object.entries(defWords)) {
        const normalizedKey = key.trim().toLowerCase();
        const normalizedValue = value.trim().toLowerCase();
        normalizedDefWords[normalizedKey] = normalizedValue;
    }
    
    
    if(normalizedWordsDefs[normalizedSelection1] === normalizedSelection2) {
        return true;
    }
    
    if(normalizedDefWords[normalizedSelection1] === normalizedSelection2) {
        return true;
    }
    
    if(normalizedWordsDefs[normalizedSelection2] === normalizedSelection1) {
        return true;
    }
    
    if(normalizedDefWords[normalizedSelection2] === normalizedSelection1) {
        return true;
    }
    
    return false;
}

router.post('/match', (req, res) => {
	const { selection1, selection2 } = req.body;
	if(checkMatch(selection1, selection2)) {
   		res.status(200).send({ correct: "true" });
 	} else {
   		res.status(200).send({ correct: "false" });
	}
});

router.post('/question', (req, res) => {
	const { question, answer } = req.body;
	if(checkCorrectAnswer(question, answer)) {
   		res.status(200).send({ correct: "true" });
 	} else {
   		res.status(200).send({ correct: "false" });
	}
});

module.exports = router;
