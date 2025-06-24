let validationKey = "";
let currentPath = ["home"];
let fuffInstalled = false;

const directoryStructure = {
    home: {
        "documents": {
            "Doggurments.pptx": ["txt", "Slave trade is bad, but doggur trade is good."],
            "DailyReport.txt": ["txt", "The system is functioning a little abnomally, but it appears to be stable on the surface. Further investigation is definitely needed. Dan when you read this please login to the server from the terminal to get your admin key and check the server logs for some sort of memory leak or something.\n\n- Leland\n\n P.S - Don't forget the password to the terminal DAN!! It's A1fr5dW6sH3r3 in case you do forget."],
            "NuclearLaunchCodes.txt": ["txt","WARNING - Please ensure you have the correct clearance to view this file and do not share this file with anyone other than the owner of this copy. The nuclear launch codes are [REDACTED]."],
            "OfficePartyInvite.txt": ["txt", "Hi Dan,\n\nYou are invited to the office party that is taking place on the 23rd of Jan. Please be there or else we will take that as you not wanting to be invited to any future parties. \n\nMany thanks, \nPhilton and all the others!"]
        },
        "downloads": {
            "maxwell.png" : ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://static.wikia.nocookie.net/silly-cat/images/d/d5/Maxwell.png"],
            "soggaPics" : {
                "sogga.png" : ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://static.wikia.nocookie.net/floppapedia-revamped/images/1/1d/Soggaglopnar.jpg"],
                "Mt_Googas.png" : ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://static.wikia.nocookie.net/floppapedia-revamped/images/6/6c/Obraz_2021-02-15_135626.webp"],
                "infant.png" : ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://static.wikia.nocookie.net/floppapedia-revamped/images/3/32/Download_%2879%29.webp"],
                "child.png" : ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://static.wikia.nocookie.net/floppapedia-revamped/images/e/e8/Obraz_2021-02-15_135313.webp"],
                "snoozin.png" : ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://static.wikia.nocookie.net/floppapedia-revamped/images/6/61/Partysog.webp"],
                "imStillStandin.png" : ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://static.wikia.nocookie.net/floppapedia-revamped/images/6/6a/Sogger.webp"],
                "chillin.png" : ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://static.wikia.nocookie.net/floppapedia-revamped/images/e/ea/Download_%2880%29.webp"],
            },
            "floppaPics" : {
                "floppa.png" : ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://static.wikia.nocookie.net/floppapedia-revamped/images/9/96/Floppa.jpg"],
                "hissin.png" : ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://static.wikia.nocookie.net/floppapedia-revamped/images/3/38/Angy.png"],
                "chillin_with_justin.png" : ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://static.wikia.nocookie.net/floppapedia-revamped/images/f/f3/Big_Floppa_with_his_brother%2C_Justin.jpg"],
                "rapping.png" : ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://static.wikia.nocookie.net/floppapedia-revamped/images/7/76/NewHitRapper.jpg"],
                "holy_moly.png" : ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://static.wikia.nocookie.net/floppapedia-revamped/images/3/3d/Assa.jpeg"],
            },
            "bingusPics" : {
                "infoOnBingus.txt": ["txt", "Vladimir Bingus. Born on 1969, he ruled as a dictator of the communist Bingustan. Suspected murderer of Chinp Floppa. He is the dio of the floppa bloodline"],
                "bingus.png" : ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://static.wikia.nocookie.net/floppapedia-revamped/images/5/5f/ActualBingus.jpg"],
                "sportingSomeDrip.png" : ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://static.wikia.nocookie.net/floppapedia-revamped/images/3/39/Bingbingdrip.jpg"],
                "suitedUp.png" : ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://static.wikia.nocookie.net/floppapedia-revamped/images/b/b0/Bingus.jpg"],
            },
            "Screenshots.7z": ["txt", "This is a 7z file that contains screenshots of the server. Unfortunately, I haven't added support to extract 7z files"],
            "databases": {
                "Requires Login, use /login" : ["txt", "bro why you catting this?"]
            }
        },
        "pictures": {
            //"Phillip.png": ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://flik.host/images/4pI7kb.png"],
            "Bailey.png": ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://flik.host/images/4Zh5i.jpg"],
            //"Joshua.png": ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://flik.host/images/2WqAyW.jpg"],
            "Shlexter.png": ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://flik.host/images/3fkyJ8.jpg"],
            //"Daniel.png": ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://flik.host/images/36y3tM.png"],
            //"Leland.png": ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://cdn.discordapp.com/avatars/1336861687432872090/30c6f498c0a65f247f63cc8df67959cd?size=1024"],
            //"God.png": ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://flik.host/images/32qt5W.png"],
            //"Devil.png": ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://flik.host/images/4pI7kb.png"],
        },
        "music": {
            "DrumsOfLiberation.mp3" : ["audio", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat audio)"], "https://bailey.flik.host/assets/sounds/drums%20of%20liberation.mp3"],
        },
        "videos": {
            "Empty Directory": ["txt", "I'm quite suprised you thought to check if this was an item and not just some text..."]
        },
        "desktop": {
            "Dead_By_Daylight.ink": ["txt", "./steam.AppImage --exec 'steam://rungameid/381210'"],
            "Blender.ink": ["txt", "./blender.AppImage"],
            "VSCode.ink": ["txt", "./code.AppImage"],
            "Konsole.ink": ["txt", "./Konsole.AppImage"],
            "Discord.ink": ["txt", "./discord.AppImage"],
        },
        "projects": {
            "BlenderProjects": {
                "Project1.blend": ["txt", "Yea bro just leave this area there is nothing interesting..."]
            },
            "WebProjects": {
                "TerminalProject": {
                    "index.html": ["txt", "Hi, nothing interesting here."],
            }
        }
    }
}
};

const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
});

function rainbow(string) {
    return lolcat.rainbow(function(char, color) {
        char = $.terminal.escape_brackets(char);
        return `[[;${hex(color)};]${char}]`;
    }, string).join('\n');
}

function hex(color) {
    return '#' + [color.red, color.green, color.blue].map(n => {
        return n.toString(16).padStart(2, '0');
    }).join('');
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getValidationKey(password) {
	const url = window.location.protocol + "//" + window.location.host + "/api/terminal";

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ command: "password", password })
		});

		const data = await response.json();
        
        console.log(data)

		if (data.success) {
            const recievedFiles = data.newStructure
            directoryStructure.home.downloads.databases = recievedFiles	
			return { success: true, validationkey: data.validationkey };	
        }

		return { success: false, error: data.error };

	} catch (error) {
		console.error("Error fetching validation key:", error);
		return { success: false, error: "Error fetching validation key." };
	}
}

function returnSomeRgb(a, b, c) {
    return { red: a, green: b, blue: c };
}

function randSleep(min, max) {
	return sleep(Math.floor(Math.random() * (max - min + 1)) + min);
}

function getRandomSpeed() {
	let speed = (Math.random() * 2 + 0.5).toFixed(2); // Between 0.5 and 2.5 MiB/s
	return `${speed} MiB/s`;
}

function getRandomIp() {
	return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}

function getRandomMirror() {
	const mirrors = [
		`https://mirror.rackspace.com/archlinux/community/os/x86_64/`,
		`https://arch.mirror.constant.com/community/os/x86_64/`,
		`https://mirror.osbeck.com/archlinux/community/os/x86_64/`,
		`https://archlinux.dcc.uchile.cl/community/os/x86_64/`
	];
	return mirrors[Math.floor(Math.random() * mirrors.length)];
}

async function startTheFinale() {
    term.echo(`[[;${hex(returnSomeRgb(25, 245, 17))};]Congratulations! You have successfully retrieved the database for all the admin usernames and passwords!]`);
    await sleep(3000);
    term.echo(`[[;${hex(returnSomeRgb(5, 243, 247))};]Now we need to find a webpage where we can use this login information that we have gathered. Unfortunately, Linux doesn't have a built-in way to scan webpages so you'll have to install a tool to do so... However I think that will be a little hard for you, so I will do it for you!]`);
    await sleep(6000);
	term.echo('[[;#ffffff;]> pacman -S ffuf]');
    await randSleep(300, 500)
	term.echo('resolving dependencies...');
	await randSleep(800, 1700);
	term.echo('looking for conflicting packages...');
	await randSleep(800, 1700);
	term.echo('');
	term.echo('Packages (1) ffuf-2.1.0-1');
	await randSleep(200, 300);
	term.echo('');
	term.echo('Total Download Size:    0.30 MiB');
	term.echo('Total Installed Size:   1.10 MiB');
	term.echo('');
	term.echo(':: Proceed with installation? [Y/n]');
	await randSleep(800, 1700);
	term.echo('[[;#ffffff;]> y]');
	term.echo(':: Retrieving packages...');
	await randSleep(800, 1700);
	let mirror = getRandomMirror();
	let ip = getRandomIp();
	let speed = getRandomSpeed();
	term.echo(` downloading from ${mirror} (${ip})`);
	await randSleep(1300, 1700);
	term.echo(` ffuf-2.1.0-1-x86_64.pkg.tar.zst  100%  300.0 KiB ${speed} 00:00`);
	await randSleep(1800, 2500);
	term.echo(' checking keys in keyring...');
	await randSleep(400, 900);
	term.echo(' checking package integrity...');
	await randSleep(400, 900);
	term.echo(' loading package files...');
	await randSleep(400, 900);
	term.echo(' checking for file conflicts...');
	await randSleep(400, 900);
	term.echo(' checking available disk space...');
	await randSleep(400, 900);
	term.echo(' installing ffuf...');
	await randSleep(900, 1700);
	term.echo('[[;#00ff00;]ffuf installation complete.]');
    term.echo(`[[;${hex(returnSomeRgb(5, 243, 247))};]Awesome! You can now use the ffuf command to scan the webpages on this site for any hidden webpages. Try it out! (Use 'ffuf' and then the website name you want to search, for example 'ffuf https://google.com')]`);
    fuffInstalled = true;
}

function loadHelp(page){
    switch(page) {
        case 0:
            return "Welcome to the terminal! Often servers are run using an operating system called Linux, which is what this terminal is based on. There are many commands that you can use to interact with the server using the terminal. Using the knowledge you will be learning for this command you will learn how to navigate the server and find hidden files and folders with sensitive information within. \n\nTo start, type 'begin_hack 1' to begin the first lesson. Remember you can always use 'begin_hack' again to look at the definitions again!";
        case 1:
            return "Probably the most importand command you will need to learn is the 'ls' command. This command will list all of the files and folders that are in the current directory that the console is in. By default terminals will often start in the home directory (if on Linux, C:/ on windows) type 'ls' to see what files and folders are accessible to you in this current directory. Type 'begin_hack 2' to continue."
        case 2:
            return "Ope! I completely forgot about the 'help' command! This command is very generic and usually a lot more complicated in an actual terminal, but in this terminal it will output all the commands that you can use on just a line or two! Make sure that you use this command if you ever forget (but can partially remember) a command that you can use! Type 'begin_hack 3' to continue.";
        case 3:
            return "Next command you should learn about is the 'cat' command which displays the contents of a file, this would usually be used for .txt files or programming files like .js, .py or .cpp which all contain raw text data. Using cat on files that are encrpyted or just dont support raw text can and will just spew out unintelligible content. Type 'begin_hack 4' to continue";
        case 4:
            return "I know your probably thinking (if you ran 'ls' like I said) \"Why are there so many directories, how do I access them?\" Well, that is very easy to answer, to change the directory your in, you can use the 'cd' command (which stands for change directory... I think). Typing cd then the directory you want to change to will do so and move you to it. Type 'begin_hack 5' to continue."
        case 5:
            return "We are nearing the end of all that you need to know now. The next command you neeed to know is 'sql' which is usually more complex than the implementation of this one but it essentially allows you to read \"SQL\" files which are not raw text therefore cannot be read with cat. Using a command like 'sql userDatabase.sql' will display all the usernames, passwords and emails of the people in a nice table that you can view with ease. Type 'begin_hack 6' to continue."
        case 6:
            return "YIPEE!!! You did it! You have learnt all the commands that you need to know, all this knowledge is everything you need to hack into the servers database and steal all that precious data (ethically of course). If you want some tips and tricks that you can do in the terminal like viewing images type 'begin_hack 7' to see them."
        case 7:
            return "Ahhh, so you wanna hear some tips and tricks? Well I gotchu. Lets start of with the image command, you can use the command 'w3m' and then the file name to see the image. Another cool thing you can do in this terminal is use 'Tab' to autocomplete the line, so if you are typing 'cat Doggurments.txt' You can instead do 'cat Dogg' and press Tab to make it automatically type the rest out for you! If you want EVEN MORE tricks you know what to type next!"
        case 8:
            return "Well, well, well. Guess whos back. You want more tricks? Well hows this for a trick? You can type 'cowsay \"Put some text here\"' to get some ascii of a cow saying what you input. Another trick, if you want some big text you can do 'figlet \"Insert some cool text\"' and finally you can do 'echo' to repeat back what you input!"
        case 9:
            return "Bro what you doing here, that's all that there was too it!"
        default:
            return "Sorry, either that is not a valid number of the number that you have entered is not a valid page number. Please try again with a diffrent number.";
    }
}

const commands = {
    begin_hack(args = "0") {
        const pageStr = String(args).trim();
        const page = parseInt(pageStr, 10);
        const helpText = loadHelp(page);
        term.echo(`[[;${hex({ red: 0, green: 255, blue: 0 })};]Page ${page} loaded:]\n${helpText}`);
    },
    async ls(){
        let dir = directoryStructure;
        for (const part of currentPath) {
            dir = dir[part];
        }
        const currentDirName = currentPath[currentPath.length - 1];
        term.echo(`[[;${hex({ red: 255, green: 165, blue: 0 })};]Listing files in ${currentDirName}...]`);
        await sleep(100);
        const files = Object.keys(dir);
        if (files.length === 0) {
            term.echo(`[[;${hex({ red: 255, green: 0, blue: 0 })};]No files found in ${currentDirName}.]`);
        } else {
            term.echo(files.join(', '));
        }
    },
    async sql(args="None"){
        if (args === "None") {
            term.echo(`[[;${hex({ red: 255, green: 0, blue: 0 })};]Please provide a database file to read.]`);
            return;
        }
        const file = args.trim();
        let dir = directoryStructure;
        for (const part of currentPath) {
            dir = dir[part];
        }
        await sleep(100);
        if (dir[file]) {
            if (Array.isArray(dir[file]) && dir[file][0] === "sql") {
                const [type, content, sqlData] = dir[file];
                term.echo(`[[;${hex({ red: 0, green: 255, blue: 0 })};]10 rows in set (0.23s):]\n${sqlData}`)
                await startTheFinale(); // Hi
            }
            else {
                term.echo(`[[;${hex({ red: 255, green: 0, blue: 0 })};]File ${file} is not a valid SQL file.]`);
            }
        }
        else {
            term.echo(`[[;${hex({ red: 255, green: 0, blue: 0 })};]File ${file} does not exist in ${currentPath[currentPath.length - 1]}.]`);
        }
    },
    async ffuf(args="None"){

        if (!fuffInstalled) {
            term.echo(`[[;${hex({ red: 255, green: 0, blue: 0 })};]Command fuff Not Found!]`);
            return;
        }
        if (args === "None") {
            term.echo(`[[;${hex({ red: 255, green: 0, blue: 0 })};]Please provide a file name to read.]`);
            return;
        }
        const website = args.trim();
        console.log("Website to scan:", website);

        if (!website) {
            term.echo(`[[;${hex({ red: 255, green: 0, blue: 0 })};]Please provide a website to scan.]`);
            return;
        }

        if(!website.startsWith("http://") && !website.startsWith("https://")) {
            term.echo(`[[;${hex({ red: 255, green: 0, blue: 0 })};]A website must start with http:// or https://]`);
            return;
        }

        if(website !== "http://localhost" && website !== "https://hacker.flik.host"){
            term.echo(`[[;${hex({ red: 255, green: 0, blue: 0 })};]Hmmm that website can't be accessed right now... (Maybe try the website your on right now.)`);
            return;
        }

        term.echo(`[[;${hex({ red: 255, green: 165, blue: 0 })};]Starting scan on ${website} using default wordlist...]`);
        await randSleep(700, 2400);
        term.echo(`[[;${hex({ red: 0, green: 255, blue: 0 })};]Scan complete! Found the following webpagse and directories:]`);
        await randSleep(500, 1500);
        term.echo(`[[;${hex({ red: 255, green: 255, blue: 255 })};]1. /index.html\n2. /abouthacking.html\n3. /games.html\n4. /hackergame.html\n5. /hackerlevel.html\n6. /resources.html\n[[;${hex({ red: 0, green: 255, blue: 0 })};]7. /userinfo.html[[;${hex({ red: 255, green: 255, blue: 255 })};]\n8. /games/directAccess\n9. /games/flashcards.html\n10. /games/memory.html\n11. /games/quest.html\n12. /games/shell.html]`)
        await sleep(1200);
        term.echo(`[[;${hex({ red: 255, green: 165, blue: 0 })};]I think its a good idea you check out ${window.location.protocol + "//"  + window.location.host + "/userinfo.html"}]`);

    },
    async cd(args="None"){
        if (args === "None") {
            term.echo(`[[;${hex({ red: 255, green: 0, blue: 0 })};]Please provide a directory to cd into.]`);
            return;
        }
        const targetDirectory = args.trim();
        let dir = directoryStructure;
        for (const part of currentPath) {
            dir = dir[part];
        }
        term.echo(`[[;${hex({ red: 255, green: 165, blue: 0 })};]Changing directory to ${targetDirectory}...]`);
        await sleep(100);
        if (targetDirectory === "..") {
            if (currentPath.length > 1) {
                currentPath.pop();
                term.echo(`[[;${hex({ red: 0, green: 255, blue: 0 })};]Moved up to ${currentPath[currentPath.length - 1]}.]`);
            } else {
                term.echo(`[[;${hex({ red: 255, green: 0, blue: 0 })};]Already at root directory.]`);
            }
        } else if (dir[targetDirectory] && typeof dir[targetDirectory] === "object") {
            currentPath.push(targetDirectory);
            term.echo(`[[;${hex({ red: 0, green: 255, blue: 0 })};]Changed directory to ${targetDirectory}.]`);
        } else {
            term.echo(`[[;${hex({ red: 255, green: 0, blue: 0 })};]Directory ${targetDirectory} does not exist in ${currentPath[currentPath.length - 1]}.]`);
        }
    },
    async login(password="None"){
        if (password === "None") {
            term.echo(`[[;${hex({ red: 255, green: 0, blue: 0 })};]Please provide a password.]`);
            return;
        }
        term.echo(`[[;${hex({ red: 255, green: 165, blue: 0 })};]Attempting to login...]`);
        
        const login_result = await getValidationKey(password);

        await sleep(1000);

        if (login_result.success) {
            response = `[[;${hex({ red: 124, green: 252, blue: 0 })};]Retrieved validation key: ]`;
            validationKey = login_result.validationkey;
        } else {
            response = `[[;${hex({ red: 255, green: 0, blue: 0 })};]Failed to get vaildation key. Error: ${login_result.error} Current key: ]`;
        }

        term.echo(response + validationKey);
    },
    test(){
        term.echo("What you testing?")
    },
    async w3m(args="None"){
        if (args === "None") {
            term.echo(`[[;${hex({ red: 255, green: 0, blue: 0 })};]Please provide an image name to display.]`);
            return;
        }
        const file = args.trim();
        let dir = directoryStructure;
        for (const part of currentPath) {
            dir = dir[part];
        }
        term.echo(`[[;${hex({ red: 255, green: 165, blue: 0 })};]Opening file ${file}...]`);
        await sleep(100);
        if (dir[file]) {
            if (Array.isArray(dir[file])) {
                const [type, content, url] = dir[file];
               if (type === "img") {
                    console.log("Image URL:", url);
                    term.echo(`[[;${hex({ red: 0, green: 255, blue: 0 })};]Image ${file} loaded:]`);
                    term.echo(`[[@;;;;${url}]]`);

                } else {
                term.echo(`[[;${hex({ red: 255, green: 0, blue: 0 })};]File ${file} is not readable.]`);
                }
            } else {
                term.echo(`[[;${hex({ red: 255, green: 0, blue: 0 })};]File ${file} does not exist in ${currentPath[currentPath.length - 1]}.]`);
            }
        }
    },
    async cat(args="None"){
        if (args === "None") {
            term.echo(`[[;${hex({ red: 255, green: 0, blue: 0 })};]Please provide a file name to read.]`);
            return;
        }
        const file = args.trim();
        let dir = directoryStructure;
        for (const part of currentPath) {
            dir = dir[part];
        }
        term.echo(`[[;${hex({ red: 255, green: 165, blue: 0 })};]Reading file ${file}...]`);
        await sleep(100);
        if (dir[file]) {
            if (Array.isArray(dir[file])) {
                const [type, content] = dir[file];
                term.echo(`[[;${hex({ red: 0, green: 255, blue: 0 })};]Contents of ${file}:]\n${content}`);
            } else {
                term.echo(`[[;${hex({ red: 255, green: 0, blue: 0 })};]File ${file} is not readable.]`);
            }
        } else {
            term.echo(`[[;${hex({ red: 255, green: 0, blue: 0 })};]File ${file} does not exist in ${currentPath[currentPath.length - 1]}.]`);
        }
    },
    help() {
        term.echo(`List of available commands: ${help}`);
    },
    echo(args="No input"){
        term.echo(`[[;${hex({ red: 255, green: 165, blue: 0 })};]${args}]`);
    },
    async cowsay(args="No input"){
        const proxyUrl = "https://corsproxy.io/?";
        const apiUrl = "https://cowsay.morecode.org/say?message=" + encodeURIComponent(args)+"&format=json";
        try {
            const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
            if (!response.ok) {
                throw new Error("Failed to fetch cowsay output.");
            }
            let data = await response.text();
            if (data) {
                data = JSON.parse(data);
                term.echo(`${data.cow}`);
            } else {
                term.echo("[[;#FF0000;]Unexpected response from cowsay API.]");
            }
        } catch (error) {
            term.echo("[[;#FF0000;]Error fetching cowsay output: " + error.message + "]");
        }
    },
    async kanye(potentialArgs = ""){
        if (potentialArgs.trim() !== "--Force-Enable") {
            term.echo("[[;#FF0000;]Due to Kanye being a bit controversial, this command has been disabled. However if you REALLY want to see some kanye quotes, do the command 'kayne --Force-Enable']");
        }else {
            await fetch("https://api.kanye.rest/")
            .then(response => response.json())
            .then(data => term.echo(data.quote))
            .catch(error => console.error("Error fetching data:", error));
        }
    },
    lolcat(args="No input"){
        const message = rainbow(args);
        term.echo(message);
    },
    async figlet(args="No input"){
        await figlet.text(args, { font: 'big' }, function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            term.echo(data);
        });
    },
    async cat_fact(){
        await fetch("https://meowfacts.herokuapp.com/")
        .then(response => response.json())
        .then(data => term.echo(data.data[0]))
        .catch(error => console.error("Error fetching data:", error));
      
    },
};

const command_list = Object.keys(commands);
const help = formatter.format(command_list);

//Imma be real I ain't smart/awake enough to have written this myself.
function tabCompletion(string, callback) {
    const cmd = this.get_command();
    const args = cmd.split(' ');
    const currentArg = args[args.length - 1];
    
    if (args.length === 1) {
        const matches = command_list.filter(command => 
            command.startsWith(string.toLowerCase())
        );
        callback(matches);
        return;
    }
    
    const fileCommands = ['cat', 'w3m', 'cd', 'sql'];
    const commandName = args[0].toLowerCase();
    
    if (fileCommands.includes(commandName)) {
        let dir = directoryStructure;
        for (const part of currentPath) {
            dir = dir[part];
        }
        
        const files = Object.keys(dir);
        
        if (commandName === 'cd') {
            const directories = files.filter(file => 
                typeof dir[file] === 'object' && !Array.isArray(dir[file])
            );
            const allDirs = currentPath.length > 1 ? ['..', ...directories] : directories;
            const matches = allDirs.filter(item => 
                item.startsWith(currentArg)
            );
            callback(matches);
        } else {
            const matches = files.filter(item => 
                item.startsWith(currentArg)
            );
            callback(matches);
        }
        return;
    }
    
    callback([]);
}

const term = $('body').terminal(commands, {
    checkArity: false,
    completion: tabCompletion
});

document.addEventListener('DOMContentLoaded', () => {
    term.echo("[[;#00FF00;]Welcome to the terminal!]");
    term.echo("[[;#00FF00;]Type 'begin_hack' to start hacking!]");
});