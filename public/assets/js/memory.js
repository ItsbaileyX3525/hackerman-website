let matchedPairs = 0;
let canFlipDemCards = true;

function shuffle(array) { //Ty stackOverflow
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

const defs = [
    "a hacker who uses their skills for good.",
    "a method of tricking people into giving up personal information.",
    "a hacker who violates computer security for malicious reasons.",
    "a programming language commonly used in web development.",
    "a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.",
    "the process of converting information or data into a code, especially to prevent unauthorized access.",
    "the psychological manipulation of people into performing actions or divulging confidential information.",
    "a vulnerability in software that is unknown to the vendor and has not been patched.",
    "a network of infected computers that are controlled by a hacker to perform malicious tasks.",
    "a code injection technique that exploits a security vulnerability in an application's software by manipulating sql queries.",
]

const words = [
    "white hat hacker",
    "phishing",
    "black hat hacker",
    "javascript",
    "firewall",
    "encryption",
    "social engineering",
    "zero-day exploit",
    "botnet",
    "sql injection"
]



function fitTextToCard(card) {
    const text = card.textContent.trim();
    if (!text) return;
    
    const maxFont = 40;
    const minFont = 8;
    let fontSize = maxFont;
    
    card.style.fontSize = fontSize + "px";
    card.style.lineHeight = "1.1";
    
    while (fontSize > minFont) {
        if (card.scrollHeight <= card.clientHeight && card.scrollWidth <= card.clientWidth) {
            break;
        }
        fontSize -= 2;
        card.style.fontSize = fontSize + "px";
    }
}

function fitAllCards() {
    setTimeout(() => {
        document.querySelectorAll('.memory-card').forEach(card => {
            fitTextToCard(card);
        });
    }, 100);
}

function checkMatch(selection1, selection2) {
    canFlipDemCards = false;
    const url = window.location.protocol + "//" + window.location.host + "/api/match";
    try{
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                selection1: selection1.textContent.trim(),
                selection2: selection2.textContent.trim()
            })
        })
        .then(response => response.json())
        .then(data => {
            const correct = (data.correct === 'true');
            if (correct) {
                setTimeout(() => {
                    selection1.classList.add('matched');
                    selection2.classList.add('matched');
                }, 500);
                matchedPairs++;
                canFlipDemCards = true;
                if (matchedPairs === 10) {
                    setTimeout(() => {
                        showAmogusVictory();
                    }, 550);
                }
            }else if (!correct){
                setTimeout(() => {
                    selection1.classList.add('mismatched');
                    selection2.classList.add('mismatched');
                }, 500);
                setTimeout(() => {
                    canFlipDemCards = true;
                    selection1.classList.remove('flipped');
                    selection2.classList.remove('flipped');
                    selection1.classList.remove('mismatched');
                    selection2.classList.remove('mismatched');
                }, 1100);
            }
    })
    } catch (error) {
        console.error("Woah major error occurred:", error);
    }
}

function showAmogusVictory() {
    const main = document.querySelector('main');
    main.style.display = 'none';
    
    const amogusScreen = document.querySelector('.amogus-screen');
    amogusScreen.style.display = 'flex';
    
    setTimeout(() => {
        amogusScreen.classList.add('animate');
    }, 100);
}

function handleCardClick(event) {
    if (!canFlipDemCards) return;
    const card = event.currentTarget;
    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;

    card.classList.add('flipped');
    fitTextToCard(card);

    const flippedCards = document.querySelectorAll('.memory-card.flipped:not(.matched)');
    
    if (flippedCards.length === 2) {
        const [selection1, selection2] = flippedCards;
        checkMatch(selection1, selection2);
    }
}


function loadQuestions() {
    const cards = document.querySelectorAll('.memory-card');
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const randomChoice = Math.random()
        function addDefs(){
            const randomIndex = Math.floor(Math.random() * defs.length);
            card.textContent = defs[randomIndex];
            defs.splice(randomIndex, 1);
            fitTextToCard(card);
        }
        function addWords(){
            const randomIndex = Math.floor(Math.random() * words.length);
            card.textContent = words[randomIndex];
            words.splice(randomIndex, 1);
        }

        if(randomChoice < .5){
            if(words.length > 0){
                
                addWords();
            }else{
                addDefs();
            }
        }else{
            if(defs.length > 0){
                addDefs();
            }else{
                addWords();
            }
        }
        
        card.addEventListener('click', handleCardClick);
    }
}

shuffle(defs);
shuffle(words);

window.addEventListener('DOMContentLoaded', fitAllCards);
window.addEventListener('resize', fitAllCards);

loadQuestions();