function generateCode() {
    const digits = '0123456789'.split('');
    let code = '';
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        code += digits.splice(randomIndex, 1)[0];
    }
    return code;
}

const secretCode = generateCode();
let attempts = 0;
const maxAttempts = 6;
const guesses = [];

const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const feedbackDiv = document.getElementById('feedback');
const attemptsDiv = document.getElementById('attempts');
const guessesGrid = document.getElementById('guessesGrid');

function renderGuesses() {
    guessesGrid.innerHTML = '';
    guesses.forEach(({guess, feedback}) => {
        const row = document.createElement('div');
        row.className = 'guess-row';
        for (let i = 0; i < 4; i++) {
            const cell = document.createElement('span');
            cell.className = 'guess-cell';
            cell.textContent = guess[i];
            cell.style.background = feedback[i];
            row.appendChild(cell);
        }
        guessesGrid.appendChild(row);
    });
}

function getFeedback(guess, code) {
    // Returns array of color strings: 'var(--green)', 'var(--yellow)', 'var(--gray)'
    // First, mark correct positions (green)
    const feedback = Array(4).fill('var(--gray)');
    const codeArr = code.split('');
    const guessArr = guess.split('');
    const codeUsed = Array(4).fill(false);
    const guessUsed = Array(4).fill(false);

    // Green pass
    for (let i = 0; i < 4; i++) {
        if (guessArr[i] === codeArr[i]) {
            feedback[i] = 'var(--green)';
            codeUsed[i] = true;
            guessUsed[i] = true;
        }
    }
    // Yellow pass
    for (let i = 0; i < 4; i++) {
        if (!guessUsed[i]) {
            for (let j = 0; j < 4; j++) {
                if (!codeUsed[j] && guessArr[i] === codeArr[j]) {
                    feedback[i] = 'var(--yellow)';
                    codeUsed[j] = true;
                    break;
                }
            }
        }
    }
    return feedback;
}

submitGuess.addEventListener('click', () => {
    const guess = guessInput.value;
    if (guess.length !== 4 || isNaN(guess)) {
        feedbackDiv.innerText = "Please enter a valid 4-digit number.";
        return;
    }
    if (guesses.length >= maxAttempts) return;

    attempts++;
    attemptsDiv.innerText = "Attempts: " + attempts + "/" + maxAttempts;

    const feedback = getFeedback(guess, secretCode);
    guesses.push({guess, feedback});
    renderGuesses();

    if (guess === secretCode) {
        feedbackDiv.innerText = "🎉 Congratulations! You've cracked the code: " + secretCode;
        submitGuess.disabled = true;
        guessInput.disabled = true;
    } else if (guesses.length >= maxAttempts) {
        feedbackDiv.innerText = "❌ Out of attempts! The code was: " + secretCode;
        submitGuess.disabled = true;
        guessInput.disabled = true;
    } else {
        feedbackDiv.innerText = "";
    }
    guessInput.value = "";
});

guessInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') submitGuess.click();
});

// Set up CSS variables for colors if not present
document.documentElement.style.setProperty('--green', '#6aaa64');
document.documentElement.style.setProperty('--yellow', '#c9b458');
document.documentElement.style.setProperty('--gray', '#787c7e');