const express = require('express');
const router = express.Router();

// Keep all existing definitions and data structures
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

// Server-side only quest questions and answers - secure storage
const questQuestions = [
    {
        question: "What is a white hat hacker?",
        choices: ["An ethical hacker!", "An unethical hacker!", "A ethically murky hacker!"],
        correct: "An ethical hacker!"
    },
    {
        question: "What is phishing?",
        choices: ["A method of tricking people online", "A type of computer virus", "A programming language"],
        correct: "A method of tricking people online"
    },
    {
        question: "What does a firewall do?",
        choices: ["Protects networks from threats", "Stores passwords safely", "Creates backup files"],
        correct: "Protects networks from threats"
    },
    {
        question: "What is malware?",
        choices: ["Malicious software", "A type of email", "A web browser"],
        correct: "Malicious software"
    },
    {
        question: "What is a password attack?",
        choices: ["Trying to guess someone's password", "Creating strong passwords", "Encrypting passwords"],
        correct: "Trying to guess someone's password"
    },
    {
        question: "What is social engineering?",
        choices: ["Manipulating people for information", "Building social networks", "Programming social media"],
        correct: "Manipulating people for information"
    },
    {
        question: "What is encryption?",
        choices: ["Scrambling data to protect it", "Deleting old files", "Speeding up computers"],
        correct: "Scrambling data to protect it"
    },
    {
        question: "What is a virus?",
        choices: ["Malicious code that spreads", "A helpful program", "A type of hardware"],
        correct: "Malicious code that spreads"
    },
    {
        question: "What is two-factor authentication?",
        choices: ["Extra security with two steps", "Using two passwords", "Having two computers"],
        correct: "Extra security with two steps"
    },
    {
        question: "What is a DDoS attack?",
        choices: ["Overwhelming a server with traffic", "Stealing personal data", "Installing software remotely"],
        correct: "Overwhelming a server with traffic"
    }
];

function checkCorrectAnswer(question, answer){
    const normalizedQuestion = question.trim().toLowerCase();
    const normalizedAnswer = answer.trim().toLowerCase();
    
    // Find the question in our secure server-side array
    const questQuestion = questQuestions.find(q => 
        q.question.trim().toLowerCase() === normalizedQuestion
    );
    
    if (questQuestion && questQuestion.correct.trim().toLowerCase() === normalizedAnswer) {
        return true;
    }
    
    return false;
}

// New endpoint to get question data without answers
router.get('/quest-question/:index', (req, res) => {
    const index = parseInt(req.params.index);
    
    if (index < 0 || index >= questQuestions.length) {
        return res.status(400).json({ error: 'Invalid question index' });
    }
    
    const question = questQuestions[index];
    
    // Send only question and choices, NOT the correct answer
    res.json({
        question: question.question,
        choices: question.choices,
        totalQuestions: questQuestions.length
    });
});

// Keep existing functions and routes
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

// Keep all existing routes and functions...
function gimmeSqlData(database){
    if (database === "users"){
        return `+----+---------------------+--------------------------+--------------+
| id | username            | email                    | password     |
+----+---------------------+--------------------------+--------------+
|  1 | alice123            | alice@flik.host          | password123  |
|  2 | bob_the_builder     | bob@flik.host            | buildit!     |
|  3 | charlie_99          | charlie@flik.host        | charliePass  |
|  4 | deltaForce          | delta@flik.host          | delta$ecure  |
|  5 | eve_hacks           | eve@flik.host            | evepass123   |
|  6 | frank_underground   | frank@flik.host          | fr@nkPwd2025 |
|  7 | grace_note          | grace@flik.host          | gRaceIt!     |
|  8 | hacker_smith        | hacker@flik.host         | 1337secure   |
|  9 | ivan_the_admin      | ivan@flik.host           | ivanRoot!    |
| 10 | judy_backup         | judy@flik.host           | backItUp#    |
+----+---------------------+--------------------------+--------------+`
    }
}

var validUsernames = ["alice123", "bob_the_builder", "charlie_99", "deltaForce", "eve_hacks", "frank_underground", "grace_note", "hacker_smith", "ivan_the_admin", "judy_backup"];
var validPasswords = ["password123", "buildit!", "charliePass", "delta$ecure", "evepass123", "fr@nkPwd2025", "gRaceIt!", "1337secure", "ivanRoot!", "backItUp#"];

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

// Keep all existing terminal routes...
router.post('/terminal', (req, res) => {
    console.log("Received command:", req.body);
    const { command } = req.body;
    console.log(command)
    if(command === "password"){
        const password = req.body.password;
        if(password === "A1fr5dW6sH3r3"){
            res.status(200).send({ success: true, validationkey: "valid-key-525765", newStructure: {"AdminLogin.sql" : ["sql", "Zeep zorp unintelligible information because this is not a txt file beep boop. (Check 'begin_hack' for what command to use.", gimmeSqlData("users")]} });
            return;
        }else{
            res.status(200).send({ success: false, error: "Invalid password. Please try again." });
            return;
        }
    }

    if(command === "database_login"){
        const username = req.body.username;
        const password = req.body.password;
        if(validUsernames.includes(username) && validPasswords.includes(password)){
            res.status(200).send({ success: true, HTML : "<h1>Welcome to the database login page!</h1><p>You have successfully logged in.</p><table><thead><tr><th>username</th><th>password</th><th>email</th><th>DoB</th></tr></thead><tbody><tr><td>johndoe</td><td>p@ssw0rd123</td><td>john.doe@flik.host</td><td>1985-07-15</td></tr><tr><td>janedoe</td><td>pass456!</td><td>jane.doe@flik.host</td><td>1990-11-02</td></tr><tr><td>alicew</td><td>alice2023</td><td>alice.w@flik.host</td><td>1988-03-27</td></tr><tr><td>bobsmith</td><td>b0bS@fe</td><td>bob.smith@flik.host</td><td>1975-12-10</td></tr><tr><td>charliex</td><td>charlieX!</td><td>charlie.x@flik.host</td><td>2000-06-05</td></tr><tr><td>dianar</td><td>dianaR#99</td><td>diana.r@flik.host</td><td>1992-04-18</td></tr><tr><td>ericm</td><td>ericM2024</td><td>eric.m@flik.host</td><td>1983-09-12</td></tr><tr><td>fionab</td><td>fionaB!78</td><td>fiona.b@flik.host</td><td>1995-01-30</td></tr><tr><td>georgek</td><td>gKpass456</td><td>george.k@flik.host</td><td>1980-07-21</td></tr><tr><td>helenz</td><td>hzStrong#1</td><td>helen.z@flik.host</td><td>1993-11-11</td></tr><tr><td>ianp</td><td>ianP_2022</td><td>ian.p@flik.host</td><td>1987-05-03</td></tr><tr><td>jessicah</td><td>jessH@55</td><td>jessica.h@flik.host</td><td>1991-08-19</td></tr><tr><td>kevinr</td><td>kevR!90</td><td>kevin.r@flik.host</td><td>1978-12-01</td></tr><tr><td>lindam</td><td>lindaM_88</td><td>linda.m@flik.host</td><td>1984-03-16</td></tr><tr><td>michaelb</td><td>mikeB#123</td><td>michael.b@flik.host</td><td>1979-06-27</td></tr><tr><td>nataliea</td><td>natA_44</td><td>natalie.a@flik.host</td><td>1996-10-05</td></tr><tr><td>oliverj</td><td>oliJ!78</td><td>oliver.j@flik.host</td><td>1982-09-14</td></tr><tr><td>paulw</td><td>paulW_99</td><td>paul.w@flik.host</td><td>1986-02-23</td></tr><tr><td>quinns</td><td>quinnS2025</td><td>quinn.s@flik.host</td><td>1994-12-30</td></tr><tr><td>rachelc</td><td>rachC#7</td><td>rachel.c@flik.host</td><td>1990-07-07</td></tr><tr><td>stevenk</td><td>steveK99</td><td>steven.k@flik.host</td><td>1977-11-22</td></tr><tr><td>tiffanyl</td><td>tiffL_01</td><td>tiffany.l@flik.host</td><td>1993-05-15</td></tr><tr><td>ursulaw</td><td>ursulaW#88</td><td>ursula.w@flik.host</td><td>1981-08-09</td></tr><tr><td>victorr</td><td>vicR!34</td><td>victor.r@flik.host</td><td>1989-04-29</td></tr><tr><td>wendyq</td><td>wendyQ2024</td><td>wendy.q@flik.host</td><td>1992-01-20</td></tr><tr><td>xavierp</td><td>xavP_77</td><td>xavier.p@flik.host</td><td>1985-03-11</td></tr><tr><td>yvonnem</td><td>yvonneM!9</td><td>yvonne.m@flik.host</td><td>1991-06-06</td></tr><tr><td>zacharyt</td><td>zachT123</td><td>zachary.t@flik.host</td><td>1980-10-28</td></tr><tr><td>amberl</td><td>amberL#42</td><td>amber.l@flik.host</td><td>1987-09-17</td></tr><tr><td>brandonh</td><td>brandH99</td><td>brandon.h@flik.host</td><td>1994-02-25</td></tr><tr><td>catherinem</td><td>catM!56</td><td>catherine.m@flik.host</td><td>1983-07-14</td></tr><tr><td>davidj</td><td>daveJ_78</td><td>david.j@flik.host</td><td>1989-12-03</td></tr><tr><td>emilyr</td><td>emR_44</td><td>emily.r@flik.host</td><td>1995-04-12</td></tr><tr><td>frankw</td><td>frankW99</td><td>frank.w@flik.host</td><td>1982-08-21</td></tr></tbody></table><br><button onclick='window.location.href=`/games/wonGame.html`'>SELL DATA</button>" });
            return;
        }else{
            res.status(200).send({ success: false, HTML : "<h1>Welcome to the database login page!</h1><p>You have entered  the wrong username or password.</p>" });
            return;
        }
    }

    // If command not found then lil cheater (dexter) be messin
    res.status(200).send({ success: false, error: "Sorry Shlexter this command not found." });
});

module.exports = router;
