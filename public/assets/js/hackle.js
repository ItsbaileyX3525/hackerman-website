const wordList = [
    "cyber", "proxy", "virus", "phish", "crack", "admin", "shell", "token", "input", "bytes",
    "login", "patch", "spoof", "trace", "logic", "brute", "snoop", "wormy", "stack", "sniff",
    "spook", "recon", "leaks", "crypt", "alert", "audit", "block", "cloud", "debug", "drain",
    "grant", "guard", "intel", "macro", "miner", "nonce", "probe", "reset", "scrub", "steal",
    "swarm", "track", "vault", "whale", "salts", "pwned", "admin", "crash", "dumps", "flood"
];

const MAX_ATTEMPTS = 6;
const WORD_LENGTH = 5;
let secretWord = "";
let currentAttempt = 0;
let currentGuess = [];
let guessHistory = [];
let gameOver = false;

const guessesGrid = document.getElementById('guessesGrid');
const feedbackDiv = document.getElementById('feedback');
const attemptsDiv = document.getElementById('attempts');
const keyboardRows = {
    row1: document.getElementById('row1'),
    row2: document.getElementById('row2'),
    row3: document.getElementById('row3')
};

const keyboard = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"]
];

const keyState = {};

function initGame() {
    secretWord = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();
    console.log("Secret word (for debugging):", secretWord);
    
    createGrid();
    
    createKeyboard();
    
    currentAttempt = 0;
    currentGuess = [];
    guessHistory = [];
    gameOver = false;
    attemptsDiv.innerText = `Attempts: ${currentAttempt}/${MAX_ATTEMPTS}`;
    feedbackDiv.innerText = "";
    
    document.addEventListener('keydown', handleKeyPress);
}

function createGrid() {
    guessesGrid.innerHTML = '';
    for (let i = 0; i < MAX_ATTEMPTS; i++) {
        const row = document.createElement('div');
        row.className = 'guess-row';
        row.id = `row-${i}`;
        
        for (let j = 0; j < WORD_LENGTH; j++) {
            const cell = document.createElement('div');
            cell.className = 'guess-cell';
            cell.id = `cell-${i}-${j}`;
            row.appendChild(cell);
        }
        
        guessesGrid.appendChild(row);
    }
}

function createKeyboard() {
    keyboardRows.row1.innerHTML = '';
    keyboardRows.row2.innerHTML = '';
    keyboardRows.row3.innerHTML = '';
    
    keyboard.forEach((row, rowIndex) => {
        const rowElement = keyboardRows[`row${rowIndex + 1}`];
        
        row.forEach(key => {
            const keyElement = document.createElement('div');
            keyElement.className = 'key';
            keyElement.textContent = key;
            keyElement.id = `key-${key.toLowerCase()}`;
            
            if (key === 'Enter' || key === 'Backspace') {
                keyElement.className += ' key-wide';
            }
            
            keyElement.addEventListener('click', () => {
                handleKey(key);
            });
            
            rowElement.appendChild(keyElement);
        });
    });
}

function updateCell(row, col, letter) {
    const cell = document.getElementById(`cell-${row}-${col}`);
    if (cell) {
        cell.textContent = letter;
        cell.classList.add('letter-animation');
    }
}

function handleKeyPress(e) {
    if (gameOver) return;
    
    const key = e.key;
    handleKey(key);
}

function handleKey(key) {
    if (gameOver) return;
    
    if (/^[a-zA-Z]$/.test(key) && currentGuess.length < WORD_LENGTH) {
        const letter = key.toLowerCase();
        currentGuess.push(letter);
        updateCell(currentAttempt, currentGuess.length - 1, letter);
    }
    else if ((key === 'Backspace' || key === 'Delete') && currentGuess.length > 0) {
        currentGuess.pop();
        updateCell(currentAttempt, currentGuess.length, '');
    }
    else if (key === 'Enter' && currentGuess.length === WORD_LENGTH) {
        submitGuess();
    }
}

function getFeedback(guess) {
    const result = Array(WORD_LENGTH).fill('absent');
    const secretLetters = secretWord.split('');
    const guessLetters = guess.split('');
    
    for (let i = 0; i < WORD_LENGTH; i++) {
        if (guessLetters[i] === secretLetters[i]) {
            result[i] = 'correct';
            secretLetters[i] = null;
        }
    }
    
    for (let i = 0; i < WORD_LENGTH; i++) {
        if (result[i] === 'absent') {
            const letterIndex = secretLetters.indexOf(guessLetters[i]);
            if (letterIndex !== -1) {
                result[i] = 'present';
                secretLetters[letterIndex] = null;
            }
        }
    }
    
    return result;
}

function applyFeedback(feedback) {
    return new Promise(resolve => {
        for (let i = 0; i < WORD_LENGTH; i++) {
            setTimeout(() => {
                const cell = document.getElementById(`cell-${currentAttempt-1}-${i}`);
                if (cell) {
                    cell.classList.add('flip');
                    
                    setTimeout(() => {
                        cell.classList.add(feedback[i]);
                        
                        const letter = cell.textContent.toLowerCase();
                        const key = document.getElementById(`key-${letter}`);
                        
                        if (key) {
                            if (feedback[i] === 'correct') {
                                key.className = 'key key-correct';
                                keyState[letter] = 'correct';
                            } else if (feedback[i] === 'present' && keyState[letter] !== 'correct') {
                                key.className = 'key key-present';
                                keyState[letter] = 'present';
                            } else if (keyState[letter] !== 'correct' && keyState[letter] !== 'present') {
                                key.className = 'key key-absent';
                                keyState[letter] = 'absent';
                            }
                        }
                        
                        if (i === WORD_LENGTH - 1) {
                            setTimeout(resolve, 100);
                        }
                    }, 250);
                }
            }, i * 500);
        }
    });
}

async function submitGuess() {
    const guess = currentGuess.join('');
    
    if (!wordList.includes(guess) && guess !== secretWord) {
        feedbackDiv.innerText = "Not in word list";
        setTimeout(() => {
            feedbackDiv.innerText = "";
        }, 1500);
        return;
    }
    
    currentAttempt++;
    attemptsDiv.innerText = `Attempts: ${currentAttempt}/${MAX_ATTEMPTS}`;
    
    
    const feedback = getFeedback(guess);
    
    await applyFeedback(feedback);
    
    if (guess === secretWord) {
        feedbackDiv.innerHTML = `🎉 You got it! The word was <b>${secretWord.toUpperCase()}</b>`;
        gameOver = true;
    } else if (currentAttempt >= MAX_ATTEMPTS) {
        feedbackDiv.innerHTML = `😢 Out of tries! The word was <b>${secretWord.toUpperCase()}</b>`;
        gameOver = true;
    }
    
    currentGuess = [];
}

document.addEventListener('DOMContentLoaded', initGame);