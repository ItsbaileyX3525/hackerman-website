let validationKey = "";
let currentPath = ["home"];

const directoryStructure = {
    home: {
        "documents": {
            "Doggurments.pptx": ["txt", "Slave trade is bad, but doggur trade is good."],
            "DailyReport.txt": ["txt", "The system is functioning a little abnomally, but it appears to be stable on the surface. Further investigation is definitely needed. Dan when you read this please login to the server from the terminal to get your admin key and check the server logs for some sort of memory leak or something.\n\n- Leland\n\n P.S - Don't forget the password to the terminal DAN!! It's A1fr5dW6sH3r3 in case you do forget."],
            "NuclearLaunchCodes.txt": ["txt","WARNING - Please ensure you have the correct clearance to view this file and do not share this file with anyone other than the owner of this copy. The nuclear launch codes are [REDACTED]."],
            "OfficePartyInvite.txt": ["txt", "Hi Dan,\n\nYou are invited to the office party that is taking place on the 23rd of Jan. Please be there or else we will take that as you not wanting to be invited to any future parties. \n\nMany thanks, \nPhilton and all the others!"]
        },
        "downloads": {
            "maxwell.png" : ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://static.wikia.nocookie.net/silly-cat/images/d/d5/Maxwell.png/revision/latest?cb=20231001194454"],
            "Screenshots.7z": ["txt", "This is a 7z file that contains screenshots of the server. You can use the 'w3m' command to view the contents of this file."],
        },
        "pictures": {
            "Phillip.png": ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://flik.host/images/4pI7kb.png"],
            "Bailey.png": ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://flik.host/images/4Zh5i.jpg"],
            "Joshua.png": ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://flik.host/images/2WqAyW.jpg"],
            "Shlexter.png": ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://flik.host/images/3fkyJ8.jpg"],
            "Daniel.png": ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://flik.host/images/36y3tM.png"],
            "Leland.png": ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://cdn.discordapp.com/avatars/1336861687432872090/30c6f498c0a65f247f63cc8df67959cd?size=1024"],
            "God.png": ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://flik.host/images/32qt5W.png"],
            "Devil.png": ["img", ["erufhuerfhoiPNGueihdiewuhfuihfu21uh324f378fh7... (Dont cat images)"], "https://flik.host/images/4pI7kb.png"],
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

		if (data.success) {
			return { success: true, validationkey: data.validationkey };
		}

		return { success: false, error: data.error };

	} catch (error) {
		console.error("Error fetching validation key:", error);
		return { success: false, error: "Error fetching validation key." };
	}
}

function loadHelp(page){
    switch(page) {
        case 0:
            return "Welcome to the terminal! Often servers are run using an operating system called Linux, which is what this terminal is based on. There are many commands that you can use to interact with the server using the terminal. Using the knowledge you will be learning for this command you will learn how to navigate the server and find hidden files and folders with sensitive information within. \n\nTo start, type 'begin_hack 1' to begin the first lesson. Remember you can always use 'begin_hack' again to look at the definitions again!";
        case 1:
            return "Probably the most importand command you will need to learn is the 'ls' command. This command will list all of the files and folders that are in the current directory that the console is in. By default terminals will often start in the home directory (if on Linux, C:/ on windows) type 'ls' to see what files and folders are accessible to you in this current directory. Type 'begin_hack 2' to continue."
        case 2:
            return "Ope! I completely forgot about the 'help' command! This command is very generic and usually a lot more complicated in an actual terminal, but in this terminal it will output all the commands that you can use on just a line or two! Make sure that you use this command if you ever forget (but can partially remember) a command that you can use! Type 'begin_hack 3' to continue.";
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
    async cd(args){
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
    async login(password){
        term.echo(`[[;${hex({ red: 255, green: 165, blue: 0 })};]Attempting to login...]`);
        
        const login_result = await getValidationKey(password);

        console.log("Login result:", login_result);

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
    async w3m(args){
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
    async cat(args){
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
    echo(args){
        term.echo(`[[;${hex({ red: 255, green: 165, blue: 0 })};]${args}]`);
    },
    async cowsay(args){
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
    async kanye(){
        await fetch("https://api.kanye.rest/")
        .then(response => response.json())
        .then(data => term.echo(data.quote))
        .catch(error => console.error("Error fetching data:", error));
      
    },
    lolcat(args){
        const message = rainbow(args);
        term.echo(message);
    },
    async figlet(args){
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
    
    const fileCommands = ['cat', 'w3m', 'cd'];
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