const lowAttentionButton = document.getElementById('low-attention');

document.getElementById('start-game').addEventListener('click', () => {
    if(lowAttentionButton.checked) {
        localStorage.setItem('low-attention', 'true');
    }
    window.location.href = 'hackerlevel.html';
});