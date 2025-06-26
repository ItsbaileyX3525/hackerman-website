function showNotification(message, type = 'success', duration = 2500) {
    const container = document.getElementById('notification-container');
    container.textContent = message;
    container.classList.remove('success', 'error', 'info');
    container.classList.add(type, 'show');
    setTimeout(() => {
        container.classList.remove('show');
        setTimeout(() => {
            container.classList.remove(type);
        }, 500);
    }, duration);
}

let firstLoad = true;
let loadedData = false;
let canCorrect = true;
let loadedSomeReturns = false;
let skipLevelPassword = "";

function loadSomeDevs(){
    console.log("Loading some devs...");
    const gameDiv = document.getElementById('flex-item');
    const img = document.createElement('img');
    const p = document.createElement('p');
    p.innerHTML = `
    Meet the developers of this game!<br><br>
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <span style="flex:1; text-align:left;">
                Josh Hughes<br>
                <small>playtested the game!</small>
            </span>
            <span style="flex:1; text-align:center;">
                Phillip McHale<br>
                <small>created the powerpoints</small>
            </span>
            <span style="flex:1; text-align:right;">
                Bailey Miles<br>
                <small>created this awesome site!</small>
            </span>
        </div>
    `;
    p.style.textAlign = 'center';
    gameDiv.appendChild(p);
    img.src = '/assets/images/dev.png';
    img.alt = 'Developers';
    img.style.width = '90%';
    img.style.height = '400px';
    img.style.display = 'block';
    img.style.margin = '0 auto';
    img.style.borderRadius = '10px';
    gameDiv.appendChild(img);
}

async function loadLevel(password) {
    const url = window.location.protocol + '//' + window.location.host + '/submit';
    const data = {
        level: currentLevel,
        password: password
    }

    console.log("send", currentLevel, password);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();

        if (responseData.error == "true" || responseData.error === true) {
            showNotification(responseData.content, 'error');
            console.log("error");
            if (responseData.js) {
                eval(responseData.js);
            }
            if (responseData.pwd) {
                skipLevelPassword = responseData.pwd;
                const url = new URL(window.location);
                url.searchParams.set('password', responseData.pwd);
                history.replaceState({}, '', url);
            }
            return;
        }

        currentLevel = parseInt(responseData.level, 10);
        localStorage.setItem('currentLevel', currentLevel-1);
        localStorage.setItem('storedPassword', password);
        
        const htmldata = responseData.content;
        const flexContainer = document.getElementById('hacker-game');
        flexContainer.innerHTML = htmldata;

        if(firstLoad) {
            firstLoad = false;
            showNotification("Welcome to the Hacker Game!", 'success');
        }else{
            if(canCorrect){
                showNotification("Password accepted!", 'success');
            }
        }

        if(responseData.js){
            eval(responseData.js);
        }

        if(!canCorrect) {
            canCorrect = true;
        }

        if(currentLevel !== 5 && window.location.href.includes("?password=")){
            window.history.replaceState({}, document.title, "/hackerlevel.html");
        }


    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Add event listeners only once using event delegation
document.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'submit') {
        const passwordInput = document.getElementById('password-input');
        if (passwordInput) {
            const password = passwordInput.value.trim();
            loadLevel(password);
        }
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const passwordInput = document.getElementById('password-input');
        if (passwordInput && document.activeElement === passwordInput) {
            const password = passwordInput.value.trim();
            loadLevel(password);
        }
    }
});

//Fix old level loading thing
localStorage.clear();

//let currentLevel = parseInt(localStorage.getItem('currentLevel'), 10) || 0;
let currentLevel = 0
let storedPassword = localStorage.getItem('storedPassword') || '';

loadLevel('password');

document.addEventListener('keydown', function (event) {
    if (event.key === "Alt" && event.shiftKey) {
        console.log("Shift pressed + Alt");
        const gameDiv = document.getElementById('flex-item');
        const p = document.createElement('p');
        p.innerHTML = `
        <div style="text-align: center; margin-top: 20px;">
            <p>The password for this level is: ${skipLevelPassword || "Not found :P"}</p>
        </div>
        `;
        p.style.textAlign = 'center';
        gameDiv.appendChild(p);
    }
})