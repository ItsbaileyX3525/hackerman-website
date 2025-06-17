// TODO: Add level 5, 6, 7, 8, 9 and 10 <-- I think its done

const express = require('express');
const { redirect } = require('express/lib/response');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

function sendLevel1(){
	return `<div id="flex-item">
            <h1>Level 1</h1>
            <input type="text" id="password-input" placeholder="Enter password here">
            <div id="submit" tabindex="0">Submit</div><br>
			<p>Sometimes passwords are just hidden text on the page.</p>
			<p>Highlight the text below for a hint</p>
            <p id="hint" style="color: transparent;">Press ctrl+A</p>
			<text-data style="color: transparent;">Password: yi9+bKG85!vk</text-data>
        </div>`;
}

function sendLevel2(){
	return `        <!-- Password: 4gPh!97mh7'0 --><div id="flex-item">
            <h1>Level 2</h1>
            <input type="text" id="password-input" placeholder="Enter password here">
            <div id="submit" tabindex="0">Submit</div><br>
            
        </div>
		<div id="flex-item">
			<p>Some websites can be hacked using the "devtools", which you can access using the right-click and "inspect element" or by clicking ctrl+shift+i!</p>
			<p>In this case the password hidden here is in the "hacker-game" tag where the password awaits you!</p>
			<p>If you are a little lazy like me you may want to right click the password and click "Edit HTML" so that you can copy and paste the password!</p>
		</div>
		`;
}

function sendLevel3(){
	return [`<div id="flex-item">
            <h1>Level 3</h1>
            <input type="text" id="password-input" placeholder="Enter password here">
            <div id="submit" tabindex="0">Submit</div><br>
        </div>
		<div id="flex-item">
		<p>Websites use a programming language called "javascript" which allows them to dynamically alter websites and store data on the website.</p>
		<p>Sometimes they store the password on the website itself to make the password that the user enteres is the correct password to send!</p>
		<p>In this case the password is stored in a variable called "hiddenPassword" which you can find in the javascript console by clicking ctrl+shift+i or right clicking and pressing inspect element and clicking the "console" tab, from there you can type "hiddenPassword" to view the password</p>
		</div>
		`, `hiddenPassword = "G0q77>a50TkG";`]
}

function sendLevel4() {
	return [`<div id="flex-item">
			<h1>Level 4</h1>
			<input type="text" id="password-input" placeholder="Enter password here">
			<div id="submit" tabindex="0">Submit</div><br>
		</div>
		<div id="flex-item">
		<p>Websites often use a thing called "obfuscation", which is a way to hide passwords behind an extra layer of protection.</p>
		<p>For this level the company used a function hidden in the html (inspect element) that takes the password and then decodes the password so that it is right.</p>
		<p>Functions can be called by entering the inspect element and going to the "console" tab where you can type the function name and then output the password that you need to move onto the next level!</p>
		<p>If you stuck highlight the text below for a hint.</p>
		<p id="hint" style="color: transparent;">The website has a hidden function called "gpw()" that you can type into the console and see the decoded password.</p>
		</div>
		<!-- NOTE: This script unscambles the system password (remove this note when going public) -->
		<script>
		function gpw(){
			hiddenPassword = atob(hiddenPassword);
		}
		</script>`, `
		var hiddenPassword = 'a1g4WzVMM2lHUylg';
		window.gpw = function(){
			console.log(atob(hiddenPassword));
		}`];
}

function sendLevel5(){
	return [`<div id="flex-item">
            <h1>Level 5</h1>
            <input type="text" id="password-input" placeholder="Enter password here">
            <div id="submit" tabindex="0">Submit</div><br>
			<p>Websites often send passwords through POST and GET, POST is just a secure way to send a password to the server, GET is an insecure way and sometimes websites mess up and use GET requests incorrectly, displaying the password is the url bar. GET requests are sent when you <text-data style="font-weight: bold">SUBMIT</text-data> the data</p>
			<p id="hint" style="color: transparent;">Press the submit button and check the url at the top!</p>
        </div>`, ``];
}

function sendLevel6(){
	return [`<div id="flex-item">
            <h1>Level 6 - Fun time!</h1>
            <input type="text" id="password-input" placeholder="Enter password here">
            <div id="submit" tabindex="0">Submit</div><br>
			<p>For the password to this level you have to read about the <a target="_blank" style="color:salmon;" href="https://malware-history.fandom.com/wiki/YouAreAnIdiot">YouAreAnIdiot</a> and the password is hidden within.</p>
			<p id="hint" style="color: transparent;">The password is the year that it was active in the format yyyy-yyyy</p>
        </div>`,``]
}

function sendLevel7(){
	return [`<div id="flex-item">
            <h1>Level 7</h1>
            <input type="text" id="password-input" placeholder="Enter password here">
            <div id="submit" tabindex="0">Submit</div><br>
			<p>Another way of hacking is through physical methods, sometimes you can find stored passwords and other sensitive data.</p>
			<p>If you have ever watched "Ready player one", the big bad stores his password to his account on a sticky note...</p>

			<p id="hint" style="color: transparent;">The password is somewhere close to you...</p>
        </div>`,``]
}

function sendLevel8(){
	return [`<div id="flex-item">
            <h1>Level 8</h1>
            <input type="text" id="password-input" placeholder="Enter password here">
            <div id="submit" tabindex="0">Submit</div><br>
			<p>01000000 11000010 10100011 01100100 00101001 01010110 01001110 01011100 00111001 00101101 00110001 01001000 00110010</p>
			<p id="hint" style="color: transparent;">This is called binary and can be translated into actual text</p>
			<p>You can use online tools like <a style="color: salmon;" target=_blank href="https://www.rapidtables.com/convert/number/binary-to-ascii.html">binary converters</a> to change the binary to text!</p>
        </div>`,``]
}

function sendLevel9(){
	return [`<div id="flex-item">
			<h1>Level 9</h1>
			<input type="text" id="password-input" placeholder="Enter password here">
			<div id="submit" tabindex="0">Submit</div><br>
			<p>Sometimes websites don't do a thing called "sanitization" which is used to make sure that the user can't input malicious code into the website.</p>
			<p>In this case the website has a javascript function that is used to check if the password is correct, but it doesn't sanitize the input, so you can use a thing called "XSS" to get the password.</p>
			<p>To do this you have to input a javascript code that will output the password in an alert box.</p>
			<p>To do this you have to put the following into the enter password box: <text-data style="font-weight: bold;">alert(serverPassword)</text-data></p>
		</div>`,``]
}

function sendLevel10(){
	return [`<div id="flex-item">
			<h1>Level 10</h1>
			<input type="text" id="password-input" placeholder="Enter password here">
			<div id="submit" tabindex="0">Submit</div><br>
			<p>To finish off on a good note the final password is easy, just copy and paste: <text-data style="font-weight: bold;">IWinTheGame!</text-data></p>
			<p id="hint" style="color: transparent;">Things are easy-er than they seem.</p>
			</div>`, ``
		];
	}

app.post('/submit', (req, res) => {
	const { level, password } = req.body;
	console.log(`Received level: ${level}, password: ${password}`);

	switch(level){
		case 0:
			if (password === 'password') {
				return res.json({ level: '1', content: sendLevel1() });
			}
		case 1:
			if (password === 'yi9+bKG85!vk') {
				return res.json({ level: '2', content: sendLevel2() });
			} else {
				return res.json({ error: true, content: `Password is incorrect!` });
			}
		case 2:
			if (password === '4gPh!97mh7\'0') {
				const data = sendLevel3();
				const htmlData = data[0];
				const jsData = data[1];
				return res.json({ level: '3', content: htmlData, js: jsData });
			} else {
				return res.json({ error: true, content: `Password is incorrect!` });
			}
		case 3:
			if (password === 'G0q77>a50TkG') {
				const data = sendLevel4();
				const htmlData = data[0];
				const jsData = data[1];
				return res.json({ level: '4', content: htmlData, js: jsData });
			} else {
				return res.json({ error: true, content: `Password is incorrect!` });
			}
		case 4:
			if (password === 'kX8[5L3iGS)`') {
				const data = sendLevel5();
				const htmlData = data[0];
				return res.json({ level: '5', content: htmlData });
			} else {
				return res.json({ error: true, content: `Password is incorrect!` });
			}
		case 5:
			if (password === 'vwKPydUFJMzF') {
				return res.json({ level: '6', content: sendLevel6()[0] });
			} else if (password === 'kX8[5L3iGS)`'){ //Dont know why this happens but this is a fix for it.
				const data = sendLevel5();
				const htmlData = data[0];
				return res.json({ level: '5', content: htmlData });
			}
			else {
				return res.json({ error: true, content: `Password is incorrect!`, redirect: { url: "/hackerlevel.html?password=vwKPydUFJMzF", delay: 500 } });

			}
		case 6:
			if (password === '2009-2012') {
				return res.json({ level: '7', content: sendLevel7()[0] });
			} else {
				console.log('Incorrect password for level 6', password);
				return res.json({ error: true, content: `Password is incorrect!` });
			}
		case 7:
			if (password === 'B055man69') {
				return res.json({ level: '8', content: sendLevel8()[0] });
			} else {
				return res.json({ error: true, content: `Password is incorrect!` });
			}
		case 8:
			if (password === '@£d)VN\\9-1H2') {
				return res.json({ level: '9', content: sendLevel9()[0] });
			} else {
				return res.json({ error: true, content: `Password is incorrect!` });
			}
		case 9:
			if (password === '2kf32Pl^h4YT') {
				return res.json({ level: '10', content: sendLevel10()[0] });
			} else {
				if(password === 'alert(serverPassword)') {
					return res.json({ error: true, js: `alert('2kf32Pl^h4YT')` });
				}
				return res.json({ error: true, content: `Password is incorrect!` });
			}
		case 10:
			if (password === 'easy') {
				return res.json({ level: '11', js: "loadSomeDevs()", content: `<div id="flex-item"><h1>Congratulations!</h1><p>You have completed the game!</p></div>` });
			} else {
				if(password === 'IWinTheGame!') {
					return res.json({ error: true, js: `alert('You have been fooled! THAT ISNT THE PASSWORD!')` });
				}
				return res.json({ error: true, content: `Password is incorrect!` });
			}
		default:
			console.log('Invalid level');
			return res.json({ error: true, content: `Invalid level!` });
	}
});

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
